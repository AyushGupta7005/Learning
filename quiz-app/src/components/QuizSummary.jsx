import quizCompletedImg from "../assets/quiz-complete.png"

export default function QuizSummary (){
    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="quiz-complete-img" />
            <h2>Quiz Completed</h2> 
        </div>
    );
}