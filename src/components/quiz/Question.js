import React, { useEffect, useState } from "react";
import "./Question.css";

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  let options = [...props.incorrectOpt, props.correctOpt];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    options = shuffleArray(options);
  }, []);

  useEffect(() => {
    if (props.submitted) {
      console.log(selectedAnswer, props.correctOpt);
      if (selectedAnswer === props.correctOpt) {
        props.questionScore(1);
      } else {
        props.questionScore(0);
      }
    }
  }, [props.submitted]);

  const handleOptionClick = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const parser = new DOMParser();
  const parse = (str) => {
    return parser.parseFromString(`<!doctype html><body>${str}`, "text/html")
      .body.textContent;
  };

  return (
    <div className="question">
      <h2>{parse(props.question)}</h2>
      <div className="options-section">
        <button
          value={options[0]}
          onClick={handleOptionClick}
          disabled={props.submitted}
          style={{
            backgroundColor:
              selectedAnswer === options[0] ? "#d6dbf5" : "#f5f7fb",
            borderColor: selectedAnswer === options[0] ? "#d6dbf5" : "#4d5b9e",
          }}
        >
          {parse(options[0])}
        </button>

        <button
          value={options[1]}
          onClick={handleOptionClick}
          disabled={props.submitted}
          style={{
            backgroundColor:
              selectedAnswer === options[1] ? "#d6dbf5" : "#f5f7fb",
            borderColor: selectedAnswer === options[1] ? "#d6dbf5" : "#4d5b9e",
          }}
        >
          {parse(options[1])}
        </button>

        <button
          value={options[2]}
          onClick={handleOptionClick}
          disabled={props.submitted}
          style={{
            backgroundColor:
              selectedAnswer === options[2] ? "#d6dbf5" : "#f5f7fb",
            borderColor: selectedAnswer === options[2] ? "#d6dbf5" : "#4d5b9e",
          }}
        >
          {parse(options[2])}
        </button>

        <button
          value={options[3]}
          onClick={handleOptionClick}
          disabled={props.submitted}
          style={{
            backgroundColor:
              selectedAnswer === options[3] ? "#d6dbf5" : "#f5f7fb",
            borderColor: selectedAnswer === options[3] ? "#d6dbf5" : "#4d5b9e",
          }}
        >
          {parse(options[3])}
        </button>
      </div>
    </div>
  );
};

export default Question;
