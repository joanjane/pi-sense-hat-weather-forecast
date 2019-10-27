const fetch = require('node-fetch');
const env = require('./src/env');
const sense = (env.MODE === 'simulator') ? 
    require('./src/fake-sense') :
    require('sense-hat-led');

let forecast = null;
const weatherPolling = () => {
    console.log('Checking weather...');
    getWeather(env.LAT, env.LONG, env.API_KEY).then(forecastResponse => {
        console.log(JSON.stringify(forecastResponse, null, 2));
        forecast = forecastResponse;
        presentWeather(forecast);
    });
};

const render = () => {
    if (forecast) {
        presentWeather(forecast);
    }
};

setInterval(() => {
    weatherPolling();
}, 1000 * 60 * 60 * 4); // 4h

setInterval(() => {
    render();
}, 1000 * 60 * 2) // 2min

weatherPolling();
render();

function presentWeather(forecast, index) {
    index = index || 0;
    if (index === forecast.length) {
        return;
    }
    
    const next = forecast[index];
    const colors = [
        [100, 100, 100],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [40, 150, 90],
    ];
    const color = colors[index];
    const message = `${next.temp}º / ${next.weather.name} / ${next.date.toLocaleString()}`;
    console.log(`Rendering "${message}"`);
    sense.showMessage(message, color, () => {
        return presentWeather(forecast, index + 1);
    });
}

function getWeather(lat, long, apiKey) {
  const req = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  return fetch(req, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(r => {
    return r.json().then((response => {
        if (response.cod !== '200') {
            throw new Error(`Weather API returned ${response.cod}`);
        }
        return response.list.slice(0, 5).map(data => {
            const date = new Date(0);
            date.setUTCSeconds(data.dt);
    
            return {
                temp: data.main.temp,
                weather: {
                    name: data.weather[0].main
                },
                date: date
            };
        });
    }));
  });
}

