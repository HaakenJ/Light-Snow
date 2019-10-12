<<<<<<< HEAD
/* Basic format we can use for resorts, all lowercase and one word so that 
    we can convert any input into lowercase with no spaces.*/
let resorts = {
    'crystal': {
        lat: '46.928291',
        long: '-121.504595',
        timezone: 'America/Los_Angeles'
    }
}


let apiKey = 'd7401e28697849dfba0d624d16de25ec';

// This will return the UNIX timestamp from 8 hours ago.
let queryTime = moment().subtract(8, 'hours').format('X');

console.log(queryTime);


/* When requesting a forecast for a previous time, the hourly forecast returned
    is for the full 24 hours of the day requested, regardless of the specific
    time that was requested.  We will need to somehow pick out only the 8-12
    hours prior to the current time. */

// A test url for the summit of crystal mountain.
let weatherUrl = `https://api.darksky.net/forecast/d7401e28697849dfba0d624d16de25ec/46.928291,-121.504595,${queryTime}?units=us`;



$.ajax({
    url: weatherUrl,
    method: 'GET'
}).then((response) => {
    let lastEight = {},
        hourIndex = 1;
    console.log('Api has been called.');
    console.log(JSON.stringify(response.hourly));
    // response.hourly.data.forEach((hour) => {
    //     if (hour.time >= queryTime) {
    //         lastEight[hourIndex] = hour;
    //         hourIndex++
    //     }
    // })
    console.log('Number of hours: ' + hourIndex);
    console.log(lastEight)
=======
/* When the page is ready, load resorts into dropdown, add a map centered on
    our class, and set a click function for the resorts to call the getWeather
    function. */
$(document).ready(() => {
    addResorts(skiResorts);
    /* ************************************************* */
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);
    /* ************************************************* */

    /* ************************************************* */
    $('.dropdown-item').on('click', function() {
    /* ************************************************* */
        let resortName = $(this).attr('data-name'),
            lat = skiResorts[resortName].lat,
            lon = skiResorts[resortName].long;

        getWeather(lat, lon, resortName);
    })
>>>>>>> master
})