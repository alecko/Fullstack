const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/> 
    </div>
  )
}

const Header = ({ course }) => (
  <h1>{course.name}</h1>
)

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      )}

    </>
  )

}

const Part = ({ part, exercises }) => (
  <p>{part} {exercises}</p>
)


const Total= ({parts})=>{
  return(
    <strong>Total of {parts.reduce((total, part)=>{return total+=part.exercises},0)} exercises </strong>
  )
}

export default Course

