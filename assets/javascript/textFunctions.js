// Replace '-'s with spaces.
function addSpaces(str) {
    let newStr = str.replace('-', ' ');
    return newStr;
}
// Capitalize the first letter in words.
function capitalizeFirst(str) {
    // Split the string by spaces.
    let newArr = str.split(' ');
    newArr.forEach((word, index) => {
        /* Change the word in newArr at that index to the same word
            with the first letter capitalized. */
        newArr[index] = word[0].toUpperCase() + word.substring(1);
    })
    // Rejoin the array into a string with spaces.
    return newArr.join(' ');
}

/* Function to add keys from the passed in object, change '-'s to spaces,
    capitalize the first letters, and add them to the dropdown menu. */
function addResorts(resortObj, classToAdd, idToAddTo) {
    /* Object.keys(obj) creates an array of the keys in obj so that we
        can loop through  them. */
    Object.keys(resortObj).forEach((resort) => {
        // Create a new list item and an anchor tag to put inside.
        // This is just the format they used on bootstrap.
        let newListItem = $('<li>').addClass('dropdown-item text-light'),
            newATag = $('<a>');

        /* Pass the current resort into the addSpaces function to change
            '-' to ' ', then pass the resulting string in the capitalizeFirst 
            function, then use that as text. */
        newATag.text(capitalizeFirst(addSpaces(resort)));
        newListItem.append(newATag);
        // Set the data-name attribute to the resorts name.
        newListItem.attr('data-name', resort);
        newListItem.addClass(classToAdd);
        // Add the item to the id that was passed in.
        $('#' + idToAddTo).append(newListItem);
    })
}

