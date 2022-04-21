import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
const {id} = useParams()
  return (
    <h1>{id}</h1>
  )
}

export default About