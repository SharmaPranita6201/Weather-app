const apiKey = "6ceac069fac242e8ae8d8a58360bbebd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search_bar .city_name");
const searchBtn = document.querySelector(".search_bar .search");
const weatherIcon = document.querySelector(".weather_icon");
async function checkWeather(name) {
  const response = await fetch(apiUrl + name + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather_info").style.display = "none";
  }

  var data = await response.json();
  console.log(data);
  document.querySelector(".name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".weather_info").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

const btn = document.querySelector(".btn");
const section = document.querySelector("#section");
const navItem = document.querySelectorAll(".nav_item a");
const box = document.querySelector("#box");
const navlink = document.querySelector("nav_link");
let currentMode = "darkMode";
btn.addEventListener("click", () => {
  if (currentMode === "darkMode") {
    section.classList.add("darkModeSection");

    section.classList.remove("lightModeSection");

    box.classList.add("lightBox");
    box.classList.remove("darkBox");
    btn.classList.add("darkModeBtn");
    btn.classList.remove("lightModeBtn");

    navItem.forEach((e) => {
      e.style.color = "rgba(145, 204, 234, 0.588)";
    });

    return (currentMode = "lightMode");
  } else {
    section.classList.remove("darkModeSection");
    section.classList.add("lightModeSection");
    btn.classList.remove("darkModeBtn");

    btn.classList.add("lightModeBtn");
    box.classList.add("darkBox");
    box.classList.remove("lightBox");
    navItem.forEach((e) => {
      e.style.color = "white";
    });

    return (currentMode = "darkMode");
  }
});
