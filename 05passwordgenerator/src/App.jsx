
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '1234567890';
    if (character) str += '~!@#$%^&*(){}[]+_=?/|'

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])



  const copyFromClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password]
  )


  return (
    <>
     
        <div className='fixed mt-20 flex place-content-center inset-x-0 '>
          <div className='w-[50%] h-auto bg-gray-700 px-3 py-2 rounded-lg '>
            <h2 className='text-center text-2xl font-semibold mb-2 text-white'>Password Generator</h2>
            <div className='flex'>
              <input
                type="text"
                value={password}
                placeholder='Password....'
                readOnly
                ref={passwordRef}
                className='w-[85%] h-10 bg-gray-300 text-orange-500 font-medium rounded-l-lg px-6 text-lg ml-2 outline-none selection:text-orange-500 selection:bg-blue-300'
              />
              <button
                onClick={copyFromClipboard}
                className='bg-blue-700 px-4 h-10 rounded-r-lg text-lg text-white font-medium text-center focus:outline-2 focus:outline-orange-500 focus:bg-blue-800 hover:bg-blue-500 shrink-0'
              >copy</button>
            </div>

            <div className='flex flex-wrap mt-5 mb-2 mx-1 '>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
                className="w-30 ml-2 accent-blue-600 mr-1"

              />
              <label className='font-medium text-orange-500 mr-2'>Length ({length})</label>

              <input
                type="checkbox"
                id='numberInput'
                defaultChecked={number}
                className=' accent-blue-600'
                onChange={() => { setNumber((prev) => !prev) }}
              />
              <label htmlFor="numberInput"
                className='font-medium text-orange-500 mx-2'>Numbers</label>

              <input
                type="checkbox"
                id='characterInput'
                defaultChecked={character}
                className=' accent-blue-600'
                onChange={() => { setCharacter((prev) => !prev) }}
              />
              <label htmlFor="characterInput"
                className='font-medium text-orange-500 mx-2'>Characters</label>
            </div>

          </div>
        </div>
    </>
  )
}

export default App
