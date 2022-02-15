import React, { useState } from "react";
import "./Question.css";

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  let options = [...props.incorrectOpt, props.correctOpt];
  const parser = new DOMParser();

  const parse = (str) => {
    return parser.parseFromString(`<!doctype html><body>${str}`, "text/html")
      .body.textContent;
  };

  return (
    <div className="question">
      <h2>{parse(props.question)}</h2>
      <div className="options-section">
        <button value={options[0]}>{parse(options[0])}</button>
        <button value={options[1]}>{parse(options[1])}</button>
        <button value={options[2]}>{parse(options[2])}</button>
        <button value={options[3]}>{parse(options[3])}</button>
      </div>
    </div>
  );
};

export default Question;
