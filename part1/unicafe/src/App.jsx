import { useState } from 'react'

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => { 
  if (text === 'positive'){
    return <tr><td>{text}</td><td>{value} %</td></tr>
  }
  return <tr><td>{text}</td><td>{value}</td></tr>}

const Statistics = ({good,bad,neutral}) => {
  const all =  good + neutral + bad
  const average = () => { 
    if (all === 0){
      return 0
    }
    return (good-bad)/all
  }

    const positive = () => {
      if (all === 0) 
        {return 0} 
      return good/all*100
    }
   if (all > 0) {return <table>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average()}/>
        <StatisticLine text='positive' value={positive()}/>    
    </table>} 
    return <h2>No feedback given</h2>
  

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <Heading text='give feedback'/>
      <Button onClick={handleClickGood} text='good'/>
      <Button onClick={handleClickNeutral} text='neutral'/>
      <Button onClick={handleClickBad} text='bad'/>
      <Heading text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App