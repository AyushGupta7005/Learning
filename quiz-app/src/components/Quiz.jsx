// Hook Imports
import { useState, useCallback } from "react";

// Components Import
import QuizSummary from "./QuizSummary";
import Question from "./Question.jsx";

// Utility Import
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
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
  const quizIsCompleted = QUESTIONS.length === userAnswers.length;
  if (quizIsCompleted) {
    return <QuizSummary userAnswers={userAnswers} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        handleSkipQuestion={handleSkipQuestion}
      />
    </div>
  );
}
