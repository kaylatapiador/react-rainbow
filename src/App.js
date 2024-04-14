import './App.css';
import React, {useState} from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm.js';

function App() {

  const addColor = (newColor) => {
    setColors([...colors,newColor])
  }

  let [colors,setColors] = useState (['violet', 'blue', 'lightblue','green', 'greenyellow','yellow','red', 'orange' ])

  let colorMap = colors.map((color,i) => {
    return(
      <ColorBlock key = {i} color = {color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  )
}

export default App;
