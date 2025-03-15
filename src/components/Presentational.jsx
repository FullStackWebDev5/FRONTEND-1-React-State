import { useState } from 'react'

const Parent = () => {
  return (
    <div>
      <Container />
      <Presentational />
    </div>
  )
}

const Container = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Container</h1>
      <p>{count}</p>
    </div>
  )
}

const Presentational = () => {
  return (
    <div>
      <h1>Presentation</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, harum?</p>
    </div>
  )
}

export default Parent

/*
  # Components can be classified based on task they perform -
    - Container components: Component which has states and/or props for logic building, along with that it also return JSX
    - Presentational components (stateless): Component which just returns JSX

    - History:
      - In older versions of react, functional components were opted for presentational purposes because we could not create states in functional components. Class based components were used for container components.
*/