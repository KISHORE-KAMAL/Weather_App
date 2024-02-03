async function getWeatherData()
{
    let weather = document.getElementById("weather")
    try
    {
        let city = document.getElementById("city")
        let cityValue = city.value

        let weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=e721f014dc10e51d8bbd9807724aa744&units=metric`)
        weatherApi = await weatherApi.json()

        // console.log(weatherApi);

        if(weatherApi.name===undefined)
        {
            weather.innerHTML = `<h1 class="not-fnd">'${cityValue}' Not Found! </h1>`
            return false
        }

        let {weather:[k],main:{temp,pressure,humidity},sys:{country},name} = weatherApi
        let {main,description,icon} = k;

        weather.innerHTML=
        `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
        <h1>${temp} °C</h1>
        <h2>${name}  (${country})</h2>
        <br>
        <h2>${main}</h2>
        <h3>(${description})</h3>
        <div class="desc">
            <img src="https://static-00.iconduck.com/assets.00/humidity-icon-512x419-5m7ztixz.png" alt="">
            <div>
                <h3>${humidity}%</h3>
                <h3>Humidity</h3>
            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="https://static.thenounproject.com/png/1841-200.png" alt="">
            <div>
                <h3>${pressure}Pa</h3>
                <h3>Pressure</h3>
            </div>
        </div>
        `

    }
    catch(error)
    {
        console.log(error);
    }
}