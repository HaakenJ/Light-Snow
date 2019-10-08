# SKI LIGHTS

## Team Members: Chad Prybell, Kramer Johnson, Hayden Wampach

### Project Description
User enters a ski resort or gps location into our website and sets what time they want their alarm to go off. We then store this data and wait for the users alarm to go off. Once it hits that time we gather the snow fall for the last 8 hours and light up a smart light with a certain color based on how much snowfall there was. The idea is a skier can set this alarm the night before and when the alarm goes off they can tell if there was a lot of snow and if it will be a good ski day or not.

### Sketch of the design:


### APIs to be Used:
* Darksky weather API
* LIFX Smart Light Control API
* Map API (Possible if extra time)

### Breakdown of Tasks:
* Design the the front end website
* Gather and store user input on location and time to wake up
* Find out how to use Heroku and a server to always run page, so page is always running (for the alarm)
* Make API call to get the snowfall for the last 8hours
* Make an API call to the light to light it up a certain color based on the amount of snowfall of the last 8 hours
* Turn on users light based on snowfall
test