var firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: "lightsnow-32ff9.firebaseapp.com",
    databaseURL: "https://lightsnow-32ff9.firebaseio.com",
    projectId: "lightsnow-32ff9",
    storageBucket: "lightsnow-32ff9.appspot.com",
    messagingSenderId: "253885354798",
    appId: "1:253885354798:web:d8b109821feaf43e5560bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

// Get resort in click function with $(this).val()

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

$('#add').on('click', (event) => {
    event.preventDefault();
    pushToDatabase('kramer', $('input').val());
    console.log('You clicked');
})
$('#remove').on('click', (event) => {
    event.preventDefault();
    removeFromDb('kramer', $('input').val());
    console.log('You removed');
})

// This is the Google Maps url
$('#map').attr('src', `https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}
&q=Space+Needle,Seattle+WA`)