//api
const apiKey="743feccb8d5ad3065e930e00f53dd1d3";
//searchbar
let search=
  document.getElementById("searchbar") 
//7 days forecast
let forecast=
  document.querySelector(".forecast") 
//buttons
let location=
  document.getElementById("locationBtn") 
//switch degree
let celsius=
  document.getElementById("celsius") 

let fahrenheit=
  document.getElementById("fahrenheit") 

let temperature=
  document.getElementById("temperature") 

let feelsLike=
  document.getElementById("feel") 

let humidity=
  document.getElementById("humidity")

let wind=
  document.getElementById("wind") 

let precipitation=
  document.getElementById("precipitation") 

let cityName=
  document.getElementById("city") 

let weather=
  document.getElementById("weather") 

let icon=
  document.getElementById("icon") 

let dateTime=
  document.getElementById("date-time") 

let errorMessage=
  document.getElementById("errorMessage") 

let forecastIcon=
  document.getElementById("forecastIcon") 

let search-Btn=
  document.getElementById("search-btn")
search-Btn.addEventListener("click", function() {
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
