import React from 'react'
import './Card.css'
import Image from './Image'
const Card = (props) => {

  const styles ={
    color:"red"
  }

  return (
    <div class="card" style={{width:"18rem",margin:"50px"}}>
    <Image
    imgUrl = {props.imgUrl}
    />
    <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.des}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card