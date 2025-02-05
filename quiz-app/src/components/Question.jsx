import QUESTIONS from "../questions";
import QuizTimer from "./QuizTimer";
import Options from "./Options";
import { useState } from "react";
export default function Question({
  activeQuestionIndex,
  onSelectAnswer,
  handleSkipQuestion,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer: selectedAnswer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: selectedAnswer,
        isCorrect: QUESTIONS[activeQuestionIndex].answer === selectedAnswer,
      });
      setTimeout(() => onSelectAnswer(selectedAnswer), 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeout={handleSkipQuestion} />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Options
        options={QUESTIONS[activeQuestionIndex].options}
        onSelect={handleSelectAnswer}
        answerState={answerState}
        selectedOption={answer.selectedAnswer}
      />
    </div>
  );
}
