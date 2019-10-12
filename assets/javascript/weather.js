/* Function to create an object of the current weather conditions pulled from
    an API response. */
function getCondObj(response) {
    let condObj = {};
    
    condObj['Description'] = response.weather[0].description;
    // Check what units to use.
    if ($('#units').prop('checked')) {
        condObj['Temperature'] = (response.main.temp + ' F');
        condObj['Wind Speed'] = (response.wind.speed + ' mph');
    } else {
        condObj['Temperature'] = (response.main.temp + ' C');
        condObj['Wind Speed'] = (response.wind.speed + ' kph');
    }
    condObj['Humidity'] = (response.main.humidity + '%');
    condObj['Wind Direction'] = (response.wind.deg + ' degrees');

    console.log(condObj);

    return condObj;
}





/* Create a card displaying the current weather conditions passed in.*/
function createCard(iconId, condObj, bgColor, timezone) {
    let newCard = $('<div>').addClass('card text-center'),
        image = $('<img>').addClass('card-img-top'),
        newBody = $('<div>').addClass('card-body'),
        timeHeader = $('<h5>').addClass('card-title'),
        time = $('<p>').addClass('card-text mb-2');

    newCard.css('width', '20rem;');

    image.attr('src', `http://openweathermap.org/img/wn/${iconId}@2x.png`);
    image.attr('alt', condObj['Description']);
    image.css('background-color', bgColor);

    timeHeader.text('Local Time');
    time.text(moment().tz(timezone).format('HH:mm'));

    newCard.append(image);
    newCard.append(timeHeader);
    newCard.append(time);

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

    // Code to change for index.html
    /* ********************************** */
    // Line goes here to delete whatever is currently in the card holding div.
    $('.card-holder').empty();
    // Line goes here to show the card holding div.
    $('.card-holder').show();
    // Line goes here to add the card to the card holding div.
    $('.card-holder').append(newCard);
    /* ********************************** */
}





/* Main API function.  Pass in lat long and name to call weather API, get the
    weather code and conditions, create a card, show the location on the map,
    then call the light change API */
function getWeather(resortLat, resortLon, resortName) {
    let weatherCode, units;

    // Key is in config.js
    let apiKey = WEATHER_KEY;

    // Check what units to use.
    if ($('#units').prop('checked')) {
        units = 'imperial';
    } else {
        units = 'metric';
    }

    // Create URL for weather api
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${resortLat}&lon=${resortLon}&APPID=${apiKey}&units=${units}`;

    // Check if the clicked item is a test case or a real resort.
    if (skiResorts[resortName].test) {
        weatherCode = skiResorts[resortName].code;
        weatherCode = weatherCode.toString();
        changeLights(weatherCode);
    } else {
        //Call weather API
        $.ajax({
            url: weatherUrl,
            method: 'GET'
        }).then((response) => {
            console.log('Api has been called.');
            console.log(response.weather[0].id);

            /* ********************************************** */
            /* This is the Google Maps url, it will show whatever location is 
            passed in. We will need to change the selector to display it in the
            proper spot. */
            $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}&center=${resortLat},${resortLon}&zoom=14&maptype=satellite`);
            /* ********************************************** */
            
            // Get the weather code and convert to string.
            weatherCode = response.weather[0].id;
            weatherCode = weatherCode.toString();
            /* Get the icon, light color to use as background for card,
            and timezone. */
            let iconId = response.weather[0].icon,
                bgColor = codes[weatherCode[0]][weatherCode].params.color,
                timezone = skiResorts[resortName].tz;

            // Create and display the card showing weather conditions.
            createCard(iconId, getCondObj(response), bgColor, timezone);

            // Change the color and effect of the light.
            changeLights(weatherCode);
        })
    }
}