import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CAIO DAMASCENO</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/caio-ds" target="_blank"><ImLinkedin /></a>
        <a href="https://www.instagram.com/caio.ds" target="_blank"><AiFillInstagram /></a>
        <a href="https://www.github.com/soncaioba" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Caio Damasceno. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer