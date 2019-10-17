/* This file contains code to use in the future.  Not currently implemented. */

var firebaseConfig = {
    // Key in config.js which is not uploaded to github so we can protect keys.
    apiKey: FIREBASE_KEY,
    authDomain: "lightsnow-32ff9.firebaseapp.com",
    databaseURL: "https://lightsnow-32ff9.firebaseio.com",
    projectId: "lightsnow-32ff9",
    appId: "1:253885354798:web:d8b109821feaf43e5560bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refence to the database.
let database = firebase.database();

// Pushes parameters to database.
function pushToDatabase(username, resort) {
    /* Each username will have their own tree with their favorite resorts at this
        location. */
    let newFavRef = database.ref(username + '/favorites/' + resort);
    // sets a new resort with the name of the resort.
    newFavRef.set({
        resort: resort
    });
}

// Remove a child from the database.
function removeFromDb(username, resort) {
    database.ref(username + '/favorites/' + resort).remove();
}


// This will only be used if we add the favorites option.
/* ******************************************* */
// When a favoite button is clicked, add the resort to the DB.
$('#add').on('click', (event) => {
    event.preventDefault();
    pushToDatabase('kramer', $('input').val());
    console.log('You clicked');
})
// When a remove button is clicked, remove the resort to the DB.
$('#remove').on('click', (event) => {
    event.preventDefault();
    removeFromDb('kramer', $('input').val());
    console.log('You removed');
})
/* ****************************************** */
