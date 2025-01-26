import { useState } from "react";
import QUESTIONS from '../questions';
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex=userAnswers.length;
    function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers=>[...prevUserAnswers,selectedAnswer]);
    }
    return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {QUESTIONS[activeQuestionIndex].options.map(option => 
            <li key={option} className="answer">
            <button onClick={()=>handleSelectAnswer(option)}>{option}</button>
            </li>
            )}
        </ul>
      </div>
    </div>
  );
}
