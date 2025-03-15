import { useState } from 'react'

const styles = {
  container: {
    border: '1px solid white',
    padding: '1em'
  }
}

const Child1 = ({ tech, setTech }) => {
  return (
    <div style={styles.container}>
      <h1>CHILD 1</h1>
      <ul>
        <li>[Prop1] tech: {tech}</li>
        <li>[Prop2] setTech(func)</li>
      </ul>
      <button
        onClick={() => setTech('Node')}
      >Update tech</button>
    </div>
  )
}

export default Child1