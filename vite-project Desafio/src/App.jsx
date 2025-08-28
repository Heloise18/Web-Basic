import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sumir, setSumir] = useState(false)

  return (
    <>
      <div>
      <button onClick={() => setSumir((sumir) => !sumir)}>
        ziumm
      </button>
      {
        sumir == false ?  null : <h1>Ziummw</h1> 

      }


      </div>

    </>
  )
}

export default App
