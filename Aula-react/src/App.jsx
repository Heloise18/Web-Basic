import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './Components/HelloWorld'
import { InputHelo } from './Components/InputHelo'
import { purpleSquare } from './Components/purpleSquare'
import { yellowSquare } from './Components/yellowSquare'
import { blackSquare } from './Components/blackSquare'


const App = () => {
  return (
    <>
    <HelloWorld />
    <InputHelo/>
    <purpleSquare/>
    <blackSquare/>
    <yellowSquare />


    </>
  )
}


export default App
