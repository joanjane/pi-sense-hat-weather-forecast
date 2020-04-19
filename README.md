# Introduction
This is a sample application that uses displays weather information with a PI SenseHat display.
* [openweather API](https://openweathermap.org/)
* SenseHat libraries:
    - production [pi-sense-hat-library](https://github.com/joanjane/pi-sense-hat-library)
    - simulation [pi-sense-hat-remote-simulator](https://github.com/joanjane/pi-sense-hat-remote-simulator)

## Configuration
Create a .env file based on .env.sample.
````bash
# Coordinates of the place you want to get weather info
LAT=40.123
LONG=1.123
# Api key generated on openweather map
API_KEY=your-api-key

# MODE to use real sense hat or the simulated interface
MODE=[production|simulator]

# Simulator settings 
# (see pi-sense-hat-remote-simulator repo to launch web simulator and server for development)
SERVER_URI=ws://localhost:8080
DEVICE=pi-sense-hat-weather-forecast # identifier of the simulator must match on the web simulator
```
