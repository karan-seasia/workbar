import React, { Component } from 'react';

class NumberInput extends Component {

  constructor(props){
    super(props);
     this.state = {
        counter:0
     };
   }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement(){
      if(this.state.counter < 0){
        this.setState({
            counter:0
        });
      }else {
        this.setState({
            counter: this.state.counter - 1
        });
      }
  }


  render() {
    return (
      <div>
        <div >            
            <input type="text" value={this.state.counter}/>
            <button type="button" id="plus" onClick={this.increment.bind(this)}>+</button>
            <button type="button" id="minus" onClick={this.decrement.bind(this)}>-</button> 
        </div>
      </div>
    );
  }
}

export default NumberInput;