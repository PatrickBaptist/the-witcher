import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/index';
import './comentarios.css'
import Image from '../../assets/anonimo.webp'

function Comentarios() {

  return (
    <div>
      <Header />
        <div className='container-coment'>
          <div className='content-coment'>
            <div className='coments'>
              <img id='photo' src={Image} alt='Anônimo' title='Anônimo' />
              <h2 className='Nome'>Felipe da costa Nunes</h2>
              <span className='stars'>⭐⭐⭐⭐⭐</span>
              <p className='coment'>Simplesmente a MELHOR adaptação que eu já vi na vida, e olha que já vi mta coisa (Senhor dos anéis me perdoe), imagino que para quem não conheça os livros e os jogos, tenha ficado um pouco perdido, devido a estrutura da narrativa..</p>
            </div>
            <div className='coments'>
              <img id='photo' src={Image} alt='Anônimo' title='Anônimo' />
              <h2 className='Nome'>Klisney Costa</h2>
              <span className='stars'>⭐</span>
              <p className='coment'>Sinceramente, a série não convenceu. Não foi incrível, foi apenas legal. Eu assisti até o fim não por estar totalmente empolgado, vidrado e obcecado, mas sim por pura curiosidade em saber se a série conseguiria de fato atingir as grandes expectativas que me fizeram ter, o que não aconteceu, obviamente. 
              Eu não li os livros, não posso falar sobre a adaptação, mas se realmente for essa a história e emoção dos livros, me surpreende muito que tenham esse sucesso todo.
              Resumindo as coisas básicas que ...</p>
            </div>
            <div className='coments'>
              <img id='photo' src={Image} alt='Anônimo' title='Anônimo' />
              <h2 className='Nome'>Bruno Noua</h2>
              <span className='stars'>⭐⭐⭐</span>
              <p className='coment'>Sinceramente, a série não convenceu. Não foi incrível, foi apenas legal. Eu assisti até o fim não por estar totalmente empolgado, vidrado e obcecado, mas sim por pura curiosidade em saber se a série conseguiria de fato atingir as grandes expectativas que me fizeram ter, o que não aconteceu, obviamente. 
              Eu não li os livros, não posso falar sobre a adaptação, mas se realmente for essa a história e emoção dos livros, me surpreende muito que tenham esse sucesso todo.
              Resumindo as coisas básicas que ...</p>
            </div>
            <div className='coments'>
              <img id='photo' src={Image} alt='Anônimo' title='Anônimo'/>
              <h2 className='Nome'>Carlos Taiti Yaguinuma</h2>
              <span className='stars'>⭐⭐⭐⭐⭐</span>
              <p className='coment'>Minha opinião: A melhor interpretação de Henry, na verdade para mim a 1ª interpretação dele como ator. Onde o personagem dele é perfeito para ele. Uma série que cresceu nesta 2ª temporada. Com umas 3 a 4 vertentes do seriado. Bom roteiro e conexos. Tenho certeza que a 3ª temporada terá e com muitas surpresas. Uma ótima atuação tb Freya e Anya. Muito boa os #efeitosespeciais #fotografia Sabe uma boa obra da Netflix. #superrecomendo
              Roteiro: boa
              Foto: boa
              Efeitos especiais: boa
              Vale apena assistir ..</p>
            </div>
            <div className='coments'>
              <img id='photo' src={Image} alt='Anônimo' title='Anônimo'/>
              <h2 className='Nome'>Adelaide Almeida</h2>
              <span className='stars'>⭐⭐⭐⭐⭐</span>
              <p className='coment'>Achei ótima, as pessoas tem que entender que é baseado no livro e não o livro todo, se não teria que ser uma série de 50 capítulos para dar cada detalhe.
              Sim alguns efeitos pode não ter sido como eu imaginava, mas confesso que em outros fatos, e o próprio Henry fez um intérprete maravilhoso, e se superou, afinal não o vi como o homem de aço e sim como um ator magnífico que pode interpretar qualquer personagem...
              Adorei!!! Parabéns a todos e a Netflix</p>
            </div>
          </div>
        </div>
      <Footer />      
    </div>
  )
}

export default Comentarios