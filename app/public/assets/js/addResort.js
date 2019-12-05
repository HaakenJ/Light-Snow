// Function to add a resort to skiResorts Obj and dropdown.
function addNewResort(name, address) {
    let resortAddress = encodeURI(address);

    $.ajax({
        url: `https://api.opencagedata.com/geocode/v1/json?q=${resortAddress}&key=${OPEN_CAGE_KEY}&pretty=1`,
        method: 'GET'
    }).then((response) => {

        let newResort = {};

        newResort['lat'] = response.results[0].geometry.lat;
        newResort['lng'] = response.results[0].geometry.lng;
        newResort['tz'] = response.results[0].annotations.timezone.name;

        console.log(newResort);

        let username = firebase.auth().currentUser.displayName;

        pushToDatabase(username, name, newResort);


        $('#fav-resorts').empty();
        getUserResorts(username);
        $('#add-resort-name').val("");
        $('#add-resort-address').val("");
    })
}