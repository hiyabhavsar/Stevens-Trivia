import { useState } from "react";
import { resultInitialState } from "./constants";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const { question, choices, correctAnswer, explanation } =
    questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    if (!isAnswerSubmitted) {
      setAnswerIdx(index);
      if (answer === correctAnswer) {
        setAnswer(true);
      } else {
        setAnswer(false);
      }
      setShowExplanation(false);
    }
  };

  const onClickNext = () => {
    if (!showExplanation) {
      setIsAnswerSubmitted(true);
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
      setIsAnswerSubmitted(false);
      setAnswerIdx(null);
      setResult((prev) =>
        answer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            }
      );
      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setCurrentQuestion(0);
        setShowResult(true);
      }
    }
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
    setShowExplanation(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">
            Question #: {currentQuestion + 1}
          </span>
          <span className="total-question">/{questions.length}</span>
          <h2> {question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={`${answerIdx === index ? "selected-answer" : null} ${
                  isAnswerSubmitted ? "disabled-choice" : null
                }`}
              >
                {answer}
              </li>
            ))}
          </ul>
          {showExplanation && (
            <div className="explanation">
              <p>{explanation}</p>
            </div>
          )}
          <div className="footer">
            <button
              onClick={onClickNext}
              disabled={answerIdx === null && !showExplanation}
            >
              {showExplanation
                ? "Continue"
                : currentQuestion === questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try Again</button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
