function changeTheme(isDay) {
  let body = document.querySelector("body");
  let details = document.querySelector(".weather-app-details");
  let temperature = document.querySelector(".temperature-value");

  if (isDay) {
    body.classList.remove("night");
    body.classList.add("day");
    details.classList.remove("night");
    details.classList.add("day");
    temperature.classList.remove("night");
    temperature.classList.add("day");
  } else {
    body.classList.remove("day");
    body.classList.add("night");
    details.classList.remove("day");
    details.classList.add("night");
    temperature.classList.remove("day");
    temperature.classList.add("night");
  }
}

function formatDate(date) {
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
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let format = `${day} ${hours}:${minutes}`;
  return format;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");
  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  let wind = response.data.wind.speed;
  let dateElement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  let videoElement = document.querySelector(".video-background");
  if (response.data.condition.icon.includes("day")) {
    changeTheme(true);
    if (response.data.condition.icon.includes("few-clouds-day")) {
      videoElement.src =
        "https://v3.cdnpk.net/videvo_files/video/free/2020-07/large_watermarked/06_1596083776_preview.mp4";
    } else if (response.data.condition.icon.includes("scattered-clouds-day")) {
      videoElement.src =
        "https://v3.cdnpk.net/videvo_files/video/free/2014-06/large_watermarked/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4";
    } else if (response.data.condition.icon.includes("broken-clouds-day")) {
      videoElement.src =
        "https://cdn.coverr.co/videos/coverr-cloudy-sky-2765/1080p.mp4";
    } else if (response.data.condition.icon.includes("shower-rain-day")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/590779437/window-85180.mp4?width=1280&hash=c7ab3e6fad586b95060900bc09b322e17d558112";
    } else if (response.data.condition.icon.includes("rain-day")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/889684869/rain-191224.mp4?width=1280&hash=57923f16faae1afbf18c982fefbc366c3373013c";
    } else if (response.data.condition.icon.includes("thunderstorm-day")) {
      videoElement.src =
        "https://v3.cdnpk.net/videvo_files/video/free/2016-09/large_watermarked/lightning02_preview.mp4";
    } else if (response.data.condition.icon.includes("snow-day")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/724673835/stars-120915.mp4?width=1280&hash=6eb4e8d19a86547094adc6366ad7754055d20bd1";
    } else if (response.data.condition.icon.includes("mist-day")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/887815676/sky-190332.mp4?width=1280&hash=1588fff1e092b3d0b045d87ad806a810faefc0e0";
    } else {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/291585321/aerial-18390.mp4?width=1280&hash=b7ad962350d7df22343b767c33fc953322f3166d";
    }
  } else {
    changeTheme(false);
    if (response.data.condition.icon.includes("clear-sky-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/767056247/stars-137617.mp4?width=1280&hash=059c853abee3020dfcfe552965d6af19434d19c4";
    } else if (response.data.condition.icon.includes("few-clouds-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/374487175/moon-29238.mp4?width=640&hash=c25270f6fda48e77e0e9b8db429c3b28bb782edb";
    } else if (
      response.data.condition.icon.includes("scattered-clouds-night")
    ) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/362518474/crescent-moon-27186.mp4?width=1280&hash=57166797a2fb86db79f4e0de10dff2a527435637";
    } else if (response.data.condition.icon.includes("broken-clouds-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/496654889/clouds-60766.mp4?width=1280&hash=350f7ed45dd0068dd38cc6e9e8a4b45fb190c85a";
    } else if (response.data.condition.icon.includes("shower-rain-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/368501609/rain-28236.mp4?width=640&hash=834994beb632a32cbbe285cce4a1868392d5d37f";
    } else if (response.data.condition.icon.includes("rain-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/540486894/rain-71863.mp4?width=636&hash=11e03d159a59d3ed1ab06e8e0e6918a15094cd5d";
    } else if (response.data.condition.icon.includes("thunderstorm-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/819589720/storm-159780.mp4?width=1280&hash=d8f3ccdfe6ea1e57a8a062f77bb61eef3a1c1e1c";
    } else if (response.data.condition.icon.includes("snow-night")) {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/664525219/nature-103801.mp4?width=1280&hash=05bb9d0e16a0f61a5919f7ed1a2766224104acc1";
    } else {
      videoElement.src =
        "https://cdn.pixabay.com/vimeo/784867462/stars-144597.mp4?width=1280&hash=8d3896aba56eb66785dabb9273bebdaf74054711";
    }
  }

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon"/>`;
  cityElement.innerHTML = response.data.city;
  dateElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind} km/h`;

  getForecast(response.data.city);
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

function getForecast(city) {
  let apiKey = "317afccdd083ao7966cf003b44bt370b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class="weather-forecast-details">
        <div class="forecast-day">${formatDay(day.time)}</div>
        <div>
            <img src="${day.condition.icon_url}" class="forecast-icon"/>
        </div>
        <div class="forecast-temperatures">
          <div class="forecast-temperature">
            <strong>${Math.round(day.temperature.maximum)}°</strong>
          </div>
          <div class="forecast-temperature">${Math.round(
            day.temperature.minimum
          )}°</div>
        </div>
      </div>
    `;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
