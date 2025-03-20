import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number:'1335919519819' },
        { name: 'Nuutti Turunen', number:'2994028527892'}
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
            <input
                placeholder='filter shown with:'
                value={filter}
                onChange={changeFilter}
            />
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                    value={newName}
                    onChange={setName}
                />
                </div>
                <div>
                    number:<input
                    value={newNumber}
                    onChange={changeNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                <ul>
                    {personsToShow.map(person => <li key={person.name}>
                        {person.name} {person.number}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default App