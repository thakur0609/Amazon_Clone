import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../config/Firebase"
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"


function Signup() {
  const [emaill, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const registerForm = async (e) => {
    e.preventDefault();
    console.log("Hello")
    navigate("/login")
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emaill,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: fname,
      }).then(() => {

      }).catch((error) => {
        // An error occurred
        // ...
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }


  };

  return (
    <div className='signup'>
      <Link to='/'>
        <img
          className='signup_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon_logo'></img>
      </Link>
      <div className='signup_container'>
        <h1>Sign up</h1>
        <form>
          <h5>First Name: </h5>
          <input type='text' onChange={(e) => setFname(e.target.value)}></input>
          <h5>Last Name: </h5>
          <input type='text' onChange={(e) => setLname(e.target.value)}></input>
          <h5>E-mail: </h5>
          <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
          <h5>Password: </h5>
          <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={registerForm} className='signup_button'>Create Account</button>
        </form>
      </div>
      <p className='para'>Already have an account? <Link to='/login' className='link'>Log in</Link></p>
    </div>
  )
}

export default Signup