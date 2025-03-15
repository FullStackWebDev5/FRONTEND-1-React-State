const styles = {
  container: {
    border: '1px solid white',
    padding: '1em'
  }
}

const Child2 = ({ tech }) => {
  return (
    <div style={styles.container}>
      <h1>CHILD 2</h1>
      <ul>
        <li>[Prop1] tech: {tech}</li>
      </ul>
    </div>
  )
}

export default Child2