import React from 'react'

import {connect} from 'react-redux'

const MyTodos = ({todo}) => {

  console.log(todo);

  return (
    <>
    <div>MyTodos</div>

    {todo.length == 0 ? <p>Your todo is empty</p> :todo.map((data,i)=>{
      return<h2 key={i} >{data}</h2>
    })}
    </>

  )
}


const mapStateToProps = (state) => ({
  todo:state.todo
})

const mapDispatchToProps = (dispatch) => ({
  // addTodo:(todo) => {
  //   dispatch(addTodo(todo))
  // }
})

export default connect(mapStateToProps,mapDispatchToProps)(MyTodos)