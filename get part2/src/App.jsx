import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import List from './pages/List'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Profile from './pages/Profile'


function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List></List>}> </Route>
          <Route path='/profile' element={<Profile></Profile>}> </Route>
        </Routes>
      </BrowserRouter>
          

    
    </>
  )
}

export default App
