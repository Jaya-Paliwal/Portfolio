import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import {GrLinkedinOption} from 'react-icons/gr';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_znidaqs', 'template_8hq76bz', form.current, 'izafPphO6Fl5UpVr-')
    e.target.reset()
  };


  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jayapaliwal96@gmail.com</h5>
          <a href="mailto:jayapaliwal96@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
        <GrLinkedinOption className='contact__option-icon'/>
          <h4>Linkedin</h4>
          <h5>Jaya-Paliwal</h5>
          <a href="https://www.linkedin.com/in/jayabpaliwal" target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+919561603777</h5>
          <a href="https://api.whatsapp.com/send?phone=919561603777" target='_blank'>Send a message</a>
        </article>
      </div>
      {/* End of cotact options */}

      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder='Your Full Name' required /> 
       <input type="email" name='email' placeholder='Your Email' required /> 
       <textarea name="message" rows="7" placeholder='Your Message'></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
