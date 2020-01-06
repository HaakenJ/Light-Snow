
// Function to call the light API and change the color and effect of the light.
function changeLights(weatherCode) {
    const token = API_TOKEN;
    console.log(codes[weatherCode]);

    /* Check if the weather for that code contains effects.  If it does, make
        a POST call using the effect parameters.  A post call is required by
        the API for effects. */
    if (codes[weatherCode].effectUrl) {
        $.ajax({
            headers: {
                'Authorization': `Bearer ${token}`
            },
            url: codes[weatherCode].effectUrl,
            method: 'POST',
            data: codes[weatherCode].effectParams
        }).then((response) => {
            console.log(response);
        })

    } else {
        $.ajax({
            headers: {
                'Authorization': `Bearer ${token}`
            },
            /* A PUT method is used because we are changing the state 
                of the light. */
            url: 'https://api.lifx.com/v1/lights/all/state',
            method: 'PUT',
            data: codes[weatherCode].params
        }).then((response) => {
            console.log(codes[weatherCode].params);
            console.log(response);
        })
    }
}