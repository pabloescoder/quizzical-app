import React from "react";
import categoryData from "./categoryData";

const Category = (props) => {
  const difficultyChoices = [
    { title: "easy" },
    { title: "medium" },
    { title: "hard" },
  ];

  const difficultyElements = difficultyChoices.map((obj) => (
    <button
      value={obj.title}
      onClick={() => props.setDifficulty(obj.title)}
      key={obj.title}
    >{`${obj.title[0].toUpperCase()}${obj.title.slice(1)}`}</button>
  ));

  const categoryElements = categoryData.map((buttonObj) => (
    <button
      key={buttonObj.id}
      value={buttonObj.id}
      onClick={() => props.setCategory(buttonObj.id)}
    >
      {buttonObj.title}
    </button>
  ));

  return (
    <div className="category-section">
      <div className="category-choices">
        <h2>Choose a category</h2>
        {categoryElements}
      </div>
      <div className="difficulty-choices">
        <h2>Choose a difficulty</h2>
        {difficultyElements}
      </div>
      <button onClick={props.startQuiz}>Start Quiz!</button>
    </div>
  );
};

export default Category;
