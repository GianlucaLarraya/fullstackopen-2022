import "./styles.css";
 
export default function App() {
 
   const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14
   const totalexercises = exercises1 + exercises2 + exercises3
 
   const Header = () => {
     return (
       <div>
         <h1>{course}</h1>
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
         <Part part = {part1} numberofexercises = {exercises1} />
         <Part part = {part2} numberofexercises = {exercises2}/>
         <Part part = {part3} numberofexercises = {exercises3} />
       </div>
     )
   }
 
   const Total = (props) => {
     return (
       <div>
         <p> Number of exercises {totalexercises}  </p>
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
