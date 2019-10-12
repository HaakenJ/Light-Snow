/* When the page is ready, load resorts into dropdown, add a map centered on
    our class, and set a click function for the resorts to call the getWeather
    function. */
$(document).ready(() => {
    addResorts(skiResorts, 'nav-item', 'nav-resorts');
    addResorts(skiResorts, 'opening-item', 'opening-resorts');
    $('.main-content').hide();
    /* ************************************************* */
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);
    /* ************************************************* */

    /* ************************************************* */
    $('.dropdown-item').on('click', function () {
        /* ************************************************* */
        let resortName = $(this).attr('data-name'),
            lat = skiResorts[resortName].lat,
            lon = skiResorts[resortName].long;

        getWeather(lat, lon, resortName);
    })
    // Click anywhere on the body of the page to animate the svg.
    $('.opening-item').one('click', () => {
        animateSnowflake.play();
        removeHeader.play();
        $('.main-content').show();
        $('.opening-resorts').hide();
        showPage.play();
    })
})