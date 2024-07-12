import React, { useState } from "react";
import "./counter.css";

const CounterFunction = () => {
  // state variable for count
  const [count, setCount] = useState(0);

  // increment
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const styles = {
    counter: {
      border: "1px solid black",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px 2px #ccc",
    },
    count: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "red",
    },
  };

  return (
    <>
      <div id="counter" style={styles.counter}>
        <h1 style={{color:'red',fontWeight:"bolder"}}>Counter Function</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default CounterFunction;
