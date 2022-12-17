import "./styles.css";
 
export default function App() {
 
 const course = {
   name: 'Half Stack application development',
   parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'State of a component',
       exercises: 14
     }
   ]
 }
 const totalnumber_exercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
 
 
  
 
   const Header = () => {
     return (
       <div>
         <h1>{course.name}</h1>
       </div>
     )
   }
 
   const Part = (props) => {
     return (
       <div>
         <p> {props.part} {props.numberofexercises} </p>
       </div>
     )
   }
 
   const Content = () => {
     return (
       <div>
         <Part part = {course.parts[0].name} numberofexercises = {course.parts[0].exercises} />
         <Part part = {course.parts[0].name} numberofexercises = {course.parts[1].exercises}/>
         <Part part = {course.parts[0].name} numberofexercises = {course.parts[2].exercises} />
       </div>
     )
   }
 
 
   const Total = (props) => {
     return (
       <div>
         <p> Number of exercises {totalnumber_exercises} </p>
       </div>
     )
   }
 
   return (
     <div>
       <Header />
       <Content />
       <Total />
     </div>
   )
 }

