const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    LAT: process.env.LAT,
    LONG: process.env.LONG,
    API_KEY: process.env.API_KEY,
    MODE: process.env.MODE,
};