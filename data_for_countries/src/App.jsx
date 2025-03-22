import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <form>
              <div>
                  Find countries <input/>
              </div>
          </form>
      </div>
  )
}

export default App
