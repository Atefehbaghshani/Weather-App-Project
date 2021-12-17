function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  // let precipitationElement = document.querySelector("#precipitation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let cityNameElement = document.querySelector("#cityName");
  let countryElement = document.querySelector("#country");
  let descriptionElement = document.querySelector("#description");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityNameElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  descriptionElement.innerHTML = response.data.weather[0].description;
}
let apikey = "0bacb13d6ace3f885383c55daa97b637";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
