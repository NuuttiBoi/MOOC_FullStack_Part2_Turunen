import Weather from "./Weather.jsx";

const FilteredCountries =  (props) => {
    if(props.countriesToShow.length < 10 && props.countriesToShow.length > 1){
        return (
            <div>
                <ul style={{listStyleType: 'none'}}>
                    {props.countriesToShow.map(country =>
                        <li key={country.name.common}>{country.name.common} <button onClick={() =>
                            props.setFilter(country.name.common)}>show</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    } else if(props.countriesToShow.length < 1){
        return (
            <div>
                <p>No matches</p>
            </div>
        )
    } else if(props.countriesToShow.length === 1){
        const country = props.countriesToShow[0]
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
                    setTemperature={props.setTemperature}
                    setIcon={props.setIcon}
                    setWind={props.setWind}
                    icon={props.icon}
                    wind={props.wind}
                    temperature={props.temperature}
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
export default FilteredCountries