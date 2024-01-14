import React, {useState} from 'react'
import Button from '../components/Button'

const AuthPage = ({isLogin, setOnAuth}) => {

  setOnAuth(true);

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(user)
  }

  return (
    <div className='auth-container'>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <input type="password" placeholder='Password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
        <Button text={isLogin ? "Login" : "Register"} />
      </form>
      <p className='alt-auth-option'>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a href={isLogin ? "/register" : "/login"}>{isLogin ? "Register" : "Login"}</a>
      </p>
    </div>
  )
}

export default AuthPage