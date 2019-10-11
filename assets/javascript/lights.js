function changeLights(weatherCode) {
    const token = API_TOKEN;

    // weatherCode = weatherCode.toString();

    var weatherCat = weatherCode[0];

    if (codes[weatherCat][weatherCode].effectUrl) {
        $.ajax({
            headers: {
                'Authorization': `Bearer ${token}`
            },
            url: codes[weatherCat][weatherCode].effectUrl,
            method: 'POST',
            data: codes[weatherCat][weatherCode].effectParams
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
            data: codes[weatherCat][weatherCode].params
        }).then((response) => {
            console.log('The light is on! With no effects.');
            console.log(response);
        })
    }
}