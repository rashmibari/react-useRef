import React, { Component } from "react";

class ClassIntervaleExp extends Component {
  intervalRef = React.createRef();
  state = {
    count: 0
  };
  intervalRef = setInterval(() => {
    console.log("Within interval function");
    this.setState(preState => {
      return {
        count: preState.count + 1
      };
    });
  }, 6000);

  componentWillUnmount() {
    clearInterval(this.intervalRef);
    this.setState({ count: 0 });
  }

  clearInterVal = () => {
    clearInterval(this.intervalRef);
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h3>InterVal Count: {this.state.count}</h3>
        <button ref={this.intervalRef} onClick={this.clearInterVal}>
          Clear Interval
        </button>
      </>
    );
  }
}

export default ClassIntervaleExp;
