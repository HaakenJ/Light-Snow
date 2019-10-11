function changeLights(weatherCode) {
    const token = API_TOKEN;

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
            console.log(codes[weatherCat][weatherCode].effectUrl);
            console.log(codes[weatherCat][weatherCode].effectParams);
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
            console.log(codes[weatherCat][weatherCode].params);
            console.log(response);
        })
    }
}