import React from 'react'
import {AiOutlineHome , AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left'>
            <div>
                    <AiOutlineHome size={15} />
                    <p>Simalchaur, Pokhara,Nepal</p>
                </div>
                <div>
                    <BsTelephone size={15} />
                    <p>+9779866317885</p>
                </div>
                <div>
                    <MdOutlineMarkEmailRead size={15} />
                    <p>paudelbishwas885@gmail.com</p>
                </div>
            </div>
            <div className='footer-right'>
                <div className='footer-icon'>
                  <a href='https://github.com/Bishwas-paudel' target="_blank" rel='noreferrer' ><AiFillGithub size={45}  /></a>  
                </div>
               <div  className='footer-icon'>
                 <a href='https://www.linkedin.com/in/bishwas-paudel/' target="_blank" rel='noreferrer'  >
                    <AiFillLinkedin size={45}    />
                 </a>
               </div>
                <div className='footer-icon'>
                    <a href='https://www.facebook.com/paudel.bishwas885' target="_blank" rel='noreferrer'  >
                        <BsFacebook size={45}   />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer