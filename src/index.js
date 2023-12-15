let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

document.querySelector("#current").innerHTML = `${day} ${hours}:${minutes}`;

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityElemrnt = document.querySelector("#city");
  let temperatureElement = document.querySelector(".value");
  cityElemrnt.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let apiKey = "80a649af01ofb5104e6atd8426e1f713";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", search);
