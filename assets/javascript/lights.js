
// Function to call the light API and change the color and effect of the light.
function changeLights(weatherCode) {
    // Key in config.js
    const token = API_TOKEN;

    /* Get first number in the weather code.  This will be used as the key in
        first level of weatherCodes.js */
    var weatherCat = weatherCode[0];

    /* Check if the weather for that code contains effects.  If it does, make
        a POST call using the effect parameters.  A post call is required by
        the API for effects. */
    /* POST calls will create a new request to the server, it is not idempotent
        so if you make N calls you will have N effects.  A PUT call will update
        a request on the server if it already exists, otherwise it will create 
        a new one.  PUT calls are idempotent so if you make N calls you will 
        still only have 1 result. */
    if (codes[weatherCat][weatherCode].effectUrl) {
        $.ajax({
            // The header of the call contains the authorization token. (API Key)
            headers: {
                'Authorization': `Bearer ${token}`
            },
            /* The URL is retreived from the weatherCodes object and determines
                what the effect will be.*/
            url: codes[weatherCat][weatherCode].effectUrl,
            // Use a POST method for effects.
            method: 'POST',
            /* The data passed to the light is retreived from weatherCodes object
                the data tells color, duration, timing of effect etc.*/
            data: codes[weatherCat][weatherCode].effectParams
        }).then((response) => {
            // The response is just info back from the light for reference.
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
            /* A PUT method is used because we are changing the state 
                of the light. */
            url: 'https://api.lifx.com/v1/lights/all/state',
            method: 'PUT',
            data: codes[weatherCat][weatherCode].params
        }).then((response) => {
            console.log(codes[weatherCat][weatherCode].params);
            console.log(response);
        })
    }
}