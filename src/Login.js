import React, { useState}  from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth 
            .signInWithEmailAndPassword(email, password)
            .auth(auth => {
                history.push('/')
             })
             .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserwithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        // do some fancy firebase register shitttt....
    }

  return (
    <div className="login">
        <Link to='/'>
        <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit'   onClick={signIn}className='login_signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            </p>
        

        <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
    </div>
    </div>
  )
}

export default Login