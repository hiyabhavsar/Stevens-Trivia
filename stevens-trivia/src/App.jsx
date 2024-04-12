import "./css/App.css";
import Quiz from "./Quiz";
import StartPage from "./startPage";
import InstructionsPage from "./Instructions";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { jsQuizz } from "./constants";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/Instructions" element={<InstructionsPage />} />
          <Route
            path="/Quiz"
            element={<Quiz questions={jsQuizz.questions} />}
          />
        </Routes>
      </Router>
      {/* <Quiz questions={jsQuizz.questions} /> */}
    </>
  );
}

export default App;
