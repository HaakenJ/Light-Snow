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
    })
})