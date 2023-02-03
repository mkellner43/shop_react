import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hamburger.scss'

const Hamburger = ({isOpen, setIsOpen}) => {
  const ham = useRef(null)

  useEffect(() => {
    const closeNav = e => {
      if(!ham.current.contains(e.target)) return setIsOpen(false)
    }
    document.body.addEventListener('click', closeNav)
    return () => document.removeEventListener('click', closeNav)
  }, [])
  
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      stroke: '#fff',
      translateY: 0,
    },
    opened: {
      rotate: 45,
      stroke: '#FF0000',
      translateY: 10,
    }
  };
  
  const center = {
    closed: {
      opacity: 1,
      stroke: '#fff',
    },
    opened: {
      opacity: 0,
      stroke: '#FF0000',
    }
  };

  const bottom = {
    closed: {
      rotate: 0,
      stroke: '#fff',
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -10,
      stroke: '#FF0000',
    }
  };

  const lineProps = {
    strokeWidth: '4px',
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 20
    },
    strokeLinecap: "round"
  };

  return (
    <div className='hamburger-container' style={{zIndex: '1000'}} ref={ham} onClick={() => setIsOpen(prevState => !prevState)} onBlur={() => setIsOpen(false)}>
    <motion.svg
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.90}}
      viewBox='0 0 50 50'
      overflow="visible"
      preserveAspectRatio="none"
      width='60'
      height='60'
      onBlur={() => setIsOpen(false)}
      >
      <div className='background'></div>
      <motion.line
        x1="10"
        x2='40'
        y1="12.6"
        y2="12.6"
        variants={top}
        {...lineProps}
        onBlur={() => setIsOpen(false)}
        />
      <motion.line
        x1="10"
        x2='40'
        y1="22.6"
        y2="22.6"
        variants={center}
        {...lineProps}
        onBlur={() => setIsOpen(false)}
        />
      <motion.line
        x1="10"
        x2='40'
        y1="32.6"
        y2="32.6"
        variants={bottom}
        {...lineProps}
        onBlur={() => setIsOpen(false)}
        />
    </motion.svg>
    </div>
  )
}

export default Hamburger;