var firebaseConfig = {
    apiKey: "AIzaSyBQJtNCS5HMLu4y7RCp5Og7D3DBDzh9O18",
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

// Pushes parameters to database.
function pushToDatabase(username, resort) {
    let newFavRef = database.ref(username + '/favorites/' + resort);
    newFavRef.set({
        resort: resort
    });
    $('input').val('');
}

// Remove a child from the database.
function removeFromDb(username, resort) {
    database.ref(username + '/favorites/' + resort).remove();
    $('input').val('');
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