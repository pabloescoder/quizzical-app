import React, { useState, useEffect } from "react";
import quizBlobTop from "../../images/quiz-blob-top.png";
import quizBlobBottom from "../../images/quiz-blob-bottom.png";
import Question from "./Question";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (questions.length !== 0) {
      setQuestionsLoaded(true);
    }
  }, [questions]);

  const questionScore = (score) => {
    setTotalScore((prevScore) => prevScore + score);
  };

  const questionElements = questions.map((questionObj) => (
    <Question
      key={questionObj.question}
      question={questionObj.question}
      incorrectOpt={questionObj.incorrect_answers}
      correctOpt={questionObj.correct_answer}
      submitted={submitted}
      questionScore={questionScore}
    ></Question>
  ));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="quiz-section">
      {/* <pre>{JSON.stringify(questions, null, 2)}</pre> */}
      <img className="top" src={quizBlobTop} alt="page design element"></img>

      {questionsLoaded ? (
        [...questionElements]
      ) : (
        <div className="fetching">
          <h1>Fetching your questions...</h1>
        </div>
      )}
      <div className="submit-section">
        {submitted && <h2>You scored {totalScore}/5 correct answers</h2>}
        <button className="submit-quiz" onClick={handleSubmit}>
          {submitted ? "Play Again" : "Check Answers"}
        </button>
      </div>

      <img
        className="bottom"
        src={quizBlobBottom}
        alt="page design element"
      ></img>
    </main>
  );
};

export default Quiz;
