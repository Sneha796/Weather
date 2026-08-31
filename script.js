//api
const apiKey="743feccb8d5ad3065e930e00f53dd1d3";
//searchbar
const search=
  document.getElementById("searchbar") 
//7 days forecast
const forecast=
  document.querySelector(".forecast") 
//buttons
const location=
  document.getElementById("locationBtn") 
//switch degree
const celsius=
  document.getElementById("celsius") 

const fahrenheit=
  document.getElementById("fahrenheit") 

const temperature=
  document.getElementById("temperature") 

const feelsLike=
  document.getElementById("feel") 

const humidity=
  document.getElementById("humidity")

const wind=
  document.getElementById("wind") 

const precipitation=
  document.getElementById("precipitation") 

const cityName=
  document.getElementById("city") 

const weather=
  document.getElementById("weather") 

const icon=
  document.getElementById("icon") 

const dateTime=
  document.getElementById("date-time") 

const errorMessage=
  document.getElementById("errorMessage") 

const forecastIcon=
  document.getElementById("forecastIcon") 

const searchBtn=
  document.getElementById("search-btn")
searchBtn.addEventListener("click", function() {
    const city = search.value;

    if(city === ""){
        errorMessage.textContent = "Enter your city";
    }else{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(url)
       .then(response=> response.json())
       .then(data => {cityName.textContent=data.name;
                     temperature.textContent=data.main.temp;
                     weather.textContent=data.weather[0].description;
                     humidity.textContent=data.main.humidity;
                     wind.textContent=data.wind.speed;
                     precipitation.textContent=data.rain;
                     feels_like.textContent=data.main.feels_like;
                     icon.textContent=data.weather[0].icon;
                     }) 
       .catch(error => {errorMessage.textContent="something went wrong";
        }) 
    }
});
