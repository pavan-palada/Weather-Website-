function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ', ' + data.sys.country;
            const temperature = Math.round(data.main.temp - 273.15) + '°C';
            const description = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
