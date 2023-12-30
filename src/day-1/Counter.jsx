import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0); //useState sets default value of count to 0, setCount sets initial value of count
  const [buttonClicked, setButtonClicked] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setButtonClicked(true);

  };

  const decrement = () => {
    setCount(count - 1);
    setButtonClicked(true);

  };

  return (
    <div>
      <h2>{props.title}</h2>

      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button> {/*handle increment event */}
      <button onClick={decrement}>Decrement</button>

      {buttonClicked? <p>Button Clicked!</p>:<p></p>}

    </div>
  );
};

export default Counter;