import React, { useEffect, useState, useRef } from "react";

const FunctionInterVal = () => {
  var interValRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    interValRef = setInterval(() => {
      setCount(count + 1);
    }, 6000);
    return () => {
      clearInterval(interValRef);
    };
  }, [count]);

  clearInterval = () => {
    setCount(0);
    clearInterval(interValRef);
  };

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={clearInterval}>Clear Interval</button>
    </>
  );
};

export default FunctionInterVal;
