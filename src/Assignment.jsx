import React, { useState } from "react";

const UseStateWithObject = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, { text }]);
    setText("");
  };

  const clear = () => {
    setArr([]);
    setText("");
    setChecked(false);
  };

  const remove = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);

    if (checked) {
      setChecked(false);
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button>Add</button>
      <button onClick={clear}>Clear</button>

      <div>
        {arr.map((item, index) => (
          <div key={index}>
            <ul>
              <li>
                <span className="checkbox"><input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                /></span>
                <span className="list-tem">{checked? <s>{item.text}</s> : item.text}</span>
                <span className="remove"><button onClick={() => remove(index)}>Remove</button></span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </form>
  );
};

export default UseStateWithObject;
