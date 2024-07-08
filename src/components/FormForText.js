import React, { useState } from "react";

export default function FormForText(props) {
  let btnUpper = () => {
    setText(text.toUpperCase());
    props.valAlert("success", "Converted to UpperCase");
  };

  let btnLower = () => {
    setText(text.toLowerCase());
    props.valAlert("success", "Converted to LowerCase");
  };

  let btnClear = () => {
    setText("");
    props.valAlert("success", "Text has been cleared");
  };

  let handleOnChange = (evt) => {
    console.log("handle on change");
    setText(evt.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white"
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={btnUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={btnLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={btnClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-5">
        <h3>Your text summary</h3>
        <p className="my-3">
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{(text.split(" ").length - 1) / 200} minutes required to read</p>
      </div>
    </>
  );
}
