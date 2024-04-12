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
      <div className="title">Instructions</div>
      <button onClick={navigateToGame} className="start-button">
        START
      </button>
    </div>
  );
}
export default InstructionsPage;
