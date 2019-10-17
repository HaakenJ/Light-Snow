let codes = {
    200: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.4'
        },
        'desc': 'thunderstorm with light rain'


    },
    201: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brisghtness': '0.7'
        },
        'desc': 'thunderstorm with rain'


    },
    202: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.9'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'yellow',
            'from_color': 'white',
            'period': 1,
            'cycles': 100
        },
        'desc': 'thunderstorm with heavy rain'
    },
    210: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.5'
        },
        'desc': 'light thunderstorm'
    },
    211: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.8'
        },
        'desc': 'thunderstorm'
    },
    212: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '1.0'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'yellow',
            'from_color': 'white',
            'period': 1,
            'cycles': 100
        },
        'desc': 'heavy thunderstorm'
    },
    221: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.6'
        },
        'desc': 'ragged thunderstorm'
    },
    230: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.1'
        },
        'desc': 'thunderstorm with light drizzle'
    },
    231: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.2'
        },
        'desc': 'thunderstorm with drizzle'
    },
    232: {
        'params': {
            'power': 'on',
            'color': 'yellow',
            'brightness': '0.3'
        },
        'desc': 'thunderstorm with heavy drizzle'
    },
    300: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.2'
        },
        'desc': 'light intensity drizzle'
    },
    301: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.4'
        },
        'desc': 'drizzle'
    },
    302: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.5'
        },
        'desc': 'heavy intensity drizzle'
    },
    310: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.3'
        },
        'desc': 'light intensity drizzle rain'
    },
    311: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.6'
        },
        'desc': 'drizzle rain'
    },
    312: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.7'
        },
        'desc': 'heavy intensity drizzle rain'
    },
    313: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.8'
        },
        'desc': 'shower rain and drizzle'
    },
    314: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '1.0'
        },
        'desc': 'heavy shower rain and drizzle'
    },
    321: {
        'params': {
            'power': 'on',
            'color': 'cyan',
            'brightness': '0.9'
        },
        'desc': 'shower drizzle'
    },

    500: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.5'
        },
        'desc': 'light rain'
    },
    501: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.6'
        },
        'desc': 'moderate rain'
    },
    502: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.7'
        },
        'desc': 'heavy intensity rain'
    },
    503: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.9'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'blue',
            'from_color': 'white',
            'period': 1,
            'cycles': 100
        },
        'desc': 'very heavy rain'
    },
    504: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '1.0'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'blue',
            'from_color': 'white',
            'period': 0.5,
            'cycles': 100
        },
        'desc': 'extreme rain'
    },
    511: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.8'
        },
        'desc': 'freezing rain'
    },
    520: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.1'
        },
        'desc': 'light intensity shower rain'
    },
    521: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.2'
        },
        'desc': 'shower rain'
    },
    522: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.3'
        },
        'desc': 'heavy intensity shower rain'
    },
    531: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.4'
        },
        'desc': 'ragged shower rain'
    },

    600: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '0.8'
        },
        'desc': 'light snow'
    },
    601: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '0.9'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'green',
            'from_color': 'white',
            'period': 1,
            'cycles': 100
        },
        'desc': 'snow'
    },
    602: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '1.0'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'green',
            'from_color': 'white',
            'period': 0.5,
            'cycles': 100
        },
        'desc': 'heavy snow'
    },
    611: {
        'params': {
            'power': 'on',
            'color': 'purple',
            'brightness': '0.7'
        },
        'desc': 'sleet'
    },
    612: {
        'params': {
            'power': 'on',
            'color': 'purple',
            'brightness': '0.6'
        },
        'desc': 'light shower sleet'
    },
    613: {
        'params': {
            'power': 'on',
            'color': 'purple',
            'brightness': '0.5'
        },
        'desc': 'shower sleet'
    },
    615: {
        'params': {
            'power': 'on',
            'color': 'purple',
            'brightness': '0.4'
        },
        'desc': 'light rain and snow'
    },
    616: {
        'params': {
            'power': 'on',
            'color': 'purple',
            'brightness': '0.3'
        },
        'desc': 'rain and snow'
    },
    620: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '0.5'
        },
        'desc': 'light shower snow'
    },
    621: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '0.6'
        },
        'desc': 'shower snow'
    },
    622: {
        'params': {
            'power': 'on',
            'color': 'green',
            'brightness': '0.7'
        },
        'desc': 'heavy shower snow'
    },

    701: {
        'params': {
            'power': 'on',
            'color': 'pink',
            'brightness': '0.2'
        },
        'desc': 'mist'
    },
    711: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.4'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'orange',
            'from_color': 'white',
            'period': 1,
            'cycles': 100
        },
        'desc': 'smoke'
    },
    721: {
        'params': {
            'power': 'on',
            'color': 'pink',
            'brightness': '0.3'
        },
        'desc': 'haze'
    },
    731: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.4'
        },
        'desc': 'sand/ dust whirls'
    },
    741: {
        'params': {
            'power': 'on',
            'color': 'pink',
            'brightness': '0.4'
        },
        'desc': 'fog'
    },
    751: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.3'
        },
        'desc': 'sand'
    },
    761: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.7'
        },
        'desc': 'dust'
    },
    762: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.8'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'orange',
            'from_color': 'white',
            'period': 0.5,
            'cycles': 100
        },
        'desc': 'volcanic ash'
    },
    771: {
        'params': {
            'power': 'on',
            'color': 'orange',
            'brightness': '0.6'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'orange',
            'from_color': 'white',
            'period': 0.5,
            'cycles': 100
        },
        'desc': 'squalls'
    },
    781: {
        'params': {
            'power': 'on',
            'color': 'red',
            'brightness': '1.0'
        },
        'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
        'effectParams': {
            'power_on': true,
            'color': 'red',
            'from_color': 'white',
            'period': 0.2,
            'cycles': 100
        },
        'desc': 'tornado'
    },

    800: {
        'params': {
            'power': 'on',
            'color': 'white',
            'brightness': '1.0',
            'kelvin': '2700'
        },
        'desc': 'clear sky'
    },
    801: {
        'params': {
            'power': 'on',
            'color': 'white',
            'brightness': '0.5',
            'kelvin': '2700'
        },
        'desc': 'few clouds: 11-25%'
    },
    802: {
        'params': {
            'power': 'on',
            'color': 'white',
            'brightness': '0.3',
            'kelvin': '2700'
        },
        'desc': 'scattered clouds: 25-50%'
    },
    803: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.4',
        },
        'desc': 'broken clouds: 51-84%'
    },
    804: {
        'params': {
            'power': 'on',
            'color': 'blue',
            'brightness': '0.2',
        },
        'desc': 'overcast clouds: 85-100%'
    }
};

let testCondObj = {
    'Description': "Test",
    'Temperature': '0',
    'Temp-unit': "",
    'Wind Speed': "",
    'Wind Direction': ""
}