import './App.css';
import Card from './Card';
import Image from './Image';
import Nab from './Nab';
import ButtonComponent from './SecondComponent'

let title = "React Class"

function App() {

  let name = "Santosh";

  function add(a,b){
    return a +b
  }

let a = [1,2,3,4,5].map((value,index)=>{
  console.log(value,index)

  return value + 1
})

console.log(a);

let arr =       [{name:"something",img:"http://jpt.png",price:120},{name:"something",img:"http://jpt.png",price:120},
// "Product A","Product B","Product C","Product D"
]

  return (
    <div
    className='container'
    >
      <Nab />
      <Image />
      
{        
    //   [{name:"something",img:"http://jpt.png",price:120},{name:"something",img:"http://jpt.png",price:120},
    //   // "Product A","Product B","Product C","Product D"
    // ]
    arr.map((i)=>{

        let a = "sometjomg"
        console.log(i);

        return(
          <div>
            <h1>{i.name}</h1>
            <p>{i.price}</p>
            
        </div>
        )
      }
        )
}
      {/* <h1
      className='heading'
      >Hello  {name} !!!  </h1> 

    <ButtonComponent>

    </ButtonComponent>
    
    <ButtonComponent /> */}

      </div>
  );

  // App => SecondComponent => Third component
  
}

export default App;
