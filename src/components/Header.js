import React, { useState } from 'react'
import logo from '../assets/b.png'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {RiDeleteBack2Line} from 'react-icons/ri'
const Header = () => {
  const [bar,setBar]= useState(true);
  const[color,setColor]= useState(false)

  const handleBars = ()=>{
    setBar(!bar)
  }

  const changeColor = ()=>{
    if(window.scrollY >= 150){
      setColor(true)
    }else{setColor(false)}
  }


  window.addEventListener('scroll',changeColor);

  return (
    <div className='header'>
        <div className={color? "container container-bg" : "container"}>
            <div className='logo'>
              <Link to='/' style={{fontFamily:"Dancing Script"}}>
              {/* <img src={logo} alt='logo'  /> */}
              Bishwas Paudel
              </Link> 
            </div>
            <div className={bar ? "nav-links" : "nav-links active"}>
                <Link to="/home" onClick={handleBars}>Home</Link>
                <Link to="/projects" onClick={handleBars} >PROJECTS</Link>
                <Link to="/about" onClick={handleBars}>ABOUT</Link>
                <Link to="/contact" onClick={handleBars}>CONTACT</Link>
            </div>
            <div className='bar-icon ' onClick={handleBars}>
              {bar ? (<FaBars size={25} color='gold'   />) :
               (<RiDeleteBack2Line size={25} color='gold' />)}
              
              
            </div>
        </div>
    </div>
  )
}

export default Header