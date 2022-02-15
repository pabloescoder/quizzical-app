import React, { useState } from "react";
import "./Question.css";

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="question">
      <h2>This is a question</h2>
      <div className="options-section">
        <button value={`Option 1`}>{`Option 1`}</button>
        <button value={`Option 2`}>{`Option 2`}</button>
        <button value={`Option 3`}>{`Option 3`}</button>
        <button value={`Option 4`}>{`Option 4`}</button>
      </div>
    </div>
  );
};

export default Question;
