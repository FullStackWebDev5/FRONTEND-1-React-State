import { useState } from 'react'

const CounterFC2 = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const increment5 = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={increment5}>+5</button>
    </div>
  )
}

export default CounterFC2

/*
  # Asynchronous nature of setState method
    - In scenarios where multiple setState methods are used one after another, setState method might not give the desired result if there is a dependency on the updated values
    - Solution: Use a callback within the setState method, which has access to the previous updated state
    - Syntax:
      setCount((prevCount) => prevCount + 1)

    // Example:
      setCount((prevCount) => { 
        return prevCount + 1 
      })
      setCount((prevCount) => { 
        return prevCount + 1 
      })
      setCount((prevCount) => { 
        return prevCount + 1 
      })
      setCount((prevCount) => { 
        return prevCount + 1 
      })
      setCount((prevCount) => { 
        return prevCount + 1 
      })

      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
*/