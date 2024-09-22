import React from 'react'
import { useAuth0} from "@auth0/auth0-react";
import "./login.css"
function Login() {
  const {loginWithRedirect, user, isAuthenticated,logout} = useAuth0()
   console.log("current user", user);
   
  return (
    <>
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
      {isAuthenticated && <p className='username' >Hello {user.nickname}</p> }
      {
        isAuthenticated ? <button className='loginbtn2' onClick={(log)=>logout()}> <span>Logout</span></button>
        : <button className='loginbtn' onClick={(log)=> loginWithRedirect()}> <span>Login</span></button>
      }
      </div>
    </div>
      
    </div>
    </>
  )
}

export default Login
