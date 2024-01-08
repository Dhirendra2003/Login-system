import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){
  const nav=useNavigate();
const [mail, setMail]=useState();
const [pass, setPass]=useState();
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:5000/login',{ mail, pass})
  .then(result=>{console.log(result)
  if(result.data==="success"){
    nav('/home');
  }
  else{
          window.alert('wrong password');
      }
  })
  .catch(err=>console.log(err))
}

  return  <div className="d-flex justify-content-center  " id="form">
    <div className="bg-white p-5  w-25 align-middle align-items-centre my-auto border border-success rounded shadow-lg" id="innerForm" >
      <h2 className="mb-5">Login</h2>
      <form onSubmit={handleSubmit} >
        
        <div className="mb-3">
          <label htmlFor="email">
            <strong>E-mail</strong>
          </label>
          <input type="email"
          placeholder="enter name"
          autoCapitalize="Off"
          name="email"
          className="form-control rounded-0"
          onChange={(e)=>setMail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input type="password" 
          placeholder="password"
          name="password"
          className="form-control rounded-0"
          onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100 rounded-0 text-decoration-none">Login</button>
        </form>
        <p className="mt-4">Haven`t registerd?</p>
        <Link to='/register' type="submit" className="btn btn-outline-secondary w-100 rounded-0">Register</Link>
      
    </div>
  </div>
    }
  
  
  export default Login;