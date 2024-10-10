const button = document.getElementById('searchBtn');
const input_value = document.querySelector('.input_btn');
const temperature = document.querySelector('.temperature');
const discription = document.querySelector('.discription');
const humadity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weather_image = document.querySelector('.weather-image');

async function checkWeather(city) {
    const api_key = "ad869a2d4757cf65bbd90e5dd4a54b99";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());

    const new_temp = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    const new_humid = `${weather_data.main.humidity} %`;
    const wind_speed = `${weather_data.wind.speed} Km/H`;
    const weather_condi = weather_data.weather[0].main;

    
    temperature.innerHTML = new_temp;
    humadity.innerHTML = new_humid;
    wind.innerHTML = wind_speed;
    discription.innerHTML = weather_condi;

    
    switch (weather_condi) {
        case 'Clouds':
            weather_image.src = "./image/cloud.png";
            break; 
        case 'Clear':
            weather_image.src = "./image/clear.png";
            break;
        case 'Haze':
            weather_image.src = "./image/mist.png";
            break;
        case 'Rain':
            weather_image.src = "./image/rain.png";
            break;
        case 'Snow':
            weather_image.src = "./image/snow.png";
            break;
        default:
            weather_image.src = "./image/default.png"; 
    }
}

button.addEventListener('click', () => {
    checkWeather(input_value.value);
});
