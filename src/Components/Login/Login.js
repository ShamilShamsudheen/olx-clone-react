import React, { useContext, useState } from 'react';
import {FirebaseContext} from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault();
    if (!email) {
      alert('Email field is required');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      console.log('success')
      alert('Logged!')
      navigate('/',{state:{message:'login succefull!'}})
    })
    .catch((error)=>{
      console.log('not')
      alert(error.message)
      navigate('/login',{state:{message:'login failed'}})
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="50px" height="50px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
