function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  // let precipitationElement = document.querySelector("#precipitation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let cityNameElement = document.querySelector("#cityName");
  let countryElement = document.querySelector("#country");
  let descriptionElement = document.querySelector("#description");
  let dateElemet = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityNameElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  descriptionElement.innerHTML = response.data.weather[0].description;
  dateElemet.innerHTML = formatDate(response.data.dt * 1000);
}
let apikey = "0bacb13d6ace3f885383c55daa97b637";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
