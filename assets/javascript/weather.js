function getWeather(resortLat, resortLon) {
    let weatherCode = "";

    let apiKey = '050a4a8faf065301b32e5117faf9169a'; // Open Weather cprybell Project-1 API key

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${resortLat}&lon=${resortLon}&APPID=${apiKey}`;

    $.ajax({
        url: weatherUrl,
        method: 'GET'
    }).then((response) => {
        console.log('Api has been called.');
        console.log(response);
        console.log(JSON.stringify(response));
        console.log(response.weather[0].id);
        weatherCode = response.weather[0].id;
        changeLights(weatherCode);
    })
}
