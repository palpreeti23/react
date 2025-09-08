import { useState } from "react"

function App() {
  const [Color, setColor] = useState('black')

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: Color }} >

        <div className="fixed bottom-20 flex flex-wrap justify-center inset-x-0 text-white">
          <div className="bg-white rounded-3xl py-2 px-3 flex flex-wrap items-center">

            <button onClick={()=>setColor("red")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "red" }}>Red</button>

            <button onClick={()=>setColor("green")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "green" }}>Green</button>

            <button onClick={()=>setColor("blue")}
             className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button onClick={()=>setColor("olive")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "olive" }}>Olive</button>

            <button onClick={()=>setColor("purple")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "purple" }}>Purple</button>

            <button onClick={()=>setColor("teal")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "teal" }}>Teal</button>

             <button onClick={()=>setColor("yellow")}
             className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "yellow" }}>Yellow</button>

            
             <button onClick={()=>setColor("pink")}
             className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "pink" }}>Pink</button>

            
             <button onClick={()=>setColor("cyan")}
             className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "cyan" }}>Cyan</button>


            <button onClick={()=>setColor("violet")}
            className="py-1 px-3 rounded-2xl font-semibold mx-2"
              style={{ backgroundColor: "violet" }}>Violet</button>
              
          </div>
        </div>

      </div>

    </>
  )
}

export default App
