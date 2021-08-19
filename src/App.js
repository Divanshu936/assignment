import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Child from './Child';


function App() {
   const[color,setColor]=useState("red")
   const[status,setStatus]=useState(null)
   function change(){
     setColor("green")
     setStatus("Button Clicked")
   }
  return (
    <div className="app">
     <div className ="app__content">
    <h1>Hello</h1>
    <h1> Hello Hello </h1>
    <h1> Hello  Hello  Hello</h1>
    <h1>Hello  Hello  Hello  Hello</h1>
     </div>
     <div className="app__children">
    <Child data={color} />
    <button onClick={change}>PRESS</button>
    <h1>{status}</h1>
    </div>
    </div>
  );
}

export default App;
