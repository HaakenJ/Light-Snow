/* Basic format we can use for resorts, all lowercase and one word so that 
    we can convert any input into lowercase with no spaces.*/
let resorts = {
    'crystal': {
        lat: '46.928291',
        long: '-121.504595',
        timezone: 'America/Los_Angeles'
    }
}
var resortLocation = ["VAIL, CO", "BEAVER CREEK, CO", "WHISTLER BLACKCOMB, BC", "BRECKENRIDGE, CO", "KEYSTONE, CO", "PARK CITY, UT", "HEAVENLY, CA/NV", "NORTHSTAR, CA", "KIRKWOOD, CA", "STOWE, VT", "WILMOT, WI", "AFTON ALPS, MN", "MT BRIGHTON, MI", "PERISHER, AUSTRALIA ", "FALLS CREEK, AUSTRALIA ", "HOTHAM, AUSTRALIA", "OKEMO, VT", "MOUNT SUNAPEE, NH", "CRESTED BUTTE, CO", "STEVENS PASS, WA", "MOJUNT SNOW, VT", "ATTITASH MOUNTAIN RESORT, NH", "WILDCAT MOUNTAIN, NH", "CROTCHED MOUNTAIN, NH", "HUNTER MOUNTAIN, NY", "LIVERTY MOUNTAIN RESORT, PA", "ROUNDTOP MOUNTAIN RESORT, PA", "WHITETAIL RESORT, PA", "BIG BOULDER, PA", "JACK FROST, PA", "BIG BOULDER, PA", "ALPINE VALLEY, OH", "BOSTON MILLS, OH", "BRANDYWINE, OH", "MAD RIVER MOUNTAIN, OH", "HIDDEN VALLEY, MO", "SNOW CREEK, MO", "PAOLI PEAKS, IN"];

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