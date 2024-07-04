const apikey = "7ed6f47a04134170a4d719de600c1769";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function CheckWeather(city){
            const response = await fetch(apiurl + city + `&appid=${apikey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
            if(data.weather[0].main == "Clouds")
                {
                    weatherIcon.src = "images/clouds.png";
                }
            else if (data.weather[0].main == "Clear")
                {
                    weatherIcon.src = "images/clear.png";
                }
            else if (data.weather[0].main == "Rain")
                {
                    weatherIcon.src = "images/rain.png";
                }
            else if (data.weather[0].main == "Drizzle")
                {
                     weatherIcon.src = "images/drizzle.png";
                }  
            else if (data.weather[0].main == "Mist")
                {
                     weatherIcon.src = "images/mist.png";
                }  

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none";
}
}

searchbtn.addEventListener("click",()=>{
    CheckWeather(searchbox.value);
}
)
