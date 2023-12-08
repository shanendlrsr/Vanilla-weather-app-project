let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityHeadingElement = document.querySelector("#weather-app-city");
  cityHeadingElement.innerHTML = searchInput.value;
});


