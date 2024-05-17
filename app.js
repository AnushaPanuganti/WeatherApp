const city = document.getElementById("city_name");
const SearchBtn = document.getElementById("Searchbtn");

async function getweather(city) {
    const apiKey = '9517a16e92631d73eb29f990476e3f44'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    //const weather_data = await fetch(`${apiUrl}`).then(response => response.json());
    //console.log(weather_data);
    await fetch(`${apiUrl}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data', error);
            alert('Error fetching the weather data.Please try again');
        });
    }
    
    SearchBtn.addEventListener("click", () => {
        getweather(city.value);
    });

function displayWeather(data) {
    console.log('Weather in',data['name']);
    console.log('Current Weather is',data['weather'][0]['description']);
    console.log('Current Temperature is',data['main']['temp']);
    console.log('Current Humidity is',data['main']['humidity']);
    console.log('Current Windspeed is',data['wind']['speed']); 

}