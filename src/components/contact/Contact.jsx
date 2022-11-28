import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3nqf23d', 'template_32u6ha8', form.current, 'm7e6w4GBHerDtffG9')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Vamos lá!</h5>
      <h2>Converse comigo!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>caioba.dev@gmail.com</h5>
            <a href="mailto:caioba.dev@gmail.com" target="_blank">Entre em contato</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Caio Damasceno</h5>
            <a href="https://www.linkedin.com/in/caio-ds/" target="_blank">Conecte-se comigo</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (88) 9 9977-4632</h5>
            <a href="https://wa.me/5588999774632" target="_blank">Converse comigo</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome completo' required/>
          <input type="email" name="email" placeholder='Seu melhor e-mail' required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact