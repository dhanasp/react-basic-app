import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(val,e) {
      console.log(val);
      console.log(e);
      this.setState((state) => {
        return { isToggleOn: state.isToggleOn ? false : true };
    });
    
  }

  render() {
    return (
      <div>
        <button onClick={(e)=>this.handleClick('asad',e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}
