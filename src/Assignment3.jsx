import React, { useState } from "react";

const Assignment3 = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { text, id: Date.now() }; // Adding a unique identifier
    setArr([...arr, newItem]);
    setText("");
  };

  const clear = () => {
    setArr([]);
    setText("");
    setCheckedIds([]);
  };

  const remove = (id) => {
    const newArr = arr.filter((item) => item.id !== id);
    setArr(newArr);
    setCheckedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  };

  const handleCheckboxChange = (id) => {
    setCheckedIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <div>
      <h1>Assignment 3</h1>
      <p>TO-DO app</p>
      <p>Text Input to take Action items</p>
      <p>Button to add those actions to a list</p>
      <p>Delete Button beside in each added action points to delete that item from the list</p>
      <p>Additional:<br />
        a checkbox in front of the action item.<br />
        When the checkbox is checked, the action item is striked off</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button>Add</button>
        <button type="button" onClick={clear}>
          Clear
        </button>

        <div>
          {arr.map((item) => (
            <div key={item.id}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={checkedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  {checkedIds.includes(item.id) ? <s>{item.text}</s> : item.text}
                  <button onClick={() => remove(item.id)}>Remove</button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Assignment3;
