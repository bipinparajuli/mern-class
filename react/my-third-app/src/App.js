import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [state,setState] = useState([])

  useEffect(()=>{

    fetch('https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json')
    .then(response => response.json())
    .then(json => {
      setState(json.data)
    })

  },[])




  return (
    <div className="App">
      <h1 style={{textAlign:"center",marginTop:"50px"}} >Popular Movie Website !!!</h1>

    <div className='movie-container'style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
      {
  state.length == 0 ?
   <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : state.map(data=>{
  
      console.log(data);
      
      return(
        <div class="card" style={{width:"18rem",margin:"20px"}}>
        <img src={data.poster} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
          <p class="card-text">{data.description.slice(0,100)}</p>
          <a href={data.url} class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      )
    })  
    
  
}

    </div>

    </div>
  );
}

export default App;
