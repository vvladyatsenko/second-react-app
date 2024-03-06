import { Component } from 'react';

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.resetCounter = this.resetCounter.bind(this);
  }

  resetCounter() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>Class</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click!
        </button>
        <button onClick={this.resetCounter}>Reset!</button>
        <hr />
      </div>
    );
  }
}
