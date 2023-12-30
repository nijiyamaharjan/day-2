import React, { useState } from "react";

const UseStateWithObject = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, { text, checked: false }]);
    setCheckedItems([...checkedItems, false]);
    setText("");
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const clear = () => {
    setArr([]);
    setCheckedItems([]);
    setText("");
  };

  const remove = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);

    const newCheckedItems = [...checkedItems];
    newCheckedItems.splice(index, 1);
    setCheckedItems(newCheckedItems);
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
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                {checkedItems[index] ? <del>{item.text}</del> : item.text}
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
