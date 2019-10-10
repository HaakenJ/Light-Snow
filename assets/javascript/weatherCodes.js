let weatherCodes = {
    2: {
        200: {
            'params': {
                'power': 'on',
                'hue': 290
            },
            'desc': 'thunderstorm with light rain',


        },
        201: {
            'params': {
                // 'power': 'on',
                // 'hue': 280
                'color': 'yellow',
                'brightness': 0.7
            },
            'desc': 'thunderstorm with rain',
        },
        202: {
            'params': {
                'power': 'on',
                'hue': 270
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 270,
                'period': 1
            },
            'desc': 'thunderstorm with heavy rain',

        },
        210: {
            'params': {
                'power': 'on',
                'hue': 300
            },
            'desc': 'light thunderstorm',

        },
        211: {
            'params': {
                'power': 'on',
                'hue': 320
            },
            'desc': 'thunderstorm',

        },
        212: {
            'params': {
                'power': 'on',
                'hue': 340
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 340,
                'period': 0.5
            },
            'desc': 'heavy thunderstorm',

        },
        221: {
            'params': {
                'power': 'on',
                'hue': 310
            },
            'desc': 'ragged thunderstorm',

        },
        230: {
            'params': {
                'power': 'on',
                'hue': 290
            },
            'desc': 'thunderstorm with light drizzle',

        },
        231: {
            'params': {
                'power': 'on',
                'hue': 285
            },
            'desc': 'thunderstorm with drizzle',

        },
        232: {
            'params': {
                'power': 'on',
                'hue': 280
            },
            'desc': 'thunderstorm with heavy drizzle',

        }
    },
    3: {
        300: {
            'params': {
                'power': 'on',
                'hue': 190
            },
            'desc': 'light intensity drizzle',
        },
        301: {
            'params': {
                'power': 'on',
                'hue': 200
            },
            'desc': 'drizzle',
        },
        302: {
            'params': {
                'power': 'on',
                'hue': 210
            },
            'desc': 'heavy intensity drizzle',
        },
        310: {
            'params': {
                'power': 'on',
                'hue': 0.5
            },
            'desc': 'light intensity drizzle rain',

        },
        311: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'drizzle rain',

        },
        312: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'heavy intensity drizzle rain',

        },
        313: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'shower rain and drizzle',

        },
        314: {
            'params': {
                'power': 'on',
                'hue': 225
            },
            'desc': 'heavy shower rain and drizzle',

        },
        321: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'shower drizzle',

        }
    },
    5: {
        500: {
            'params': {
                'power': 'on',
                'hue': 230
            },
            'desc': 'light rain',

        },
        501: {
            'params': {
                'power': 'on',
                'hue': 235
            },
            'desc': 'moderate rain',

        },
        502: {
            'params': {
                'power': 'on',
                'hue': 240
            },
            'desc': 'heavy intensity rain',

        },
        503: {
            'params': {
                'power': 'on',
                'hue': 250
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 250,
                'period': 1
            },
            'desc': 'very heavy rain',

        },
        504: {
            'params': {
                'power': 'on',
                'hue': 260
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 260,
                'period': 0.5
            },
            'desc': 'extreme rain',

        },
        511: {
            'params': {
                'power': 'on',
                'hue': 200
            },
            'desc': 'freezing rain',

        },
        520: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'light intensity shower rain',

        },
        521: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'shower rain',

        },
        522: {
            'params': {
                'power': 'on',
                'hue': 230
            },
            'desc': 'heavy intensity shower rain',

        },
        531: {
            'params': {
                'power': 'on',
                'hue': 220
            },
            'desc': 'ragged shower rain',

        }
    },
    6: {
        600: {
            'params': {
                'power': 'on',
                'hue': 100
            },
            'desc': 'light snow',

        },
        601: {
            'params': {
                'power': 'on',
                'hue': 110
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 110,
                'period': 1
            },
            'desc': 'snow',

        },
        602: {
            'params': {
                'power': 'on',
                'hue': 120
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 120,
                'period': 0.5
            },
            'desc': 'heavy snow',

        },
        611: {
            'params': {
                'power': 'on',
                'hue': 170
            },
            'desc': 'sleet',

        },
        612: {
            'params': {
                'power': 'on',
                'hue': 170
            },
            'desc': 'light shower sleet',

        },
        613: {
            'params': {
                'power': 'on',
                'hue': 170
            },
            'desc': 'shower sleet',

        },
        615: {
            'params': {
                'power': 'on',
                'hue': 160
            },
            'desc': 'light rain and snow',

        },
        616: {
            'params': {
                'power': 'on',
                'hue': 150
            },
            'desc': 'rain and snow',

        },
        620: {
            'params': {
                'power': 'on',
                'hue': 100
            },
            'desc': 'light shower snow',

        },
        621: {
            'params': {
                'power': 'on',
                'hue': 0.5
            },
            'desc': 'shower snow',

        },
        622: {
            'params': {
                'power': 'on',
                'hue': 110
            },
            'desc': 'heavy shower snow',

        }
    },
    7: {
        701: {
            'params': {
                'power': 'on',
                'hue': 180,
                'brightness': 0.5
            },
            'desc': 'mist',

        },
        711: {
            'params': {
                'power': 'on',
                'hue': 50,
                'brightness': 0.5
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 50,
                'period': 1
            },
            'desc': 'smoke',

        },
        721: {
            'params': {
                'power': 'on',
                'hue': 40,
                'brightness': 0.5
            },
            'desc': 'haze',
        },
        731: {
            'params': {
                'power': 'on',
                'hue': 30,
                'brightness': 0.7
            },
            'desc': 'sand/ dust whirls',
        },
        741: {
            'params': {
                'power': 'on',
                'hue': 180,
                'brightness': 0.5
            },
            'desc': 'fog',
        },
        751: {
            'params': {
                'power': 'on',
                'hue': 40,
                'brightness': 0.6
            },
            'desc': 'sand',
        },
        761: {
            'params': {
                'power': 'on',
                'hue': 30
            },
            'desc': 'dust',
        },
        762: {
            'params': {
                'power': 'on',
                'hue': 20
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 20,
                'period': 0.5
            },
            'desc': 'volcanic ash',
        },
        771: {
            'params': {
                'power': 'on',
                'hue': 20
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 20,
                'period': 0.5
            },
            'desc': 'squalls',

        },
        781: {
            'params': {
                'power': 'on',
                'hue': 0,
                'brightness': 1.0
            },
            'effectUrl': 'https://api.lifx.com/v1/lights/all/effects/pulse',
            'effectParams': {
                'power_on': true,
                'hue': 0,
                'period': 0.2
            },
            'desc': 'tornado',
        }
    },
    8: {
        800: {
            'params': {
                'color': 'white',
                'brightness': 1.0,
                'kelvin': 5000
            },
            'desc': 'clear sky'
        },
        801: {
            'params': {
                'color': 'white',
                'brightness': 0.7,
                'kelvin': 4000
            },
            'desc': 'few clouds: 11-25%'     
        },
        802: {
            'params': {
                'color': 'white',
                'brightness': 0.5,
                'kelvin': 3000
            },
            'desc': 'scattered clouds: 25-50%'    
        },
        803: {
            'params': {
                'color': 'white',
                'brightness': 0.4,
                'kelvin': 2500
            },
            'desc': 'broken clouds: 51-84%',
        },
        804: {
            'params': {
                'color': 'white',
                'brightness': 0.2,
                'kelvin': 2000
            },
            'desc': 'overcast clouds: 85-100%',
        }
    }
};