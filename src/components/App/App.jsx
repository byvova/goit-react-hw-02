import { Description } from '../Description/Description'
import { Feedback } from '../Feedback/Feedback'
import { Notification } from '../Notification/Notification'
import { Options } from '../Options/Options'
import './App.module.css'
import { useState, useEffect } from 'react'

function App() {
  const [clicked, setClicked] = useState(false);
  const [response, setResponse] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );


  useEffect(() => {
    const savedResponse = localStorage.getItem('response');
    if (savedResponse) {
      setResponse(JSON.parse(savedResponse));
    }
  }, []);

  const updateFeedback = feedbackType => {
    setResponse(prevResponse => ({
      ...prevResponse,
      [feedbackType]: prevResponse[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setResponse({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    localStorage.setItem('response', JSON.stringify(response));
  }, [response]);

  const totalFeedback = response.bad + response.good + response.neutral;

  const totalPercent = Math.round(((response.good + response.neutral) / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options click={setClicked} resetFeedback={resetFeedback} feedback={updateFeedback} />
      {clicked ? <Feedback response={response} total={totalFeedback} totalPercent={totalPercent} /> : <Notification />}
    </>
  );
}

export default App;
