import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">



            <form action="/register" method="POST">
  <div class="container" id="box">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="login-container">
          <h2>SignUp</h2>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        
            </div>
            <input type="submit" id="btn" onClick={submit} />
          </form>
        </div>
      </div>
    </div>
  </div>
</form>

            
        </div>
    )
}

export default Login