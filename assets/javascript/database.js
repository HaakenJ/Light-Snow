var firebaseConfig = {
    // Key in config.js
    apiKey: FIREBASE_KEY,
    authDomain: "lightsnow-32ff9.firebaseapp.com",
    databaseURL: "https://lightsnow-32ff9.firebaseio.com",
    projectId: "lightsnow-32ff9",
    appId: "1:253885354798:web:d8b109821feaf43e5560bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

// Pushes parameters to database.
function pushToDatabase(username, resort) {
    let newFavRef = database.ref(username + '/favorites/' + resort);
    newFavRef.set({
        resort: resort
    });
}

// Remove a child from the database.
function removeFromDb(username, resort) {
    database.ref(username + '/favorites/' + resort).remove();
}

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
