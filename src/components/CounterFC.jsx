import { useState } from 'react'

const CounterFC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 5)}>-5</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
    </div>
  )
}

export default CounterFC












/*
  # State in Functional Component
    - "useState" hook is used to create state in functional components
    - Syntax:
      - Intialize
        const [state, setState] = useState(defaultValue)
        - Example:
          - const [count, setCount] = useState(0)
          - const [firstName, setFirstName] = useState('')
          - const [isGraduated, setIsGraduated] = useState(false)
      - Update
        - setCount(updatedValue)
        - Example:
          - setCount(1)
          - setFirstName('John Doe')
          - setIsGraduated(true)

*/