import { useState } from 'react'

import './App.css'

// import { PurpleSquare } from "./Components/purpleSquare";
// import { YellowSquare } from "./Components/yellowSquare";
// import { BlackSquare } from "./Components/blackSquare";

import { Square } from './Components/Square';

const App = () => {
  return (
    <>
    <div className='body'>
      {/* <PurpleSquare />
      <YellowSquare />
      <BlackSquare /> */}

      <Square cor="pink"/>
    </div>
    </>
  )
}


export default App
