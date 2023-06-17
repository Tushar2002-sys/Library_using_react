import React, { useEffect, useState } from "react"
import axios from "axios"
import './Login.css';
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/book",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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
      <form action="/login" method="POST">
      <div class="container" id="box">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="login-container">
              <h2>Login</h2>
              <form>
                <div class="form-group">
                  <label for="username">Username</label><br></br> <br></br>
                  <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label><br></br><br></br>
                  <input type="password"class="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
            
                </div>
                <input type="submit" id="btn" onClick={submit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
    )
}

export default Login