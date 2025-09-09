import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen'>
        <div className='fixed mt-20 flex place-content-center text-white inset-x-0'>
          <div className='w-[50%] h-auto bg-gray-700 px-3 py-2 rounded-lg'>
            <h2 className='text-center text-2xl font-semibold mb-2'>Password Generator</h2>
            <input
              type="text"
              placeholder='Password....'
              className='w-[85%] h-10 bg-gray-300 text-black rounded-l-lg px-6 text-lg ml-2'
            />
            <button 
            className='bg-blue-700 px-4 h-10 rounded-r-lg text-lg font-medium text-center focus:outline-2 focus:outline-orange-500 focus:bg-blue-800 hover:bg-blue-500'
            >copy</button>
            <div className='flex mt-5 mb-2 mx-1 '>
              <input 
              type="Range"
              className="w-30 ml-2 accent-blue-600 mr-1"
               />
               <label className='font-medium text-orange-500 mr-2'>Length({length})</label>

               <input 
               type="checkbox" 
               className=' accent-blue-600'
               />
               <label className='font-medium text-orange-500 mx-2'>Numbers</label>

               <input 
               type="checkbox" 
               className=' accent-blue-600'
               />
               <label className='font-medium text-orange-500 mx-2'>Characters</label>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
