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
  // console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  // let precipitationElement = document.querySelector("#precipitation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let cityNameElement = document.querySelector("#cityName");
  let countryElement = document.querySelector("#country");
  let descriptionElement = document.querySelector("#description");
  let dateElemet = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  centigradeTemp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = centigradeTemp;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityNameElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  descriptionElement.innerHTML = response.data.weather[0].description;
  dateElemet.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
  let apikey = "0bacb13d6ace3f885383c55daa97b637";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput");
  search(cityInputElement.value);
}

function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round((centigradeTemp * 9) / 5 + 32);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = fahrenheitTemp;
  centigradeLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}
function displayCentigrade(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = centigradeTemp;
  fahrenheitLink.classList.remove("active");
  centigradeLink.classList.add("active");
}

let centigradeTemp = null;
let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSubmit);
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheit);
let centigradeLink = document.querySelector("#centigrade");
centigradeLink.addEventListener("click", displayCentigrade);
search("Paris");
