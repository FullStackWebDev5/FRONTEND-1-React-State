import { useState } from 'react'

const styles = {
  container: {
    border: '1px solid white',
    padding: '1em',
  },
  childContainer: {
    display: 'flex'
  }
}

const Parent = () => {
  const [tech, setTech] = useState('React')

  return (
    <div style={styles.container}>
      <h3>Parent</h3>
      <div style={styles.childContainer}>
        <Child1 tech={tech} />
        <Child2 />
      </div>
    </div>
  )
}

const Child1 = ({ tech }) => {
  return (
    <div style={styles.container}>
      <h3>Child1</h3>
      <div style={styles.childContainer}>
        <GrandChild1 tech={tech} />
        <GrandChild2 />
      </div>
    </div>
  )
}

const Child2 = () => {
  return (
    <div style={styles.container}>
      <h3>Child2</h3>
    </div>
  )
}

const GrandChild1 = ({ tech }) => {
  return (
    <div style={styles.container}>
      <h3>GrandChild1</h3>
    </div>
  )
}

const GrandChild2 = () => {
  return (
    <div style={styles.container}>
      <h3>GrandChild2</h3>
    </div>
  )
}

export default Parent

/*
  # Props drilling:
    - If a descendant component requires access to a state from the ancestor component, the state needs to be drilled down as prop throw each component which comes in the path towards the descendant component

  # Furture:
    - To not have problems like "lifting the state up" and "props drilling", it is recommended to use Redux/Context API for complex applications
*/