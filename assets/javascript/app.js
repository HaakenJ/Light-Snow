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



/* When requesting a forecast for a previous time, the hourly forecast returned
    is for the full 24 hours of the day requested, regardless of the specific
    time that was requested.  We will need to somehow pick out only the 8-12
    hours prior to the current time. */

// A test url for the summit of crystal mountain returning only the hourly forecast.
let weatherUrl = `https://api.darksky.net/forecast/d7401e28697849dfba0d624d16de25ec/46.928291,-121.504595,1570406400?units=us?exclude=currently,daily`;

// This will return the UNIX timestamp from 8 hours ago.
let queryTime = moment().subtract(8, 'hours').format('X');