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
          
    <table>
  <tr>
    <td className="checkbox"><input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                /></td>
    <td className="list-item">{checked? <s>{item.text}</s> : item.text}</td>
    <td className="remove"><button onClick={() => remove(index)}>Remove</button></td>
  </tr>
</table>
          </div>
        ))}
      </div>
    </form>
  );
};

export default UseStateWithObject;
