import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import{ Home } from './components/Home'
import{ Sobre } from './components/Sobre'


function App() {
  const [num, setNum] = useState(0)
  useEffect (() => {
    console.log("O conteudo da pagina foi alterado")
    console.log(`o novo estado é ${num}`)
  },[num])


  return (
    <>
 
      
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/sobre' element={<Sobre/>}> </Route>
      </Routes>
      </BrowserRouter>
    
      <div className="card">
        <button onClick={() => setNum((num) => num + 1)}>
          clique aqui <h1>{num}</h1>
        </button>
      </div>
      

    </>

    
  )
}

export default App
