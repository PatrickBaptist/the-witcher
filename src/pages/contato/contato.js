import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/index';
import './contato.css'

function Contato() {

  return (
    <div>
      <Header />
        <div id="faleconosco">Fale Conosco!</div>
        <form action=''>
          <label for='name'>Nome:</label>
          <input id='name' type='name' className='Nome' placeholder='Coloque seu nome completo'/>
          <label for='email'>Email:</label>
          <input id='email' type='email' className='Email' placeholder='Coloque seu email'/>
          <label for='text'>Mensagem:</label>
          <textarea className="name" id="name" cols="30" rows="10" placeholder="Digite sua mensagem .."></textarea>
          <button class="button-contato">Enviar</button>
        </form>
      <Footer />      
    </div>
  )
}

export default Contato