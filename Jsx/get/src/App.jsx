import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [dog, setDog] = useState({});
  const [cat, setCat] = useState([]);
  
  useEffect(() => {
    getDog();
    getCat();
  },[])

  const getDog =async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDog(response.data);

    const responseCat = await axios.get('https://api.thecatapi.com/v1/images');
    setCat(responseCat.data[0].url);
  }

  return (
    <>
    <div className='container' >
      
        <img src={dog.message} alt="" />
        <button onClick={getDog}>Clique aqui pra um dog</button>
        <button onClick={getCat}>Clique aqui pata um gato</button>

    </div>
    </>
  )
}

export default App
