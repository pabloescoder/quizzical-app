import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Quiz from "./components/quiz/Quiz";
import "./App.css";

const App = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  const showQuiz = () => {
    setIsHomeVisible(false);
  };

  return (
    <div className="main-body">
      {isHomeVisible && <Homepage showQuiz={showQuiz}></Homepage>}
      {!isHomeVisible && <Quiz></Quiz>}
    </div>
  );
};

export default App;
