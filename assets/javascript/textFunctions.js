/* Function to add keys from the passed in object, change '-'s to spaces,
    capitalize the first letters, and add them to the dropdown menu. */
function addResorts(resortObj) {
    // Loop through keys.
    Object.keys(resortObj).forEach((resort) => {
        let newListItem = $('<li>').addClass('dropdown-item text-white'),
            newATag = $('<a>');

        newATag.text(capitalizeFirst(addSpaces(resort)));
        newListItem.append(newATag);
        newListItem.attr('data-name', resort);
        /* ********************************************** */
        $('#resorts').append(newListItem);
        /* ********************************************** */
    })
}

// Replace '-'s with spaces.
function addSpaces(str) {
    let newStr = str.replace('-', ' ');
    return newStr;
}
// Capitalize the first letter in words.
function capitalizeFirst(str) {
    let newArr = str.split(' ');
    newArr.forEach((word, index) => {
        newArr[index] = word[0].toUpperCase() + word.substring(1);
    })
    return newArr.join(' ');
}