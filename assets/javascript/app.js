
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
})