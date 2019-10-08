import requests
from browser import document


weatherCodes = {
    2: {
        200: {
            'desc': 'thunderstorm with light rain',
            'color': 'yellow',
            'brightness': '0.4'
        },
        201: {
            'desc': 'thunderstorm with rain',
            'color': 'yellow',
            'brightness': '0.7'
        },
        202: {
            'desc': 'thunderstorm with heavy rain',
            'color': 'red',
            'brightness': '0.9'
        },
        210: {
            'desc': 'light thunderstorm',
            'color': 'yellow',
            'brightness': '0.5'
        },
        211: {
            'desc': 'thunderstorm',
            'color': 'yellow',
            'brightness': '0.8'
        },
        212: {
            'desc': 'heavy thunderstorm',
            'color': 'red',
            'brightness': '1.0'
        },
        221: {
            'desc': 'ragged thunderstorm',
            'color': 'yellow',
            'brightness': '0.6'
        },
        230: {
            'desc': 'thunderstorm with light drizzle',
            'color': 'yellow',
            'brightness': '0.1'
        },
        231: {
            'desc': 'thunderstorm with drizzle',
            'color': 'yellow',
            'brightness': '0.2'
        },
        232: {
            'desc': 'thunderstorm with heavy drizzle',
            'color': 'yellow',
            'brightness': '0.3'
        }
    },
    3: {
        300: {
            'desc': 'light intensity drizzle',
            'color': 'cyan',
            'brightness': '0.2'
        },
        301: {
            'desc': 'drizzle',
            'color': 'cyan',
            'brightness': '0.4'
        },
        302: {
            'desc': 'heavy intensity drizzle',
            'color': 'cyan',
            'brightness': '0.5'
        },
        310: {
            'desc': 'light intensity drizzle rain',
            'color': 'cyan',
            'brightness': '0.3'
        },
        311: {
            'desc': 'drizzle rain',
            'color': 'cyan',
            'brightness': '0.6'
        },
        312: {
            'desc': 'heavy intensity drizzle rain',
            'color': 'cyan',
            'brightness': '0.7'
        },
        313: {
            'desc': 'shower rain and drizzle',
            'color': 'cyan',
            'brightness': '0.8'
        },
        314: {
            'desc': 'heavy shower rain and drizzle',
            'color': 'cyan',
            'brightness': '1.0'
        },
        321: {
            'desc': 'shower drizzle',
            'color': 'cyan',
            'brightness': '0.9'
        }
    },
    5: {
        500: {
            'desc': 'light rain',
            'color': 'blue',
            'brightness': '0.5'
        },
        501: {
            'desc': 'moderate rain',
            'color': 'blue',
            'brightness': '0.6'
        },
        502: {
            'desc': 'heavy intensity rain',
            'color': 'blue',
            'brightness': '0.7'
        },
        503: {
            'desc': 'very heavy rain',
            'color': 'blue',
            'brightness': '0.9'
        },
        504: {
            'desc': 'extreme rain',
            'color': 'blue',
            'brightness': '1.0'
        },
        511: {
            'desc': 'freezing rain',
            'color': 'blue',
            'brightness': '0.8'
        },
        520: {
            'desc': 'light intensity shower rain',
            'color': 'blue',
            'brightness': '0.1'
        },
        521: {
            'desc': 'shower rain',
            'color': 'blue',
            'brightness': '0.2'
        },
        522: {
            'desc': 'heavy intensity shower rain',
            'color': 'blue',
            'brightness': '0.3'
        },
        531: {
            'desc': 'ragged shower rain',
            'color': 'blue',
            'brightness': '0.4'
        }
    },
    6: {
        600: {
            'desc': 'light snow',
            'color': 'green',
            'brightness': '0.8'
        },
        601: {
            'desc': 'snow',
            'color': 'green',
            'brightness': '0.9'
        },
        602: {
            'desc': 'heavy snow',
            'color': 'green',
            'brightness': '1.0'
        },
        611: {
            'desc': 'sleet',
            'color': 'purple',
            'brightness': '0.7'
        },
        612: {
            'desc': 'light shower sleet',
            'color': 'purple',
            'brightness': '0.6'
        },
        613: {
            'desc': 'shower sleet',
            'color': 'purple',
            'brightness': '0.5'
        },
        615: {
            'desc': 'light rain and snow',
            'color': 'purple',
            'brightness': '0.4'
        },
        616: {
            'desc': 'rain and snow',
            'color': 'purple',
            'brightness': '0.3'
        },
        620: {
            'desc': 'light shower snow',
            'color': 'green',
            'brightness': '0.5'
        },
        621: {
            'desc': 'shower snow',
            'color': 'green',
            'brightness': '0.6'
        },
        622: {
            'desc': 'heavy shower snow',
            'color': 'green',
            'brightness': '0.7'
        }
    },
    7: {
        701: {
            'desc': 'mist',
            'color': 'pink',
            'brightness': '0.2'
        },
        711: {
            'desc': 'smoke',
            'color': 'orange',
            'brightness': '0.4'
        },
        721: {
            'desc': 'haze',
            'color': 'pink',
            'brightness': '0.3'
        },
        731: {
            'desc': 'sand/ dust whirls',
            'color': 'orange',
            'brightness': '0.4'
        },
        741: {
            'desc': 'fog',
            'color': 'pink',
            'brightness': '0.4'
        },
        751: {
            'desc': 'sand',
            'color': 'orange',
            'brightness': '0.3'
        },
        761: {
            'desc': 'dust',
            'color': 'orange',
            'brightness': '0.7'
        },
        762: {
            'desc': 'volcanic ash',
            'color': 'orange',
            'brightness': '0.8'
        },
        771: {
            'desc': 'squalls',
            'color': 'orange',
            'brightness': '0.6'
        },
        781: {
            'desc': 'tornado',
            'color': 'red',
            'brightness': '1.0'
        }
    },
    8: {
        800: {
            'desc': 'clear sky',
            'color': 'white',
            'brightness': '1.0',
            'kelvin': '2700'
        },
        801: {
            'desc': 'few clouds: 11-25%',
            'color': 'white',
            'brightness': '0.5',
            'kelvin': '2700'
        },
        802: {
            'desc': 'scattered clouds: 25-50%',
            'color': 'white',
            'brightness': '0.3',
            'kelvin': '2700'
        },
        803: {
            'desc': 'broken clouds: 51-84%',
            'color': 'blue',
            'brightness': '0.4',
            'saturation': '0.3'
        },
        804: {
            'desc': 'overcast clouds: 85-100%',
            'color': 'blue',
            'brightness': '0.2',
            'saturation': '0.3'
        }
    }
}

# Search GitHub's repo's for requests.
# Can also pass params as list of tuples.
# To customize headers pass a dictionary of HTTP headers to get() using the
# headers parameter.

response = requests.get(
    'https://api.openweathermap.org/data/2.5/weather',
    params={
        'apiKey': 'fcc4fbbfbe4762dbfc16ec66805a4ded',
        'q': 'seattle', 
        }
    )


# Turn on lights.
# token = 'YOUR_APP_TOKEN'

# response = requests.put(
#     'https://api.lifx.com/v1/lights/all/state',
#     headers = {'Authorization': f'Bearer {token}',},
#     data = {'power': 'on',}
#     )

# Check if the request was successful or not.
# the conditional lines are equivalent to:
# if response:
# else:
# The above method does not check if the code is 200 because 204-NO CONTENT
# and 304-NOT MODIFIED also evaluate to TRUE
if response.status_code == 200:
    print('Success!')
    print(response.json())
elif response.status_code == 404:
    print('Not Found.')


document['test'].text = response.json()