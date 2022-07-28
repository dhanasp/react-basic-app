import React from 'react';
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }


  render() {
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }

  componentWillUnmount(){  // clearing interval before unmount of component
    clearInterval(this.timerId);
  }
}
