let weatherData

const $input = $('input[type="text"]')
const $city = $('#city')
const $temperature = $('#temperature')
const $feels = $('#feels')
const $weather = $('#weather')

function handleGetData(event) {
    event.preventDefault();

    $.ajax({url:`https://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&units=imperial&APPID=d3cc2e30886dfe003790fb47affbb5ee`}).then(
        function(data) {
            console.log(data)
            weatherData = data
            render()
        },

        function(error) {
            console.log("Something went wrong ", error)
        }
    )
}

function render() {
    $city.html(`Weather For: ${weatherData.name}`)
    $temperature.html(`Temperature: ${weatherData.main.temp}°`)
    $feels.html(`Feels Like: ${weatherData.main.feels_like}°`)
    $weather.html(`Weather: ${weatherData.weather[0].main}`)
}

$('form').on('submit', handleGetData);