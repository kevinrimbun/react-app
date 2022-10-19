import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/component/navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
        <ul className='menu-navbar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/life-cycle">Life Cycle</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar