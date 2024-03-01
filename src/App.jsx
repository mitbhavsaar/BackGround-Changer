import React from 'react'
import './index.css'
import { useState } from 'react'

function App() {
  let [color,setcolor]=useState("white")
return (
    <>
    <div className=' w-screen h-screen duration-200'
    style={{background:color}}>

      <div className='fixed flex flex-wrap justify-center  inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setcolor("red")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}>red</button>

<button onClick={()=>setcolor("green")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}>green</button>

<button onClick={()=>setcolor("blue")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}>blue</button>

<button onClick={()=>setcolor("olive")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"olive"}}>olive</button>

<button onClick={()=>setcolor("gray")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"gray"}}>gray</button>

<button onClick={()=>setcolor("yellow")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"yellow"}}>yellow</button>

<button onClick={()=>setcolor("pink")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}>pink</button>

<button onClick={()=>setcolor("purple")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"purple"}}>purple</button>

<button onClick={()=>setcolor("violet")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"violet"}}>violet</button>

<button onClick={()=>setcolor("brown")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"brown"}}>brown</button>

<button onClick={()=>setcolor("black")}
            className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}>black</button>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default App


