import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1>Your may lost Please </h1>
            <button>

            <Link to='/' >Go Back</Link>
            </button>

      </div>
  )
}

export default NotFound