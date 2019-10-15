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
/* When the page is ready, load resorts into dropdown, add a map centered on
    our class, and set a click function for the resorts to call the getWeather
    function. */
$(document).ready(() => {
    /* Add resorts to the dropdown located in the navbar, they will be added
        to the nav-resorts id and each item will be given the class nav-item */
    addResorts(skiResorts, 'nav-item', 'nav-resorts');

    // Add resorts to the opening page dropdrown menu.
    addResorts(skiResorts, 'opening-item', 'opening-resorts');

    // Hide the main content of the page so that we only see the opening page.
    $('.main-content').hide();

    // Assign the src url for the map to be centered on our classroom.
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);

    // Assign a click function to the dropdown items.
    $('.dropdown-item').on('click', function () {
        /* Fun fact, I had to use a function declaration (using the style
            'function() {content}') rather than an arrow function 
            ( () => {conent} ) because with arrow functions the value of
            'this' is always going to refer to the global 'window' object.*/

        /* Assign the name of the resort to whatever is contained in the 
            data-name attribute of the clicked item.  'this' here refers
            to the item that is clicked.*/
        let resortName = $(this).attr('data-name'),

            /* Assign the latitue and longitude variables to the value
                contained in the skiResorts object for that resort name.*/
            lat = skiResorts[resortName].lat,
            lon = skiResorts[resortName].long;

        $('#page-header').text(capitalizeFirst(addSpaces(resortName)));;

        /* Call the getWeather (which will also change the light) function
            with the clicked item's lat, long, and name. */
        getWeather(lat, lon, resortName);
    })

    /* Assign a click function to the items in the opening page dropdown
        menu.  This will animate the opening page and show the main content. */
    $('.opening-item').one('click', () => {
        animateSnowflake.play();
        removeHeader.play();
        $('.main-content').show();
        $('.opening-resorts').hide();
        showPage.play();
        setTimeout(() => {
            $('.opening-content').hide();
        }, 2000);
    })

    // Add a resort to dropdown only if it is letters, spaces, or hyphens.
    $('#add-resort-submit').on('click', (event) => {
        event.preventDefault();

        let newLi = $('<li>').addClass('dropdown-item text-light nav-item'),
            newATag = $('<a>'),
            newResort = capitalizeFirst($('#add-resort-input').val());

        if (stringValidation(newResort)) {
            newLi.attr('data-name', newResort);
            newATag.text(newResort);
            newLi.append(newATag);
            $('.dropdown-menu').prepend(newLi);
            $('#add-resort-input').val('');
        } else {
            $('#add-resort-input').val('');
        }

    })
})