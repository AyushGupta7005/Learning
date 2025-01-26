// Hook Imports
import { useState } from "react";

// Components Import
import QuizSummary from "./QuizSummary";

// Utility Import
import QUESTIONS from "../questions";
import { shuffleArray } from "../utils";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted=QUESTIONS.length===activeQuestionIndex;
  if(quizIsCompleted){
    return <QuizSummary/>
  }
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }

  const shuffledOptions=shuffleArray(QUESTIONS[activeQuestionIndex].options);
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledOptions.map((option) => {
            return (
              <li key={option} className="answer">
                <button onClick={() => handleSelectAnswer(option)}>
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
