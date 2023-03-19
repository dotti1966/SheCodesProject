function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

function showTemperature(response) {
  console.log(response.data.main.temp);
  let city = document.querySelector("#city");

  city.innerHTML =
    "The Temperature in Sydney is " +
    `${Math.round(response.data.main.temp)}°C`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
