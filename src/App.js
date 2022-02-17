import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Quiz from "./components/quiz/Quiz";
import "./App.css";
import Category from "./components/Category";

const App = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isCategoryVisible, setisCategoryVisible] = useState(false);

  const showCategory = () => {
    setIsHomeVisible(false);
    setisCategoryVisible(true);
  };

  const startQuiz = () => {
    setisCategoryVisible(false);
  };

  return (
    <div className="main-body">
      {isHomeVisible && <Homepage showCategory={showCategory}></Homepage>}
      {!isHomeVisible && isCategoryVisible && (
        <Category startQuiz={startQuiz}></Category>
      )}
      {!isHomeVisible && !isCategoryVisible && <Quiz></Quiz>}
    </div>
  );
};

export default App;
