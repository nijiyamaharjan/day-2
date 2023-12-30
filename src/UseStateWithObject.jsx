import React, { useState } from "react";

const UseStateWithObject = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, text]);
    setText("");
  };

  const clear = () => {
    setArr([]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <button>Add</button>
      <button onClick={clear}>Clear</button>

      <div>
        {arr.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item}</li>
            </ul>
          </div>
        ))}
      </div>
    </form>
  );
};

export default UseStateWithObject;
