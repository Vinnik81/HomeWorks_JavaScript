const apiKey = '04f2dc1734de1dc82dc7ae8b28e8f96d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/'
//forecast?q=Omsk&appid=

//weather?q=Moscow&appid=


export async function getCities() {
    let response = await fetch('./cities.json');
    let data = await response.json();
    return data;
}



export async function getWeatherDataByCityName(cityName) {
    let response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}&lang=ru&units=metric`);
    let data = await response.json();
    return data;
}

export async function getWeatherDatesByCityName(cityName) {
    let response = await fetch(`${apiUrl}forecast?q=${cityName}&appid=${apiKey}&lang=ru&units=metric`);
    let data = await response.json();
    return data;
}