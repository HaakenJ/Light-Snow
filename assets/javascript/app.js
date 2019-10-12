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
})