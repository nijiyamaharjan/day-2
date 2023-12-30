import React, { useState } from 'react';

const Assignment1 = (props) => {
  const [count, setCount] = useState(0); //useState sets default value of count to 0, setCount sets initial value of count
  const [buttonClicked, setButtonClicked] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setButtonClicked(true);

  };

  const decrement = () => {
    setCount(count - 2);
    setButtonClicked(true);
  };

  return (
    
    <div>
      <h1>Assignment 1</h1>
      <p>Create a functional component that displays how many times a button has been clicked. When clicked on button, the number should increase</p>
<p>Add another button that decreses the count by 2 each time
the button is clicked.</p>
    {count <0 ? setCount(0): "" } 
      <p className='count'>Count: {count}</p>
      <button onClick={increment}>Increment</button> {/*handle increment event */}
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
};

export default Assignment1;