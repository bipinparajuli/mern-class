import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
const [state,setState] = useState(true) //declaring state
const [arr,setarr] = useState([])

function handleChange(event){ // function to update current state
  // console.log(event.target.value)
  setState(event.target.value)
  // setState(false)
 

  // setTimeout(()=>{
  //   setState(true)

  // },3000)
}

function add(){
  setarr([...arr,state])
}
// arr = ["hello","hi"]
return (
    <div className="App">
      {/* <input  */}
      {/* onChange={handleChange} */}
      {/* /> */}
      {/* <h6>I'm {state}</h6> */}
      {/* {state?<button onClick={handleChange} >Login</button>:<button>Loading . . .</button>} */}
    <input
    
    />
    <button >Add</button>
    {arr.map(data=>(
      <>
      <p>{data}</p>
      </>
    ))}
    </div>
  );
}

export default App;
