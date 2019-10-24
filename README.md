# Light-Snow

## Overview

This application allows a user to select a ski resort and quickly see the most important weather conditions at that resort along with a satellite image of the resort, and if the user owns a LIFX color changing light bulb, the light will change to a color corresponding to the weather at the resort.  This allows users to determine a quick overview of the weather at a resort without even having to read a single line.


We used several API's and different technologies for functionallity, such as:

- Open Weather API for the conditions.
- LIFX API to operate our lightbulb.
- Moment.js and Moment.js timezones.
- OpenCageData API to convert addresses to latitude, longitude, and return a timezone.
- Anime.js for svg animation.
- Embedded Google Maps.
- Firebase Authentication

### Organization
  
- Ski resorts, along with their latitude, longitude, and timezones, are stored in a JavaScript object.  
- Items from this object are added to a dropdown list that a user can choose from.
- Choosing a resort passes the latitude and longitude to the weather API.
- The weather API returns weather data and a weather code.
- The data is used to populate cards on the page displaying the data.
- The weather code is passed into a JavaScript object that associates light colors with weather conditions.
- The parameters for the weather code are returned to the LIFX light bulb API which changes the color of the light.

### Usage
Once the user selects a resort, they will be shown:
    - The local time of the resort.
    - Description of the current weather.
    - Temperature
    - Wind Speed
    - Wind Direction
    - A satellite image of the ski resort on Google Maps.

The default units are imperial but this can be changed with the toggle switch in the upper, right-hand corner.

Users can log in with their Google account info.  This allows them to add a resort by entering a name and address.  The resort is then added to the resorts drop-down list.  The list is stored in the user's local storage so that they have access to the same list each time they return to the page.




