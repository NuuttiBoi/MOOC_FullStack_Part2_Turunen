import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('')

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

    const FilteredCountries =  () => {
        if(countriesToShow.length < 10 && countriesToShow.length > 2){
            console.log(countriesToShow.length)
            return (
                <div>
                    <ul>
                        {countriesToShow.map(country =>
                            <li key={country.name.common}>{country.name.common}</li>
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
            return (
                <div>
                    <h1>{country.name.common}</h1>
                    <p>Capital {country.capital[0]}</p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.entries(country.languages).map(([key, value]) =>
                        <li key={key}>{value} <button>show</button></li>
                        )}
                    </ul>
                    <img src={country.flags.png} alt='country flag'/>
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

    const Countries = (props) => {
        return (
            <div>

            </div>
        )
    }

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
