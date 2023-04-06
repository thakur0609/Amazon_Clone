import React, { useState } from 'react'
import "./Login.css"
import { Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from 'react-router-dom'

function Login() {
    const [emaill, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    

    const loginForm = async (e) => {
        e.preventDefault();
        navigate("/")
        try {
            const user = await signInWithEmailAndPassword(auth, emaill, password);
            console.log(user)

        } catch (error) {
            console.log(error.message)
        }
    };


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon_logo'></img>
            </Link>
            <div className='login_container'>
                <h1>Log in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={emaill} onChange={(e) => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={loginForm} className='login_Signin'>Login</button>
                </form>
            </div>
            <p className='para'>New to Amazon? <Link to='/signup' className='link'>Create Account</Link></p>
           
        </div>
    )
}

export default Login