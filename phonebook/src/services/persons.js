import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response =>  response.data)
}
const getPerson = (personID) => {
    const request = axios.get(baseURL, personID)
    return request.then(response => response.data)
}
const create = newPerson => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data)
}
const remove = (personID) => {
    const request = axios.delete(`${baseURL}/${personID}`)
    console.log(`${baseURL}/${personID}`)
    return request.then(response => response.data)
}
export default { create, getAll, getPerson, remove }