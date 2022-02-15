import React from "react";
import homepageBlobTop from "../images/homepage-blob-top.png";
import homepageBlobBottom from "../images/homepage-blob-bottom.png";
import "./Homepage.css";

const Homepage = () => {
  return (
    <main className="homepage">
      <img className="top" src={homepageBlobTop}></img>
      <div>
        <h2>Quizzical</h2>
        <p>Test your knowledge based on random trivia questions</p>
        <button>Start Quiz</button>
      </div>
      <img className="bottom" src={homepageBlobBottom}></img>
    </main>
  );
};

export default Homepage;
