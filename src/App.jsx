import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button
          onClick={() => setColor("black")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >black</button>

          <button
          onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >pink</button>

          <button
          onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >brown</button>

          <button
          onClick={() => setColor("darkblue")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkblue" }}
          >darkblue</button>

          <button
          onClick={() => setColor("darkred")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkred" }}
          >DarkRed</button>
        </div>
      </div>
    </div>
  )
}

export default App
