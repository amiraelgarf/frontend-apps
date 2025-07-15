import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px' }}>
      <h1>React App</h1>
      <p>
        This is a standard HTML button:{' '}
        <button onClick={() => console.log('Standard button click')}>Click Me</button>
      </p>
      <hr />
      <p>
        This is your custom Stencil button wrapped for React:
        <my-button label="Outline Button" variant="outline" size="small" />
      </p>
      <hr />
    </div>
    
  )
}

export default App
