import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-blue-500 text-5xl h-screen flex justify-center items-center'>Teste</h1>*/}
      {/* <div className='flex justify-center items-center h-screen'> 
        <div className='w-52 h-52 bg-cyan-200'></div>
        <h1>Hello world</h1>
      </div> */}

      <div className='h-screen p-2.5'>
        
        <div className='h-1/3 flex justify-between'>
          <div className='h-50 w-50 bg-emerald-700 '>
      
            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

            <div className='h-1/3 flex justify-center items-end'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>
          </div>

          <div className='h-50 w-50 bg-emerald-700'>
            
            <div className='h-1/3 '></div>

            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

          </div>

          <div className='h-50 w-50 bg-emerald-700'>
            
            <div className='h-1/3 '>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3 '></div>

            <div className='h-1/3 flex items-end justify-end'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

          </div>

          <div className='h-50 w-50 bg-emerald-700'>

            <div className='h-1/3 '></div>

            <div className='h-1/3 '></div>

            <div className='h-1/3 flex items-end justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

          </div>

        </div>

        <div className='h-1/3 flex justify-between'>
          <div className='h-50 w-50 bg-emerald-700'>

            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

            <div className='h-1/3 '></div>

          </div>

          <div className='h-50 w-50 bg-emerald-700'>
            
            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3 flex justify-between'>
              <div className='bg-indigo-300 h-15 w-15'></div>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3 flex items-end justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

          </div>

          <div className='h-50 w-50 bg-emerald-700'>
            
            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

            <div className='h-1/3'></div>

          </div>
        
        </div> 

        <div className='h-1/3 flex justify-between'>
          
          <div className='h-50 w-50 bg-emerald-700'>

            <div className='h-1/3 flex justify-end'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

            <div className='h-1/3 flex items-end justify-start'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>


          </div>

          <div className='h-50 w-50 bg-emerald-700'>

            <div className='h-1/3 '></div>

            <div className='h-1/3 flex justify-center'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3 '></div>

          </div>

          <div className='h-50 w-50 bg-emerald-700'>
            
            <div className='h-1/3 flex justify-end'>
              <div className='bg-indigo-300 h-15 w-15'></div>
            </div>

            <div className='h-1/3'></div>

            <div className='h-1/3 '></div>

          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
