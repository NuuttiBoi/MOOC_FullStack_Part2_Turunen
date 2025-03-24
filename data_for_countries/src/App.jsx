import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState(null);
  const [wind, setWind] = useState('');

    useEffect(() => {
        countryService.getAll()
            .then(initialCountries => {
                setCountries(initialCountries)
            })
    }, [filter]);

    if(!countries){
        return null
    }
    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    const getTemperature = (lat, lon) => {
        countryService.getWeather(lat, lon)
            .then(weather => setTemperature(weather.main.temp))
    }

    const Weather = (props) => {
        countryService.getWeather(props.lat, props.lon)
            //.then(weather => setTemperature(weather.main.temp))
            .then(weather => {
                setTemperature(weather.main.temp)
                setIcon(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
                setWind(weather.wind.speed)
            })
            //.then(weather => setIcon(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`))
        return (
            <div>
                <p>Temperature {temperature}</p>
                <img src={icon} alt='weather icon'/>
                <p>Wind {wind}</p>
            </div>
        )
    }

    const FilteredCountries =  () => {
        if(countriesToShow.length < 10 && countriesToShow.length > 1){
            console.log(countriesToShow.length)
            return (
                <div>
                    <ul style={{listStyleType: 'none'}}>
                        {countriesToShow.map(country =>
                            <li key={country.name.common}>{country.name.common} <button onClick={() =>
                                setFilter(country.name.common)}>show</button>
                            </li>
                        )}
                    </ul>
                </div>
            )
        } else if(countriesToShow.length < 0){
            return (
                <div>
                    <p>No matches</p>
                </div>
            )
        } else if(countriesToShow.length === 1){
            const country = countriesToShow[0]
            getTemperature(country.latlng[0],country.latlng[1])
            return (
                <div>
                    <h1>{country.name.common}</h1>
                    <p>Capital {country.capital[0]}</p>
                    <p>Area {country.area}</p>
                    <h2>Languages</h2>
                    <ul style={{listStyleType: 'none'}}>
                        {Object.entries(country.languages).map(([key, value]) =>
                        <li key={key}>{value}</li>
                        )}
                    </ul>
                    <img src={country.flags.png} alt='country flag'/>
                    <h2>Weather in {country.capital[0]}</h2>
                    <Weather
                        lat={country.latlng[0]}
                        lon={country.latlng[1]}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Too many matches, be more specific</p>
                </div>
            )
        }

    }

    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    console.log('found countries',countriesToShow, countriesToShow.length)


  return (
      <div>
          <form>
              <div>
                  Find countries <input
                  value={filter}
                  onChange={changeFilter}
              />
              </div>
              <div>
                  <FilteredCountries/>
              </div>
          </form>
      </div>
  )
}

export default App
