import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button 
          onClick={() => this.setState({ count: this.state.count - 5 }) }
        >
          -5
        </button>
        <button 
          onClick={() => this.setState({ count: this.state.count - 1 }) }
        >
          -1
        </button>
        <button 
          onClick={() => this.setState({ count: this.state.count + 1 }) }
        >
          +1
        </button>
        <button 
          onClick={() => this.setState({ count: this.state.count + 5 }) }
        >
          +5
        </button>
      </div>
    )
  }
}

export default Counter


/*
  # State
    - Component's own data (A data which belongs to the component)
    - Whenever the state of the component changes, the component automatically re-renders
      - State updates should be done using setState() only
      - If state updates are done directly, this is not detected by React and hence the component won't re-render automatically
    - Syntax:
      - Intialize (Inside the constructor)
        this.state = {
          count: 0
        }
      - Update
        - this.setState({ count: 1 })

*/