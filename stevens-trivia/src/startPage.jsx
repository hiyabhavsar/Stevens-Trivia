import { useNavigate } from "react-router-dom";

function StartPage() {
  let navigate = useNavigate();
  const navigateToInstructions = () => {
    let path = "./Quiz";
    navigate(path);
  };
  return (
    <div className="start-page">
      <div className="title">Stevens Trivia</div>
      <button onClick={navigateToInstructions} className="how-to-play-button">
        HOW TO PLAY
      </button>
    </div>
  );
}
export default StartPage;
