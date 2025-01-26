// Hook Imports
import { useState, useCallback } from "react";

// Components Import
import QuizSummary from "./QuizSummary";
import QuizTimer from "./QuizTimer";

// Utility Import
import QUESTIONS from "../questions.js";
import { shuffleArray } from "../utils";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = QUESTIONS.length === activeQuestionIndex;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  },
  []);
  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <QuizSummary userAnswers={userAnswers} />;
  }
  const shuffledOptions = shuffleArray(QUESTIONS[activeQuestionIndex].options);
  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={activeQuestionIndex}
          timeout={4000}
          onTimeout={handleSkipQuestion}
        />
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
