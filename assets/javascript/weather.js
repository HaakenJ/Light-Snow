function getWeather(resortLat, resortLon) {
    let weatherCode = "";
    /* This is the Google Maps url, it will show whatever location is passed in.
        we will need to change the selector to display it in the proper spot. */
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
        &center=${resortLat},${resortLon}&zoom=18&maptype=satellite`);

    let apiKey = '050a4a8faf065301b32e5117faf9169a'; // Open Weather cprybell Project-1 API key

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${resortLat}&lon=${resortLon}&APPID=${apiKey}&units=imperial`;

    $.ajax({
        url: weatherUrl,
        method: 'GET'
    }).then((response) => {
        console.log('Api has been called.');
        console.log(response);
        console.log(JSON.stringify(response));
        console.log(response.weather[0].id);

        weatherCode = response.weather[0].id;
        weatherCode = weatherCode.toString();
        let iconId = response.weather[0].icon,
            bgColor = codes[weatherCode[0]][weatherCode].params.color;

        createCard(iconId, getCondObj(response), bgColor);


        changeLights(weatherCode);
    })
}

function getCondObj(response) {
    let condObj = {};

    condObj['Description'] = response.weather[0].description;
    condObj['Temperature'] = response.main.temp;
    condObj['Humidity'] = response.main.humidity;
    condObj['Wind Speed'] = (response.wind.speed + ' mph');
    condObj['Wind Direction'] = (response.wind.deg + ' degrees');

    console.log(condObj);

    return condObj;
}


function createCard(iconId, condObj, bgColor) {
    let newCard = $('<div>').addClass('card text-center'),
        image = $('<img>').addClass('card-img-top'),
        newBody = $('<div>').addClass('card-body');

    newCard.css('width', '20rem;');
    image.attr('src', `http://openweathermap.org/img/wn/${iconId}@2x.png`);
    image.attr('alt', condObj['Description']);
    image.css('background-color', bgColor);
    newCard.append(image);

    for (var condition in condObj) {
        let newCond = $('<div>').addClass('card-text'),
            header = $('<h5>').addClass('card-title'),
            content = $('<p>').addClass('card-text mb-2');

        header.text(condition);
        content.text(condObj[condition]);

        newCond.append(header);
        newCond.append(content);

        newBody.append(newCond);
    }
    newCard.append(newBody);

    // Line goes here to delete whatever is currently in the card holding div.
    $('.card-holder').empty();
    // Line goes here to show the card holding div.
    $('.card-holder').show();
    // Line goes here to add the card to the card holding div.
    $('.card-holder').append(newCard);
}

// Icon with light color as background
// iconId = response.weather[0].icon
// url http://openweathermap.org/img/wn/${iconId}@2x.png
// Weather description
// response.weather[0].description
// temperature
// response.main.temp
// humidity
// response.main.humidity
// Wind speed and direction
// response.wind.speed
// response.wind.deg