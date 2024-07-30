import { useState } from 'react'

const Header = () => {
  return (
    <h2>Give feedback</h2>
  )
}

const Content = () => {
  return (
    <h2>Statistics</h2>
  )
}

const Button = (props ) => {
  return(
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticsLine=(props)=>{
  return(
    <tr>
      
      <td>{props.text}</td>
      <td>{props.value}</td>
      
    </tr>
  );
};


const Statistics = (props) => {

  if (!(props.good || props.neutral || props.bad)) {
    return <p>No Feedback given</p>;
  }
  return (
    <div>
      
      <StatisticsLine text = "Good" value={props.good} />
      <StatisticsLine text = "Neutral" value={props.neutral} />
      <StatisticsLine text = "Bad" value={props.bad} />
      <StatisticsLine text = "All" value={props.good + props.neutral + props.bad} />
      <StatisticsLine text = "Average" value={(props.good + props.neutral + props.bad) / 3 } />
      <StatisticsLine text = "Positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + " %"}   />

    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClicks=()=>{
    
      setGood(good+1)
    
  }

  const neutralClicks=()=>{
    
      setNeutral(neutral+1)
      
      }

  const badClicks=()=>{
    
      setBad(bad+1)
      
      }

  return (
    <table>
      <Header />
      <Button handleClick={goodClicks} text = "Good"/>
      <Button handleClick={neutralClicks} text = "Neutral"/>
      <Button handleClick={badClicks} text = "Bad"/>
      <Content />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </table>
  );
  
};

export default App