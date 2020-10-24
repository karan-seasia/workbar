import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowUp from "../assets/images/arrow-up.png";
import ArrowDown from "../assets/images/arrow-down.png";

class GroupedButtons extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    return (
      <div className="d-flex justify-center">
        <ButtonGroup className="teamsize-input">
          <Button disabled>{this.state.counter}</Button>
          <img
            className="up"
            src={ArrowUp}
            alt=""
            onClick={this.handleIncrement}
          />
          <img
            className="down"
            src={ArrowDown}
            alt=""
            onClick={this.handleDecrement}
          />
        </ButtonGroup>
      </div>
    );
  }
}

export default GroupedButtons;
