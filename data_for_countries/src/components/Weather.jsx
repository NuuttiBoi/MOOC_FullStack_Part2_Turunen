import countryService from "../services/countries.js";

const Weather = (props) => {
    countryService.getWeather(props.lat, props.lon)
        .then(weather => {
            props.setTemperature(weather.main.temp)
            props.setIcon(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
            props.setWind(weather.wind.speed)
        })
    return (
        <div>
            <p>Temperature {props.temperature} Celsius</p>
            <img src={props.icon} alt='weather icon'/>
            <p>Wind {props.wind} m/s</p>
        </div>
    )
}
export default Weather