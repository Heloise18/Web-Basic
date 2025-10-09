import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css'
import { User } from './Pages/User'
import { Home } from './Pages/Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <nav>
        <Link to={'/'}> Home</Link>
     </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/User/:id' element={<User/>}></Route>

      </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
