import React,{useState} from 'react'

import {connect} from 'react-redux'
import {addTodo} from '../action/todo'

const TodoForm = ({addTodo}) => {

  const [state,setState] = useState("")

  const handleSubmit = () => {
  
    addTodo(state)

    setState("")
    
  }


  return (
    <div>
        <input
        value={state}
          onChange={(e=>setState(e.target.value))}      
        />
        <button
        onClick={handleSubmit}
        >Add</button>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addTodo:(todo) => {
    dispatch(addTodo(todo))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)