const Header = ({course}) => {
  return <h1>{course.name}</h1>
}



const TotalExercises = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <h3>total of {total} exercises</h3>;
};



const Content = ({ course }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Part = ({ part }) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Course = ({course}) => { 
  
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <>

<Header course={course}/>
<Content course={course}/>
<TotalExercises parts={course.parts}/>
</>}

export default Course