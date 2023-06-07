import { useState } from 'react'

const Header = ({ title }) => (
  <h1>{title}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ total, text, sign }) => (
  <tr><td><strong>{text}</strong></td><td>{total} {sign}</td></tr>
)

const Statistics = ({ good, bad, neutral, total }) => {
  if (total > 0) {
    return (
      <>
        <Header title="Statistics" />
        <table>
          <tbody>
            <StatisticLine text="Good" total={good} />
            <StatisticLine text="Neutral" total={neutral} />
            <StatisticLine text="Bad" total={bad} />
            <StatisticLine text="All" total={total} />
            <StatisticLine text="Average" total={(good + (-1 * bad)) / total} />
            <StatisticLine text="Positive" total={(good * 100) / (total)} sign="%" />
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <Header title="Click some button" />
      </>
    )

  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handlePositive = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNegative = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header title="Give Feedback" />
      <Button handleClick={handlePositive} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleNegative} text="Bad" />

      <Statistics good={good} bad={bad} neutral={neutral} total={total} />


    </div>
  )
}

export default App