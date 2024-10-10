// Today Var
let todayName = document.getElementById("todayDayName");
let todayDay = document.getElementById("todayDay");
let todayMonth = document.getElementById("todayMonth");
let todayLocation = document.getElementById("location");
let todayTemp = document.getElementById("todayTemp");
let todayConditionImage = document.getElementById("todayConditionImage");
let todayCondition = document.getElementById("todayCondition");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let windDirection = document.getElementById("windDirection");

// Next day Var
let nextDay = document.getElementsByClassName("nextDayName");
let nextConditionImage = document.getElementsByClassName("nextConditionImage");
let maxTemp = document.getElementsByClassName("maxTemp");
let minTemp = document.getElementsByClassName("minTemp");
let nextCondition = document.getElementsByClassName("nextCondition");

// Search input
let searchInput = document.getElementById("searchInput");
let submitBtn = document.getElementById("submitBtn")

// Function get API data
async function getWeatherData(cityName) {
    let weatherDataResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=12a6f66c26654840ba5215148240910&q=${cityName}&days=3`);
    let weatherData = await weatherDataResponse.json()
    return weatherData;
}

// Function get IP-API
async function getIpCity() {
    let ipDataResponse = await fetch("https://freeipapi.com/api/json/");
    let ipResponse = await ipDataResponse.json();
    return ipResponse;
}

// Function dispaly today data
function dispalyTodayData(data) {
    let todayDate = new Date();
    todayName.innerHTML = todayDate.toLocaleDateString("en-US", { weekday: "long" });
    todayDay.innerHTML = todayDate.getDate();
    todayMonth.innerHTML = todayDate.toLocaleDateString("en-US", { month: "long" })
    todayLocation.innerHTML = data.location.name;
    todayTemp.innerHTML = data.current.temp_c;
    todayConditionImage.setAttribute("src", data.current.condition.icon);
    todayCondition.innerHTML = data.current.condition.text;
    humidity.innerHTML = data.current.humidity + "%";
    wind.innerHTML = data.current.wind_kph + "km/h";
    windDirection.innerHTML = data.current.wind_dir;
}

// Function display next data
function dispalyNextData(data) {
    let forecastData = data.forecast.forecastday;
    for (let i = 0; i < 2; i++) {
        let nextDate = new Date(forecastData[i + 1].date);
        nextDay[i].innerHTML = nextDate.toLocaleDateString("en-US", { weekday: "long" });
        nextConditionImage[i].setAttribute("src", forecastData[i + 1].day.condition.icon);
        maxTemp[i].innerHTML = forecastData[i + 1].day.maxtemp_c;
        minTemp[i].innerHTML = forecastData[i + 1].day.mintemp_c;
        nextCondition[i].innerHTML = forecastData[i + 1].day.condition.text;
    }
}

// Function start Website
async function startWeb(cityName) {
    let weatherData = await getWeatherData(cityName);
    if (!weatherData.error) {
        dispalyTodayData(weatherData);
        dispalyNextData(weatherData);
    }
}

async function getCity() {
    let city = await getIpCity();
    startWeb(city.cityName);
}

searchInput.addEventListener("input", function () {
    startWeb(searchInput.value);
})

submitBtn.addEventListener("click", function () {
    startWeb(searchInput.value);
})

getCity();