import React from "react";
import categoryData from "./categoryData";

const Category = (props) => {
  console.log(categoryData);
  return (
    <div className="category-section">
      <h1>Category Section</h1>
      <button onClick={props.startQuiz}>Start Quiz!</button>
    </div>
  );
};

export default Category;
