import {useEffect, useState} from 'react'
import './App.css'
import countryService from './services/countries'
import Search from "./components/Search.jsx";
import FilteredCountries from "./components/FilteredCountries.jsx";

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
    }, []);

    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    const getTemperature = (lat, lon) => {
        countryService.getWeather(lat, lon)
            .then(weather => setTemperature(weather.main.temp))
    }

    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    console.log('found countries',countriesToShow, countriesToShow.length)


  return (
      <div>
          <Search
              filter={filter}
              changeFilter={changeFilter}
          />
          <FilteredCountries
              countriesToShow={countriesToShow}
              setFilter={setFilter}
              temperature={temperature}
              getTemperature={getTemperature}
              setTemperature={setTemperature}
              setIcon={setIcon}
              setWind={setWind}
              wind={wind}
              icon={icon}
          />
      </div>
  )
}

export default App
