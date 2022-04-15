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

let arr =       [{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},

{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{name:"something",img:"http://jpt.png",price:"Some quick example text to build on the card title and make up the bulk of the card's content."},





// "Product A","Product B","Product C","Product D"
]

function handleClick(a){
  console.log(a);
}

  return (
    <div
    // className='container'
    >
      <Nab />
      {/* <Nab />
      <Image />
      {/* <Card 
      name="Santosh" 
      age="26"
      /> */}
      {/* <input
      type="email"
      onChange={(event=>console.log(event.target.value))}
      />  */}

      {/* <button onClick={(e)=>console.log("I'm Clicked")} >Click me</button> */}

    <div 
    style={{display:"flex",flexWrap:"wrap"}}
    >
      
{        
    //   [{name:"something",img:"http://jpt.png",price:120},{name:"something",img:"http://jpt.png",price:120},
    //   // "Product A","Product B","Product C","Product D"
    // ]
   
    arr.map((i)=>{

        let a = "sometjomg"
        console.log(i);

        return(
          
             <Card 
      name={i.name} 
      des={i.price}
      />
        // {/* <button onClick={(e)=>handleClick(i.name)} >Click me</button> hanling click event with passing parameters */}

        //     {/* <h1 style={{color:"red"}} >{i.name}</h1> */}
        //     {/* <p style={{backgroundColor:"cyan"}} >{i.price}</p> */}
        )
      }
        )

}
</div>

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
