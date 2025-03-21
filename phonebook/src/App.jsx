import { useState } from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [showAll, setShowAll] = useState(true)
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
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
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
            />
        </div>
    )
}

export default App