import React from 'react'
import Button from './Button'
import logo from '../assets/logo.png'

const Navbar = ({onAuth}) => {
  return (
    <nav className='navbar'>
        <a href='/'><img src={logo} alt='logo' /></a>
        <div className='navbar--info'>
            {!onAuth && <a href='/login'><Button text='Logout' /></a>}
        </div>
    </nav>
  )
}

export default Navbar