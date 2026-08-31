//api
const apiKey="743feccb8d5ad3065e930e00f53dd1d3";
//searchbar
const search=
  document.getElementById("searchbar") 
//7 days forecast
const forecast=
  document.querySelector(".forecast") 
//buttons
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
       .catch(error => {errorMessage.text = "something went wrong";
        }
    }
});

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

