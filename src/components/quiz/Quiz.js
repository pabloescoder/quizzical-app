import React, { useState, useEffect } from "react";
import quizBlobTop from "../../images/quiz-blob-top.png";
import quizBlobBottom from "../../images/quiz-blob-bottom.png";
import Question from "./Question";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  console.log(questions);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="quiz-section">
      <img className="top" src={quizBlobTop}></img>
      <Question></Question>
      <img className="bottom" src={quizBlobBottom}></img>
    </main>
  );
};

export default Quiz;
