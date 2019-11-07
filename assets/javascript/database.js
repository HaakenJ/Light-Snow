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
function pushToDatabase(username, resort, data) {
    /* Each username will have their own tree with their favorite resorts at this
        location. */
    let newFavRef = database.ref(username + '/favorites/' + resort);
    // sets a new resort with the name of the resort.
    newFavRef.set(data);
}

// Remove a child from the database.
function removeFromDb(username, resort) {
    database.ref(username + '/favorites/' + resort).remove();
}

function getUserResorts(username) {
    let userRef = database.ref(username + '/favorites/');

    userRef.once('value').then((snap) => {
        addResorts(snap.val(), 'fav-item', 'fav-resorts');
    })
}