// Function to add a resort to skiResorts Obj and dropdown.
function addNewResort(resortObj, name, address) {
    let resortAddress = encodeURI(address);

    console.log(resortAddress);

    $.ajax({
        url: `https://api.opencagedata.com/geocode/v1/json?q=${resortAddress}&key=${OPEN_CAGE_KEY}&pretty=1`,
        method: 'GET'
    }).then((response) => {
        console.log(response.results[0].geometry.lat);
        console.log(response.results[0].geometry.lng);
        console.log(response.results[0].annotations.timezone.name);

        if (localStorage.getItem('localResorts')) {
            resortObj = JSON.parse(localStorage.getItem('localResorts'));
        } else {
            resortObj = skiResorts;
        }

        resortObj[name] = {
            'lat': response.results[0].geometry.lat,
            'long': response.results[0].geometry.lng,
            'tz': response.results[0].annotations.timezone.name
        }

        let localResorts = {};

        Object.keys(resortObj).forEach((resort) => {
            let currentResortData = resortObj[resort];
            localResorts[resort] = currentResortData;
        });

        localStorage.setItem('localResorts', JSON.stringify(localResorts));

        console.log(JSON.parse(localStorage.getItem('localResorts')));

        $('#nav-resorts').empty();
        resortObj = JSON.parse(localStorage.getItem('localResorts'));
        addResorts(resortObj, 'nav-item', 'nav-resorts');

    })
}