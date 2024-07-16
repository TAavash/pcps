import React, { Component } from 'react';
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate( prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className='text-center'>
        <h1 className='bg-blue-950 text-white text-lg text-center p-2 '>Count: {this.state.count}</h1>
        <button className='bg-orange-500 text-white text-md p-2 m-4 rounded-lg px-3' onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default LifecycleComponent;