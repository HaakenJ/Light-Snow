const auth = firebase.auth(),
    user = firebase.auth().currentUser,
    provider = new firebase.auth.GoogleAuthProvider();

$(document).ready(() => {
    if (user) {
        $('#add-resort-button').show();
        $('#sign-out-submit').show();
    } else {
        $('#add-resort-button').hide();
        $('#sign-out-submit').hide();
        $('#login-submit').show();
    }
})

auth.onAuthStateChanged((user) => {
    if (user) {
        $('#add-resort-button').show();
        $('#sign-out-submit').show();
        $('#login-submit').hide();
    } else {
        $('#add-resort-button').hide();
        $('#sign-out-submit').hide();
        $('#login-submit').show();
    }
})

$('#login-submit').on('click', (event) => {
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });
})

$('#sign-out-submit').on('click', (event) => {
    event.preventDefault();
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('sign out successful.')
    }, function (error) {
        // An error happened.
        console.log(error);
    });
})