import { Description } from '../Description/Description'
import { Feedback } from '../Feedback/Feedback'
import { Notification } from '../Notification/Notification'
import { Options } from '../Options/Options'
import './App.module.css'
import { useState } from 'react'

function App() {
  const [clicked, setClicked] = useState(false);
  const [response, setResponse] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )

  const updateFeedback = feedbackType => {
    setResponse(prevResponse => ({
      ...prevResponse,
      [feedbackType]: prevResponse[feedbackType] + 1
    }));
  };

  const totalFeedback = response.bad + response.good + response.neutral;

  const handleOptionsClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <Description />
      <Options feedback={updateFeedback} onClick={handleOptionsClick} />
      {clicked ? <Feedback response={response} total={totalFeedback} /> : <Notification />}
    </>
  )
}

export default App
