import React, { useState } from 'react';

const ClickCounter = (props) => {
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
    {count <0 ? setCount(0): "" } 
      <p className='count'>Count: {count}</p>
      <button onClick={increment}>Increment</button> {/*handle increment event */}
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
};

export default ClickCounter;