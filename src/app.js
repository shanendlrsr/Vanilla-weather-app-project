function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "317afccdd083ao7966cf003b44bt370b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityHeadingElement = document.querySelector("#weather-app-city");
  cityHeadingElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
});

searchCity("Melbourne");
