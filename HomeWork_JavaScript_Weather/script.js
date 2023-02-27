import * as weatherApi from './weatherApi.js'

let searchForm = document.forms.citySearch;



searchForm.addEventListener('submit', async function() {
    event.preventDefault();

    let cityName = searchForm.city.value;
    let weatherData = await weatherApi.getWeatherDataByCityName(cityName);
    console.log(weatherData);
    document.querySelector('.history').innerHTML += `
<div class="col-12">
                <div class="card">
                    <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${cityName } ${Math.round(weatherData.main.temp)} ℃</h5>
                        <p class="card-text">${weatherData.weather[0].description}</p>
                    </div>
                </div>
            </div>`

    //console.log(weatherData);

    let weatherDates = await weatherApi.getWeatherDatesByCityName(cityName);
    console.log(weatherDates);
    document.querySelector('.dates').innerHTML += `<div class="col-sm-3">
    <div class="card">
        <img src="http://openweathermap.org/img/wn/${weatherDates.list[2].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cityName } ${Math.round(weatherDates.list[2].main.temp)} ℃</h5>
            <p class="card-text">${weatherDates.list[2].weather[0].description}</p>
            <h5 class="card-title">${weatherDates.list[2].dt_txt}</h5>
        </div>
        </div>
        </div>
        <div class="col-sm-3">
        <div class="card">
        <img src="http://openweathermap.org/img/wn/${weatherDates.list[10].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cityName } ${Math.round(weatherDates.list[10].main.temp)} ℃</h5>
            <p class="card-text">${weatherDates.list[10].weather[0].description}</p>
            <h5 class="card-title">${weatherDates.list[10].dt_txt}</h5>
        </div>
    </div>
</div>
<div class="col-sm-3">
        <div class="card">
        <img src="http://openweathermap.org/img/wn/${weatherDates.list[18].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cityName } ${Math.round(weatherDates.list[18].main.temp)} ℃</h5>
            <p class="card-text">${weatherDates.list[18].weather[0].description}</p>
            <h5 class="card-title">${weatherDates.list[18].dt_txt}</h5>
        </div>
    </div>
</div>`

    searchForm.reset();
})



document.addEventListener('DOMContentLoaded', async() => {
    let getCities = await weatherApi.getCities();
    renderCitiesList(getCities);

})


function renderCitiesList(cities) {
    let list = document.querySelector('#cities');
    list.innerHTML = '';
    for (const city of cities) {
        let option = document.createElement('option');
        option.value = city.name;
        list.append(option);
    }

}

searchForm.city.addEventListener('input', async() => {
    let cities = await weatherApi.getCities();

    cities = cities.filter(x => x.name.startsWith(event.target.value))
    renderCitiesList(cities);
})