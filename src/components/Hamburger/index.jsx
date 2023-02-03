import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hamburger.scss'

const Hamburger = ({isOpen, setIsOpen}) => {
  const ham = useRef(null)

  useEffect(() => {
    window.addEventListener('click', ev => {
      // console.log(nav.current.contains(ev.target))
      if(ham?.current.contains(ev.target)) {setIsOpen(!isOpen)}
      else {setIsOpen(false)}
    })
  })
  
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
    <div className='hamburger-container' ref={ham}>
    <motion.svg
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.90}}
      viewBox='0 0 50 50'
      overflow="visible"
      preserveAspectRatio="none"
      width='60'
      height='60'
      >
      <div className='background'></div>
      <motion.line
        x1="10"
        x2='40'
        y1="12.6"
        y2="12.6"
        variants={top}
        {...lineProps}
        />
      <motion.line
        x1="10"
        x2='40'
        y1="22.6"
        y2="22.6"
        variants={center}
        {...lineProps}
        />
      <motion.line
        x1="10"
        x2='40'
        y1="32.6"
        y2="32.6"
        variants={bottom}
        {...lineProps}
        />
    </motion.svg>
    </div>
  )
}

export default Hamburger;