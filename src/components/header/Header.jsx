import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Olá, tudo bem? Eu sou...</h5>
          <h1>Caio Damasceno</h1>
          <h5 className="text-light">Sou um Desenvolvedor Web</h5>
          <CTA />
          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="ME" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header