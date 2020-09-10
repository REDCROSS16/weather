function api (idCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=cd50224b74824ea86da745cca42f4e8e`)
    .then (function(resp) { return resp.json() })
    .then (function(data) {
        document.querySelector('.temperature').textContent = 'Текущая температура: ' + Math.round(data.main.temp - 273) + ' °C';
        document.querySelector('.pressure').innerHTML = 'Текущее давление: '  + Math.round(data.main.pressure) * 750 / 1000 + ' мм рт.ст.';
        document.querySelector('.humidity').textContent = 'Влажность: ' + Math.round(data.main.humidity) + ' %';

        let srdate = new Date(data.sys.sunrise * 1000);
        let ssdate = new Date(data.sys.sunset * 1000);
        document.querySelector('.sunrise').innerHTML = 'Восход солнца: ' + '<br>' + srdate.getHours() + ':' + srdate.getMinutes() ;
        document.querySelector('.sunset').innerHTML = 'Заход солнца: '+ '<br>' + ssdate.getHours() + ':' + ssdate.getMinutes();

        document.querySelector('.wind').textContent = 'Скорость ветра: ' + data.wind.speed + ' м/с';

        document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    })
    .catch (function() {

    })

}

api(620127);

document.querySelector('#city').onchange = () => {
    let city = document.querySelector('#city').value;
    api(city)
}




