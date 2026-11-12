

{/* This is a functional component that takes a 'name' prop and displays a greeting message */}
function Greeting({ studentName, grade, age, city }) {
   
    return (
        <h2>Hello, my name is {studentName} and I am in grade {grade} and my age is {age} and I live in {city}</h2>
    );
}
export default Greeting;