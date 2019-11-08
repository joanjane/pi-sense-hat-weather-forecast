const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    LAT: process.env.LAT,
    LONG: process.env.LONG,
    API_KEY: process.env.API_KEY,
    MODE: process.env.MODE,
    SERVER_URI: process.env.SERVER_URI || 'ws://localhost:8080',
    DEVICE: 'pi-sense-hat-weather-forecast'
};