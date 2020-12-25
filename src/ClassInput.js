import React, { Component } from "react";

class ClassInput extends Component {
  //creating input reference
  inputRef = React.createRef();

  componentDidMount() {
    // focusing on the input when component mounted
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}

export default ClassInput;
