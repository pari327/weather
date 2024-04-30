const inputBox = document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temprature=document.querySelector('.temprature');
const desc=document.querySelector('.desc');
const humidity=document.querySelector('.humidity');
const wind_speed=document.querySelector('.wind');

const location_not_found=document.querySelector(`.location-not-found`);

const weather_body=document.querySelector(`.weather-body`);

async function checkWeather(city){
    const api_key ="a4252a99f22d947245ddbb40d9532f49";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
    response.json());

    if(weather_data.cod===`404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        console.log("error");
        return;
    }
   weather_body.style.display="flex";
   location_not_found.style.display="none";
    temprature.innerHTML=`${Math.round(weather_data.main.temp -273.15)}°C`;
    himidity.innerHTML=`${weather_data .main.humidity}%`;
    desc.innerHTML=`${weather_data.weather[0].description}`;
    windspeed.innerHTML=`${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
             weather_img.src="waehter2.png";
             break;
        case 'Clear':
            weather_img.src="clearv.png";
            break;
       case 'Haze':
            weather_img.src="haz.png";
            break;
        case 'Rain':
             weather_img.src="rain.png";
             break;
        case 'Mist':
                weather_img.src="mistr.png";
        case 'Smoke':
                    weather_img.src="newsmoke.png";        
    }

    console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})