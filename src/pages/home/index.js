import React from 'react'
import Header from '../../components/header/header';
import './styles.css'
import Video from '../../assets/video-the-witcher.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer';

function Home() {

  return (
    <>
      <Header />
      <div id='banner'></div>
        <div id='trailer-container'>
          <div className='content'>
            <video controls className='trailer'>
              <source src={Video}/>
              Seu navegador não possui suporte para vídeos
            </video>

            <div id='sinopse'>
            <p className='description'>
            The Witcher é uma série de livros e uma adaptação para a Netflix que se passa em um mundo de fantasia medieval e segue a história de Geralt de Rívia, um bruxo que caça monstros como profissão123. Geralt descobre que seu destino está interligado com a princesa Cirilla e a Feiticeira Yennefer2, e enfrenta as maldades humanas e as ameaças sobrenaturais que assolam o continente.
            </p>
            <a href="https://www.netflix.com/br/browse/genre/81517755" target="_blank" rel="noreferrer"><button className='button' style={{ textDecoration: 'none' }}>Ir para o site</button></a>
            </div>
          </div>
        </div>

        <Cards />
        <Footer />
    </>
  )
}

export default Home
