import React from "react";
import "./style.css";
import ClassInput from "./ClassInput";
import FunctionInput from "./FunctionInput";
import ClassInterval from "./ClassIntervalExp";
import FunctionInterval from "./FunctionInterval";

export default function App() {
  return (
    <div>
      <h1>Use Ref</h1>
      <ClassInterval />
      <FunctionInterval />
    </div>
  );
}
