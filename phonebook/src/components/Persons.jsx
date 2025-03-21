const Persons = (props) => {
    return (
        <div>
            <ul>
                {props.personsToShow.map(person => <li key={person.name}>
                    {person.name} {person.number}</li>)}
            </ul>
        </div>
    )
}
export default Persons