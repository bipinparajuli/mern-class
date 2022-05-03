import React,{useState} from 'react'

const Login = () => {

  const [state,setState] = useState({
    email:"",
    password:""
  })

  const {email,password} = state

  function handleSubmit(){
console.log(email,password);
// alert("Your Email" + email)
// alert("Your Password" + password)

if(password.length>10){
  alert("Success")
}else{
  alert("fail")
}



  }


  return (
    <div>
        {/* <form> */}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    
    type="email"
     class="form-control"
      id="exampleInputEmail1"
       aria-describedby="emailHelp"
       onChange={(e)=>setState({email:e.target.value})}

       />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
    type="password"
     class="form-control"
      id="exampleInputPassword1"
      onChange={(e)=>setState({password:e.target.value})}
      
      />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
{/* </form> */}
    </div>
  )
}

export default Login