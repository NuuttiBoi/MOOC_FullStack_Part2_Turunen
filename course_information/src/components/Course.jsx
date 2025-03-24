const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
    console.log('homo',props.parts.map(part =>
        <Part key={part.id} part={props.parts[part]}/>))
    return (
        <div>
            {props.parts.map(part =>
                <Part key={part.id} part={part}/>)}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => <b>Total of {props.total} exercises</b>

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total total={props.course.parts.reduce((accumulator,currentValue) => accumulator +
                currentValue.exercises, 0)}/>
        </div>
    )
}
export default Course