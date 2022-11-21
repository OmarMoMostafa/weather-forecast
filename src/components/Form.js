import React, { useState } from "react";

function Form({ onFormSubmit }) {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(input);
  };

  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label className="me-2" htmlFor="city">
        Enter Your City
      </label>
      <input
        type="text"
        id="city"
        className="me-2"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;
