import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
const [state,setState] = useState("") //declaring state
const [arr,setarr] = useState([])

function handleChange(event){ // function to update current state
  // console.log(event.target.value)
  setState(event.target.value)
  // setState(false)
 

  // setTimeout(()=>{
  //   setState(true)

  // },3000)
}

function handleClick(){
  // console.log(arr);
  // setarr([...arr,state])
  // setState("Hello")

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setState(json))
}

// useEffect(()=>{
//   console.log("HII")
// })

// useEffect(()=>{
//   console.log("HELLO")
// },[])

useEffect(()=>{
  console.log("I AM STATE",state)
},[state])




function add(){
  // setarr([...arr,state])
}
// arr = ["hello","hi"]
return (
    <div className="App">

      
      {/* <input  */}
      {/* onChange={handleChange} */}
      {/* /> */}
      {/* <h6>I'm {state}</h6> */}
      {/* {state?<button onClick={handleChange} >Login</button>:<button>Loading . . .</button>} */}
      {/* <h1>{state.title}</h1> */}

    {/* <input
      // value={state}
    onChange={(event)=>{
      // setState(event.target.value)
    }}

    /> */}
    {/* <button onClick={handleClick} >Add</button>
    {arr.map((data,i)=>(
      <div key={i}>
      <p>{data}</p><button>Delete</button>
      </div>
    ))} */}
    </div>
  );
}

export default App;
