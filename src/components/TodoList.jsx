import { Component } from 'react'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'Revise HTML Tables',
        'Revise CSS Position',
        'Revise JavaScript Closures'
      ],
      newTodo: ''
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <h1>Todos</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input 
          type="text" 
          placeholder="Add new todo..." 
          value={this.state.newTodo}
          onInput={(e) => this.setState({ newTodo: e.target.value} )}
        />
        <button
          onClick={() => this.setState({ todos: [...this.state.todos, this.state.newTodo]})}
        >
          Add todo
        </button>
      </div>
    )
  }
}

export default TodoList