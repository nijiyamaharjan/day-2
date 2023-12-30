import React, { useState } from "react";

const UseStateWithObject = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [checkedIndex, setCheckedIndex] = useState(null);

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
    setCheckedIndex(null);
  };

  const remove = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);

    if (index === checkedIndex) {
      setCheckedIndex(null);
    }
  };

  const handleCheckboxChange = (index) => {
    setCheckedIndex(checkedIndex === index ? null : index);
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
                <input
                  type="checkbox"
                  checked={checkedIndex === index}
                  onChange={() => handleCheckboxChange(index)}
                />
                {checkedIndex === index ? <s>{item.text}</s> : item.text}
                <button onClick={() => remove(index)}>Remove</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </form>
  );
};

export default UseStateWithObject;
