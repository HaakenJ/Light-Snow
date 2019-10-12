
// Function to call the light API and change the color and effect of the light.
function changeLights(weatherCode) {
    // Key in config.js
    const token = API_TOKEN;
    // Get first number in the weather code.
    var weatherCat = weatherCode[0];
    /* Check if the weather for that code contains effects.  If it does, make
        a POST call using the effect parameters. */
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
    // If no effects make a PUT call to the light usign the correct parameters.
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