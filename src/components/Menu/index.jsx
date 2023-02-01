import React from 'react'
import { Link } from 'react-router-dom';
import './menu.scss';
import Hamburger from '../Hamburger';
import { motion } from 'framer-motion';

const Menu = ({isOpen, setIsOpen}) => {
  return (
    <>
      <nav className='nav-small'>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        { isOpen &&
        <motion.div 
          animate={{y: [-200, 0]}}
          className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about-us">About Us</Link>
         </motion.div>
        }
      </nav>
      <nav className='nav-normal'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </>
  )
}

export default Menu;