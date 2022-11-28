import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>E não menos importante</h5>
      <h2>Algumas outras habilidades</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Hard Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Nível intermediário em língua inglesa e básico em língua espanhola;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiência com Figma;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Habilidades com Design Gráfico em Adobe Photoshop e Adobe Illustrator;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiência com metodologias ágeis de desenvolvimento;</p>
            </li>
          </ul>
        </article>
       {/* END OF UI/UX */} 

       <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criatividade;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Organização;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trabalho em equipe;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pensamento crítico;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Disposto para aprender e ensinar;</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Produtividade.</p>
            </li>
          </ul>
        </article>
       {/* WEB DEVELOPMENT */} 
      </div>
    </section>
  )
}

export default Services