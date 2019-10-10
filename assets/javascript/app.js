/* Basic format we can use for resorts, all lowercase and one word so that 
    we can convert any input into lowercase with no spaces.*/

//let resorts = ['aspen'];

//let apiKey = '050a4a8faf065301b32e5117faf9169a'; // Open Weather cprybell Project-1 API key

//let weatherCode = "";

// This will return the UNIX timestamp from 8 hours ago.
//let queryTime = moment().subtract(8, 'hours').format('X');

//console.log(queryTime);


/* When requesting a forecast for a previous time, the hourly forecast returned
    is for the full 24 hours of the day requested, regardless of the specific
    time that was requested.  We will need to somehow pick out only the 8-12
    hours prior to the current time. */

// A test url for the summit of crystal mountain.
//let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=zermatt&APPID=${apiKey}`;
//api.openweathermap.org/data/2.5/weather?q={city name},{country code}

/*
$.ajax({
    url: weatherUrl,
    method: 'GET'
}).then((response) => {
    let lastEight = {},
        hourIndex = 1;
    console.log('Api has been called.');

    console.log(response);
    console.log(JSON.stringify(response));
    console.log(response.weather[0].id);
    weatherCode = response.weather[0].id;
    // response.hourly.data.forEach((hour) => {
    //     if (hour.time >= queryTime) {
    //         lastEight[hourIndex] = hour;
    //         hourIndex++
    //     }
    // })
    //console.log('Number of hours: ' + hourIndex);
    //console.log(lastEight)
})

*/

let currentWeather = getWeather("48.7767", "121.8144");

