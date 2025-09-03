import { useEffect, useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  useEffect (() => {
    console.log("O conteudo da pagina foi alterado")
    console.log(`o novo estado é ${num}`)
  },[num])

  return (
    <>
 
      <div className="card">
        <button onClick={() => setNum((num) => num + 1)}>
          clique aqui <h1>{num}</h1>
        </button>
      </div>
      
    </>
  )
}

export default App
