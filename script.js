const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc359bce16msh1b2b1e389c9f63ep1a93b3jsn54937bae6d0a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
			console.log(response)
			//Cloud_pct.innerHTML = response.cloud_pct
			Temp.innerHTML = response.temp
			Temp2.innerHTML = response.temp
			Feels_like.innerHTML = response.feels_like
			Humidity.innerHTML = response.humidity
			Humidity2.innerHTML = response.humidity
			Min_temp.innerHTML = response.min_temp
			Max_temp.innerHTML = response.max_temp
			Wind_speed.innerHTML = response.wind_speed
			Wind_speed2.innerHTML = response.wind_speed
			Wind_degrees.innerHTML = response.wind_degrees
			Sunrise.innerHTML = response.sunrise
			Sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


