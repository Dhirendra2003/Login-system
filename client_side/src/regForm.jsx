import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function RegForm(){
const [name, setName]=useState();
const [mail, setMail]=useState();
const [pass, setPass]=useState();
const nav=useNavigate();

const handleSubmit=(e)=>{
   e.preventDefault();
  axios.post('http://localhost:5000/register',{name , mail, pass})
  .then(result=>{console.log(result);
    nav('/login')
  })
  .catch(err=>console.log(err))
  //console.log("submited form",e)
}

return  <div className="d-flex justify-content-center shadow-sm " id="form">
  <div className="bg-white p-5  w-25 align-middle align-items-centre my-auto border border-success rounded shadow-lg  " id="innerForm">
    <h2 className="mb-5">Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name">
          <strong>Name</strong>
        </label>
        <input type="text"
        placeholder="enter name"
        autoCapitalize="Off"
        name="name"
        className="form-control rounded-0"
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
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
      <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
      </form>
      <p className="mt-4">Already Have an Account</p>
      <Link to='/Login' className="btn btn-outline-secondary w-100 rounded-0 text-decoration-none">Login</Link>
    
  </div>
</div>
  }


export default RegForm;