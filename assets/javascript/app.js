/* When the page is ready, load resorts into dropdown, add a map centered on
    1325 4th Ave Seattle, and set a click function for the resorts to call the
    getWeather function. */
$(document).ready(() => {
    let resortObj;
    /* Add resorts to the dropdown located in the navbar, they will be added
        to the nav-resorts id and each item will be given the class nav-item */
    /* If the user has local resorts stored then those are used instead. */
    if (localStorage.getItem('localResorts')) {

        resortObj = JSON.parse(localStorage.getItem('localResorts'));

        addResorts(resortObj, 'nav-item', 'nav-resorts');
        addResorts(resortObj, 'opening-item', 'opening-resorts');
    } else {
        resortObj = skiResorts;
        addResorts(resortObj, 'nav-item', 'nav-resorts');
        addResorts(resortObj, 'opening-item', 'opening-resorts');
    }

    console.log(resortObj);

    $('.main-content').hide();
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);

    $(document.body).on('click', '.dropdown-item', function () {
        if (localStorage.getItem('localResorts')) {
            resortObj = JSON.parse(localStorage.getItem('localResorts'));
        } else {
            resortObj = skiResorts;
        }
        
        let resortName = $(this).attr('data-name'),

            lat = resortObj[resortName].lat,
            lon = resortObj[resortName].long;

        console.log(resortObj[resortName].lat);

        $('#page-header').text(capitalizeFirst(addSpaces(resortName)));;

        /* Call the getWeather (which will also change the light) function
            with the clicked item's lat, long, and name. */
        getWeather(lat, lon, resortName, resortObj);
    })

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

        let resortName = $('#add-resort-name').val(),
            resortAddress = $('#add-resort-address').val();

        addNewResort(skiResorts, resortName, resortAddress);
    })
})