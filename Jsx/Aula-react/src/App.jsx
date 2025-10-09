import { useState } from 'react'

import './App.css'

import { PurpleSquare } from "./Components/purpleSquare";
import { YellowSquare } from "./Components/yellowSquare";
import { BlackSquare } from "./Components/blackSquare";

import { Square } from './Components/Square';

const App = () => {
  
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")  
  return (
  <>
    <div className='body'>
      <div className='quadrados'>

        <PurpleSquare />
        <YellowSquare />
        <BlackSquare /> 

        <Square cor="pink"/>  
      </div>
        
      <div className='metodos'>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
        <h1>{texto}</h1>
      </div>    

    </div>
  </>     
  )
}


export default App
