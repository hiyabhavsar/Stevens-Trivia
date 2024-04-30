import { useNavigate } from "react-router-dom";
import "./css/Instructions.scss";

function InstructionsPage() {
  let navigate = useNavigate();
  const navigateToGame = () => {
    let path = "/Quiz";
    navigate(path);
  };
  return (
    <div className="instructions-page">
      <div className="instructions-card">
        <h2 className="title">Instructions</h2>
        <div className="actual-instructions">
          Welcome to Stevens Trivia! To begin, press the Start button. Please
          answer each question to the best of your ability. Each question will
          have four answer options. Each correct answer will be awarded 5
          points.
        </div>
        <button onClick={navigateToGame} className="start-button">
          START
        </button>
      </div>
    </div>
  );
}
export default InstructionsPage;
