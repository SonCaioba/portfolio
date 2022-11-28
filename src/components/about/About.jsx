import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {BiWorld} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Graduação</h5>
              <small>Ciência da Computação</small>
            </article>

            <article className='about__card'>
              <BiWorld className='about__icon'/>
              <h5>Local</h5>
              <small>Ceará - Brasil</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>Foco em front-end</small>
            </article>
          </div>

          <p>
          Desde criança sempre fui uma pessoa muito curiosa em aprender sobre tecnologias e o mundo virtual. Me firmei na área a partir do momento que concluí o curso Técnico em Informática, que me deu toda a base de programação necessária para evoluir na carreira.

          Atualmente sou graduando no curso de Ciência da Computação onde me tornei apaixonado por Desenvolvimento Web, mais especificamente na área Front-end onde sigo estudando tecnologias como HTML, CSS, JavaScript, ReactJS e entre outras.

          Meu principal objetivo é fazer com que o usuário comum sinta prazer ao navegar em uma página web!
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>
        </div>
      </div>
    </section>
  )
}

export default About