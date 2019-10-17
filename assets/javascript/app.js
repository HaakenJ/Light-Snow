/* When the page is ready, load resorts into dropdown, add a map centered on
    1325 4th Ave Seattle, and set a click function for the resorts to call the
    getWeather function. */
$(document).ready(() => {
    /* Add resorts to the dropdown located in the navbar, they will be added
        to the nav-resorts id and each item will be given the class nav-item */
    addResorts(skiResorts, 'nav-item', 'nav-resorts');

    // Add resorts to the opening page dropdrown menu.
    addResorts(skiResorts, 'opening-item', 'opening-resorts');

    $('.main-content').hide();
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);

    $('.dropdown-item').on('click', function () {
        let resortName = $(this).attr('data-name'),

            lat = skiResorts[resortName].lat,
            lon = skiResorts[resortName].long;

        $('#page-header').text(capitalizeFirst(addSpaces(resortName)));;

        /* Call the getWeather (which will also change the light) function
            with the clicked item's lat, long, and name. */
        getWeather(lat, lon, resortName);
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