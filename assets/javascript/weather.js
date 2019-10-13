/* Function to create an object of the current weather conditions pulled from
    an API response. */
function getCondObj(response) {
    let condObj = {};
    
    // Assign the descript key to be the descript in the API response.
    condObj['Description'] = response.weather[0].description;
    // Check what units to use by checking the checkbox's 'checked' property.
    if ($('#units').prop('checked')) {
        condObj['Temperature'] = (response.main.temp);
        condObj['Temp-unit'] = 'F';
        condObj['Wind Speed'] = (response.wind.speed + ' mph');
    } else {
        condObj['Temperature'] = (response.main.temp);
        condObj['Temp-unit'] = 'C';
        condObj['Wind Speed'] = (response.wind.speed + ' kph');
    }
    condObj['Wind Direction'] = (response.wind.deg + ' degrees');

    console.log(condObj);

    return condObj;
}


/* Create a card displaying the current weather conditions passed in.*/
function updateCards(iconId, condObj, bgColor, timezone) {
    $('#description').text(capitalizeFirst(condObj['Description']));
    $('#wind-speed').text(condObj['Wind Speed']);
    $('#local-time').text(moment().tz(timezone).format('HH:mm'));
    $('#degrees').text(Math.floor(condObj['Temperature']));
    $('#degree-unit').text(condObj['Temp-unit']);
    $('#wind-direction').text(condObj['Wind Direction']);
    $('.container-hue').css('background-color', bgColor);
    $('#icon').attr('src', `http://openweathermap.org/img/wn/${iconId}@2x.png`);
}


/* Main API function.  Pass in lat long and name to call weather API, get the
    weather code and conditions, create a card, show the location on the map,
    then call the light change API */
function getWeather(resortLat, resortLon, resortName) {
    // Create the two variables that will be used later.
    let weatherCode, units;

    // Key is in config.js
    let apiKey = WEATHER_KEY;

    // Check what units to use and assign to units variable.
    if ($('#units').prop('checked')) {
        units = 'imperial';
    } else {
        units = 'metric';
    }

    // Create URL for weather api
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${resortLat}&lon=${resortLon}&APPID=${apiKey}&units=${units}`;

    /* Check if the clicked item is a test case or a real resort by seeing if
        the 'test' key exists in skiResorts for that name. */
    if (skiResorts[resortName].test) {
        /* Assign the weatherCode to whatever the test code is and call the
            light API. */
        weatherCode = skiResorts[resortName].code;
        weatherCode = weatherCode.toString();
        updateCards(skiResorts[resortName].icon, testCondObj, '#FFFFFF', 'America/Los_Angeles');
        $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}&center=${resortLat},${resortLon}&zoom=14&maptype=satellite`);
        changeLights(weatherCode);
    } else {
        //Call weather API with the above URL.
        // Using GET because we want to get info from the API call.
        $.ajax({
            url: weatherUrl,
            method: 'GET'
        }).then((response) => {
            console.log('Api has been called.');
            console.log(response.weather[0].id);

            /* This is the Google Maps url, it will show whatever location is 
            passed in. We pass in the lat and lon here. */
            $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}&center=${resortLat},${resortLon}&zoom=14&maptype=satellite`);
            
            /* Get the weather code and convert to string, otherwise we cannot
                index it to get the first character to use in weatherCodes. */
            weatherCode = response.weather[0].id;
            weatherCode = weatherCode.toString();
            /* Get the icon and light color to use as background for card,
            and timezone. */
            let iconId = response.weather[0].icon,
                bgColor = codes[weatherCode[0]][weatherCode].params.color,
                timezone = skiResorts[resortName].tz;

            console.log(iconId);

            // Create and display the card showing weather conditions.
            updateCards(iconId, getCondObj(response), bgColor, timezone);

            // Change the color and effect of the light.
            changeLights(weatherCode);
        })
    }
}