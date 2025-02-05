import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function QuizSummary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answer
  );
  const skippedAnswersPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersPercent =
    100 - (skippedAnswersPercent + correctAnswersPercent);
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="quiz-complete-img" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercent}%</span>
          <span className="text">correct answered</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercent}%</span>
          <span className="text">wrong answered</span>
        </p>
      </div>
      <ol>
        {QUESTIONS.map((question, index) => {
          let answerCssClass = "user-answer";
          if (userAnswers[index] === null) {
            answerCssClass += " " + "skipped";
          } else if (userAnswers[index] === QUESTIONS[index].answer) {
            answerCssClass += " " + "correct";
          } else {
            answerCssClass += " " + "wrong";
          }
          return (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={answerCssClass}>
                {userAnswers[index] ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
