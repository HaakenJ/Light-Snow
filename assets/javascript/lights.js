var currentWeather = '602';

const token = API_TOKEN;

var weatherCat = currentWeather[0];


if (weatherCodes[weatherCat][currentWeather].includes('effectUrl')) {
    $.ajax({
        headers: {
            'Authorization': `Bearer ${token}`
        },
        url: weatherCodes[weatherCat][currentWeather].effectUrl,
        method: 'POST',
        data: weatherCodes[weatherCat][currentWeather].effectParams
    }).then((response) => {
        console.log('The light is on with effects!');
        console.log(response);
    })
} else {
    $.ajax({
        headers: {
            'Authorization': `Bearer ${token}`
        },
        url: 'https://api.lifx.com/v1/lights/all/state',
        method: 'PUT',
        data: weatherCodes[weatherCat][currentWeather].params
    }).then((response) => {
        console.log('The light is on! With no effects.');
        console.log(response);
    })
}
