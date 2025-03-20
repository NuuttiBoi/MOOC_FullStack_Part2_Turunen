const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
    console.log('homo',props.parts.map(part =>
        <Part key={part.id} part={props.parts[part]}/>))
    return (
    <div>
        {props.parts.map(part =>
            <Part key={part.id} part={part}/>)}
        {/*
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
        */}
    </div>
    )
}

const Part = (props) => {
    console.log('vittu', props.part)
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
const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
    console.log(courses[0])


    return (
        <div>
            <Course course={courses[0]}/>
            <Course course={courses[1]}/>
        </div>
    )
}
export default App