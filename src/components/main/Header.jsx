import React from 'react' 
import Logo_Image from '../../assets/Logo_Image.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to='/' className="header-left-brand">
            <img src={Logo_Image} alt=""/>
            <h2>Awaas Vishwa</h2>
          </Link>
        <div className="header-right">
          <div className="header-right-login">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header
