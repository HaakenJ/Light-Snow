function addResorts(resortObj) {
    Object.keys(resortObj).forEach((resort) => {
        let newListItem = $('<li>').addClass('dropdown-item'),
            newATag = $('<a>');

        newATag.text(capitalizeFirst(addSpaces(resort)));
        newListItem.append(newATag);
        newListItem.attr('data-name', resort);
        $('#resorts').append(newListItem);
    })
}

function addSpaces(str) {
    let newStr = str.replace('-', ' ');
    return newStr;
}

function capitalizeFirst(str) {
    let newArr = str.split(' ');
    newArr.forEach((word, index) => {
        newArr[index] = word[0].toUpperCase() + word.substring(1);
    })
    return newArr.join(' ');
}

$(document).ready(() => {
    addResorts(skiResorts);
    $('#map').attr('src', `https://www.google.com/maps/embed/v1/view?key=${MAPS_KEY}
    &center=47.608868,-122.335884&zoom=18&maptype=satellite`);


    $('.dropdown-item').on('click', function() {
        let resortName = $(this).attr('data-name'),
            lat = skiResorts[resortName].lat,
            lon = skiResorts[resortName].long;

        getWeather(lat, lon);
    })
})