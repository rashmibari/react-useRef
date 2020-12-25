import React, { useRef, useEffect } from "react";

const FunctionInput = () => {
  //creating input reference using useRef hook of the React

  const inputRef = useRef(null);
  // implementing  componentDidMount using useEffect and autofocusing on the input using input reference

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} />;
};

export default FunctionInput;
