import { useState } from 'react'

import Child1 from './Child1'
import Child2 from './Child2'

const styles = {
  container: {
    border: '1px solid white',
    padding: '1em'
  },
  childContainer: {
    display: 'flex'
  }
}

const Parent = () => {
  const [tech, setTech] = useState('React')

  return (
    <div style={styles.container}>
      <h1>PARENT</h1>
      <ul>
        <li>[State1] tech: {tech}</li>
      </ul>
      
      <div style={styles.childContainer}>
        <Child1 tech={tech} setTech={setTech} />
        <Child2 tech={tech} />
      </div>
    </div>
  )
}

export default Parent

/*
  # "Lifting the state up"
    - RULE: Unidirectional data flow is allowed in React (Parent component -> Child component in the form of props!)
    - Problem statement:
      1. Whenever child component's state needs to be accessed by the parent component 
      - Solution: Child component's state needs to be "lifted up" to the parent component that needs access to it, and then passed as prop to the same child component
        - State handler can also be passed as a prop, only if the child component wants to update this state
      2. Whenever child component's state needs to be accessed by sibling component
      - Solution: Child component's state needs to be "lifted up" to the "common parent" component and then passed as prop to the same child component and the sibling child component that needs access to it
        - State handler can also be passed as a prop, only if the child components wants to update this state
*/