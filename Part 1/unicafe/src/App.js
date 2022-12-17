import React, { useState } from 'react'
import "./styles.css";
 
const Title = (props) => {
 return (
   <div>
     <h1>{props.text}</h1>
   </div>
 )
}
 
const Button = ({ onClick, text }) => (
 <button onClick={onClick}>
   {text}
 </button>
  )
 
  const Counter = (props) => {
   return (
     <div>
       <p>{props.text} {props.value}</p>
     </div>
   )
  }
 
 const Statistics = (props) => {
   if (props.all_reviews === 0) {
     return (
       <p>No feedback given</p>
     )
   }
   return (
     <div>
       <h2>Statistics</h2>
       <Counter text="good" value={props.good} />
       <Counter text="neutral" value={props.neutral} />
       <Counter text="bad" value={props.bad} />
       <p> all {props.all_reviews} </p>
       <p> positive {props.percentage_of_positivity}% </p>
     </div>
   )
 }
 
 
export default function App() {
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)
 const all_reviews = good + neutral + bad
 const percentage_of_positivity = (good/all_reviews) * 100.00
 
 const handleGoodClick = () => {
   setGood(good + 1)
 }
 
  const handleNeutralClick = () => {
   setNeutral(neutral + 1) }
   const handleBadClick = () => {
   setBad(bad + 1)
 }
  return (
<div>
   <Title text = "give feedback"/>
   <Button onClick={handleGoodClick} text="good" />
   <Button onClick={handleNeutralClick} text="neutral" />
   <Button onClick={handleBadClick} text="bad" />
   <Statistics
     good={good}
     neutral={neutral}
     bad={bad}
     all_reviews={all_reviews}
     percentage_of_positivity={percentage_of_positivity}
   />
 </div>
 )
}
