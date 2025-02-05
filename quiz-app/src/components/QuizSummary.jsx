import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function QuizSummary({ userAnswers }) {
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="quiz-complete-img" />
      <h2>Quiz Completed</h2>
      <ol>
        {QUESTIONS.map((question, index) => {
          return (
            <li key={question.answer}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className="user-answer">{userAnswers[index]}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
