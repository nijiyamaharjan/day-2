import React, { useState } from "react";

const UseStateWithObject = () => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [isTableVisible, setTableVisible] = useState(true);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, { text }]);
    setText("");
    setTableVisible(true); // Ensure the table is visible after adding an item
  };

  const clear = () => {
    setArr([]);
    setText("");
    setChecked(false);
    setTableVisible(false); // Hide the table when clearing
  };

  const remove = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);

    if (checked) {
      setChecked(false);
    }

    // If there are no items after removing, hide the table
    if (newArr.length === 0) {
      setTableVisible(false);
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button>Add</button>
      <button type="button" onClick={clear}>
        Clear
      </button>

      {isTableVisible && arr.length > 0 && (
        <table>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td className="checkbox">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td className="list-item">
                  {checked ? <s>{item.text}</s> : item.text}
                </td>
                <td className="remove">
                  <button onClick={() => remove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </form>
  );
};

export default UseStateWithObject;
