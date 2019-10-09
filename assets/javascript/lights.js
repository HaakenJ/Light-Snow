var currentweather = '602';

const token = API_TOKEN;

var weatherCat = currentweather[0];




$.ajax({
    headers: {
        'Authorization': `Bearer ${token}`
    },
    url: 'https://api.lifx.com/v1/lights/all/state',
    method: 'PUT',
    data: weatherCodes[weatherCat][currentweather].params
}).then((response) => {
    console.log(response);
})