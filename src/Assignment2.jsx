import React, { useState } from "react";

const Assignment2 = () => {
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

  return (<div>
    <h1>Assignment 2</h1>
      <p>Create a functional component that displays entered text values
as lists</p>
<p>When clicked on 'Add' button, the text entered in the input should be
added to the list</p>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <button>Add</button>

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
    </div>
  );
};

export default Assignment2;
