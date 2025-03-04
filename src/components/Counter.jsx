import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment5 = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
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

        {/* Asynchronous nature of setState method */}
        <button onClick={this.increment5}>+5</button>
      </div>
    )
  }
}

export default Counter












/*
  # State
    - Component's own data (A data which belongs to the component)
    - Whenever the state of the component changes, the component automatically re-renders
      - State updates should only be done using setState() method
      - If state updates are done directly, this is not detected by React and hence the component won't re-render automatically
    - Syntax:
      - Intialize (Inside the constructor)
        this.state = {
          count: 0
        }
      - Update
        - this.setState({ count: 1 })
    - Additional notes:
      - In older React versions (<16.8), state could only be used in class components
      - In React 16.8, Hooks (special functions) were introduced, states could not be created in functional components as well

  # Asynchronous nature of setState method
    - In scenarios where multiple setState methods are used one after another, setState method might not give the desired result if there is a dependency on the updated values
    - Solution: Use a callback within the setState method, which has access to the previous updated state
    - Syntax:
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        }
      })
      - Single line arrow function
        this.setState((prevState) => ({ count: prevState.count + 1 }))
  
  # Future
    - Hooks
*/