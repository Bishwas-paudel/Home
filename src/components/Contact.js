import React, { useRef, useState } from 'react';
import Heroimg from './Heroimg';
import contactimg from "../assets/about.jpg";
import emailjs from '@emailjs/browser';
import { Slide } from 'react-reveal';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button

    emailjs.sendForm('service_gfdd0zd', 'template_g74id2q', form.current, 'pR5BEOnn7ucsjrUrr')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        setIsSubmitting(false); // Enable the button again
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false); // Enable the button again in case of error
      });
  };

  return (
    <>
      <Heroimg image={contactimg} heading="Get in touch ....." title="I strive to maintain open lines of dialogue to ensure a smooth and collaborative development process." />
      <Slide left cascade>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type='text' name="name" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="subject">Subject</label>
            <input type='text' name="subject" id="subject" required />
            <label htmlFor="message">Message</label>
            <textarea rows={6} placeholder='Type your message here' name="message" id="message" required />
            <button className='btn' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </Slide>
    </>
  );
};

export default Contact;
