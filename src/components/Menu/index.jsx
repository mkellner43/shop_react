import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import Hamburger from '../Hamburger';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({isOpen, setIsOpen}) => {
  return (
    <>
      <nav className='nav-small'>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
        <AnimatePresence>
        { isOpen &&
          <motion.div
            initial={{y: -200}}
            animate={{y: 0, transition: {duration: 0.5}}}
            exit={{y: -200, transition: {duration: 0.5}}}
            className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about-us">About Us</Link>
          </motion.div>
        }
        </AnimatePresence>
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