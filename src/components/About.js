import React from 'react'
import Heroimg from './Heroimg'
import aboutimg from "../assets/bishwas.JPG"
const About = () => {
  return (
    <div className='about-sec'>
      <Heroimg image={aboutimg} heading="Hello there!" title="I am Bishwas Paudel." />
      <div className='whoAmI'>
        <h1>Who Am I ?</h1>
        <h4>My name is Bishwas Paudel, I am a Computer Science Student dedicated in the field of web development.
           With Knowledge of  Front-End and Back-End technologies,
           I bring innovative ideas  and skills  to every project I undertake.

          </h4>
      </div>
    </div>
  )
}

export default About