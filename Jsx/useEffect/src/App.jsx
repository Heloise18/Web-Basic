import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import{ Home } from './Pages/Home'
import{ Sobre } from './Pages/Sobre'
import { Profile } from './Pages/profile'
import { UserList } from './Pages/UserList'

function App() {
  // const [num, setNum] = useState(0)
  // useEffect (() => {
  //   console.log("O conteudo da pagina foi alterado")
  //   console.log(`o novo estado é ${num}`)
  // },[num])


  return (
    <>
      
      <BrowserRouter>
      <nav>            
        <Link to={'/'}>Home </Link> 
        <Link to={'/sobre'}>Sobre </Link> 

      </nav>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/sobre' element={<Sobre/>}> </Route>
        <Route path='/userlist/:id' element={<Profile />}> </Route>
        <Route path='/userlist' element={<UserList/>}> </Route>
      </Routes>
      </BrowserRouter>
    
    </>

    
  )
}

export default App


      // {/* <div className="card">
      //   <button onClick={() => setNum((num) => num + 1)}>
      //     clique aqui <h1>{num}</h1>
      //   </button>
      // </div>
      //  */}