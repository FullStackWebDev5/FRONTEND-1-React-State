import './App.css'
// import WildAnimals from './components/WildAnimals'
// import DomesticAnimals from './components/DomesticAnimals'
// import Counter from './components/Counter'
// import SocialMedia from './components/SocialMedia'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <TodoList />
      {/* <SocialMedia /> */}
      {/* <Counter /> */}
      {/* <h1>Animals</h1>
      <WildAnimals />
      <DomesticAnimals /> */}
    </>
  )
}

export default App

/*
  # Components: 
    - Building block of UI
    - Small and re-usable chunk of code
    - Return JSX
    - Features:
      - Can be nested
      - Can be re-used
    - Types of components
      - Class components: 
        - Component is created using a class which return JSX
        - Some legacy applications still use class components, new application who prefer classes over functions use this
        - In the previous versions of React, "states" could only be created in a class component
      - Functional components: 
        - Component is created using a function which return JSX
        - In the latest versions of React, states can also be created in functional components (using Hooks)

    - Functional components preferred over class components:
      - Class components have a relatively more code to perform the same task in comparison to functional components
        - A lot of 'this' keyword overhead in class components
        - Functional components are more readable and maintainable
      - Functional components have slightly better performance
      - After the introduction of "hooks", functional components could also maintain states, which added to the advantages of functional components

    # Part 2:
      - States with Functional Components
      - Asynchronous nature of setState method
*/
