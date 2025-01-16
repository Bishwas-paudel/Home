import React from 'react'
import Slide from 'react-reveal/Slide';
const Heroimg = ({image,heading,title}) => {
  return (
    <div className='hero'>
      <div className='hero-img'>
        <img className='photo' src={image} alt='home-img' />
      </div>
      <Slide right cascade>
      <div className='content'>
     
      
     <p>
       {heading}
     
       </p>
     
     <h1>
    
             {title}
       
       </h1>
   
   
   
   </div>

      </Slide>
    
      
      
    </div>
  )
}

export default Heroimg