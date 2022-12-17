import "./styles.css";
import React, { useState } from 'react'
 
const Anecdote = (props) => {
 return (
   <h2>{props.randomfunction}</h2>
 )
}
 
const ButtonNA = ({onClick}) => {
 return (
   <button onClick={onClick}> next anecdote </button>
 )
}
 
const ButtonVote = ({onClick}) => {
 return (
   <button onClick={onClick}> vote </button>
 )

}

const AnecMV = (props) => {
  if (props.mostvotes === 0) {
    return (
      <p>-</p>
    )
  }
  return (
    <p> {props.array[props.mostvoted_function]}</p>
  )
}
 
export default function App() {
 
const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState([0,0,0,0,0,0])
 
 const anecdotes = [
   'If it hurts, do it more often',
   'Adding manpower to a late software project makes it later!',
   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
   'Premature optimization is the root of all evil.',
   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
 ]
 
 const handleRandomise = () => {
   setSelected(Math.floor(Math.random() * anecdotes.length))
 }
 
 const handleVote = () => {
   const copy = [...votes]
   copy[selected] += 1
   setVotes(copy)
 }
 
 const mostVoted = votes.indexOf(Math.max(...votes))

 return (
   <div>
   <Anecdote randomfunction = {anecdotes[selected]} />
   <p> has {votes[selected]} votes </p>
   <ButtonNA onClick={handleRandomise} />
   <ButtonVote onClick={handleVote} />
   <h2> Anecdote with most votes </h2>
   <AnecMV mostvotes = {Math.max(...votes)} mostvoted_function = {mostVoted} array = {anecdotes} />
   </div>
 )
}

