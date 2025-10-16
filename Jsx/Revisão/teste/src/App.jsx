import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

// Props
function Human({nome, sobrenome, idade}){
  return(
  <>
    <h1>Nome: {nome}</h1>
    <h1>Sobrenome: {sobrenome}</h1>
    <h1>Idade: {idade}</h1>
  </>  
  )
}


function App() {
  const [count, setCount] = useState(0) 
  const [text, setText] = useState("") 

  const [IsShow, setIsShow] = useState(true) 

  useEffect(() => {
    console.log(text)
  },[text])


  return (
    <>
  <button onClick={() => setCount(count + 1)}> + </button>
  {count}
  <button onClick={() => setCount(count - 1)}> - </button>
    <br />
  <input type="text" onChange={(e) => setText(e.target.value)} />
  <h1>{text}</h1>

    <br/>
 
    <button onClick={() => setIsShow(!IsShow)}>Disappear</button>
    {IsShow &&
      <div style={{backgroundColor:  'purple', width:'100px' , height:'100px'}}> </div>

    }

    {/* PROPS */}
    <Human nome="HeloLinda" sobrenome="FazChinello" idade="17"/>
    
    </>
  )
}

export default App
