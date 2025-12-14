import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const colors=["Red","Green","Black","Yellow","Purple"];

  const handleColor=(color)=>{
    setBackgroundColor(color);
  }

  return (
    <div  style={{backgroundColor:backgroundColor}}> 
    <h1>Color Picker</h1>
      <div className='color-number'>
           {colors.map((color,index)=>(
            <div
            key={index}
            className='color-box'
            style={{backgroundColor:color}}
            onClick={()=>handleColor(color)}
            ></div>
           ))}
      </div>
      <div className='coustom-colo-picker' style={{backgroundColor:backgroundColor}}>
        <input
        type='color'
        value={backgroundColor}
        onChange={(e)=>handleColor(e.target.value)}
        ></input>
      </div>
    </div>
  )
}

export default App
