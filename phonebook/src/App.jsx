import {useEffect, useState} from 'react'
import axios from 'axios'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import personsService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        personsService.getAll().then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [selectedPerson, setSelectedPerson] = useState('')
    const setName = (event)=>{
        setNewName(event.target.value)
    }
    const changeNumber = (event) =>{
        setNewNumber(event.target.value)
    }
    const changeFilter = (event) =>{
        setFilter(event.target.value)
        setShowAll(false)
        console.log(filter)
        console.log(persons.filter((person) =>
            person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    }
    const personsToShow = showAll ? persons
        : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if(persons.some(person => person.name === newName)){
            alert(`${newName} is already added to the phonebook!`)
        } else{
            console.log('adding new person')
            personsService
                .create(personObject)
                .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
            })
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
    }
    const deletePerson = (personID) => {
        console.log(personID)
        personsService
            .remove(personID)
            .then(response => {
                setPersons(persons.concat(response.data))
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filter={filter}
                onChange={changeFilter}
            />
            <PersonForm
                onSubmit={addPerson}
                newName={newName}
                setName={setName}
                newNumber={newNumber}
                changeNumber={changeNumber}
            />
            <h2>Numbers</h2>
            <Persons
                personsToShow={personsToShow}
                onDelete={deletePerson}
            />
        </div>
    )
}

export default App