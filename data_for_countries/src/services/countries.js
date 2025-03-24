import axios from 'axios';
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const api_key = import.meta.env.VITE_API_KEY

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`);
    return request.then(response =>
        response.data);
}
const getCountry = (props) => {
    const request = axios.get(`${baseUrl}/name/${props.name.common.toLowerCase()}`);
    return request.then(response => response.data);
}

const getWeather = (lat, lon) => {
    console.log(api_key)
    const request = axios.
    get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
    return request.then(response => response.data);
}


export default {getAll, getCountry, getWeather}