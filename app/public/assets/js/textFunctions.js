// Replace '-'s with spaces.
function addSpaces(str) {
    let newStr = str.replace(/-/g, ' ');
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


/* Function to add keys from the passed in object, change '-'s to spaces,
    capitalize the first letters, and add them to the dropdown menu. */
function addResorts(resortObj, classToAdd, idToAddTo, buttons = false) {
    resortList = mergeSort(Object.keys(resortObj));

    resortList.forEach((resort) => {
        let newListItem = $('<li>').addClass('dropdown-item text-light'),
            newATag = $('<a>'),
            addButton = $('<button>').addClass('btn btn-xs text-dark fav-button');

        newATag.text(capitalizeFirst(addSpaces(resort)));
        addButton.text('+');
        newListItem.append(newATag);
        if (buttons) {
            newListItem.append(addButton);
        }
        newListItem.attr('data-name', resort);
        newListItem.addClass(classToAdd);

        $('#' + idToAddTo).append(newListItem);
    })
}

// Validate resort that was added, only text and fewer than 30 characters.
function stringValidation(str) {
    let alpha = /^[A-Z -]+$/i;
    return alpha.test(str) && str.length < 30;
}