import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0); //how many paragraphs?
  const [text, setText] = useState([]); //the paragraphs in the data file

  //I used parseInt to convert the string into a number
  //and I used slice so it take from index = 0 into the amount which is
  //equal to the number that user will put in the field
  const handleSubmit = (e) => {
    e.preventDefault(); //so the page doesn't render
    let amount = parseInt(count); //convert string => number
    if (count <= 0) {
      amount = 1;
    }
    if (count > 0) {
      amount = 8;
    }
    setText(data.slice(0, amount)); //slice the paragraphs
  };

  return (
    <section className="section-center">
      <h3>the maximum lorem paragraphs is 8</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)} //the user input
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
      </article>
    </section>
  );
}

export default App;
