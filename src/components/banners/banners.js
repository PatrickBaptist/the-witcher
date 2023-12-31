import React from 'react'
import './banners.css'

function Banners() {

  const banner = [
    {id: 0, name: 'Geralt', professon: 'Bruxo caçador', actor: 'Henry Cavill', sex: 'Male'},
    {id: 1, name: 'Yennefer', professon: 'Feiticeira', actor: 'Anya Chalotra', sex: 'Female'},
    {id: 2, name: 'Cirilla', professon: 'Princesa', actor: 'Freya Allan', sex: 'Female'},
    {id: 3, name: 'Renfri', professon: 'Princesa', actor: 'Emma Appleton', sex: 'Female'},
    {id: 4, name: 'Dandelion', professon: 'Poeta', actor: 'Joey Batey', sex: 'Male'},
    {id: 5, name: 'Triss', lastname: ' Merigold', professon: 'Feiticeira', actor: 'Anna Shaffer', sex: 'Female'},
    {id: 6, name: 'Stregobor', professon: 'Mago', actor: 'Lars Mikkelsen', sex: 'Male'},
    {id: 7, name: 'Vilgefortz', professon: 'Feiticeiro', actor: 'Mahesh Jadu', sex: 'Male'},
    {id: 8, name: 'Rience', professon: 'Feiticeiro assassino', actor: 'Chris Fullon', sex: 'Male'},
    {id: 9, name: 'Fringilla', lastname: ' Vigo', professon: 'Feiticeira', actor: 'Mimi Ndiweni', sex: 'Female'},
    {id: 10, name: 'Istredd', professon: 'Feiticeiro', actor: 'Royce Pierreson', sex: 'Male'},
    {id: 11, name: 'Cahir', professon: 'Oficial da inteligencia', actor: 'Eamon Farren', sex: 'Male'},
    {id: 12, name: 'Tissaia', professon: 'Lider e educadora de feiticeiras', actor: 'Myanna Buring', sex: 'Female'},
    {id: 13, name: 'Vesemir', professon: 'Bruxo mais velho e experiênte', actor: 'Kim Bodnia', sex: 'Male'},
    {id: 14, name: 'Philippa', lastname: ' Eilhart', professon: 'Feiticeira', actor: 'Cassie Clare', sex: 'Female'},
    {id: 15, name: 'Francesca', professon: 'Feiticeira', actor: 'Mecia Simson', sex: 'Female'},
    {id: 16, name: 'Sabrina', lastname: ' Glevissig', professon: 'Feiticeira', actor: 'Therica Wilson-Read', sex: 'Female'},
    {id: 17, name: 'Gallatin', professon: 'Guerreiro', actor: 'Robbie Amell', sex: 'Male'},
    {id:18, name: 'Eskel', professon: 'Bruxo', actor: 'Basil Eidenbenz', sex: 'Male'},
    {id: 19, name: 'Calanthe', professon: 'Rainha', actor: 'Jodhi May', sex: 'Female'},
    {id: 20, name: 'Mousesack', professon: 'O Druida', actor: 'Adam Levy', sex: 'Male'},
    {id: 21, name: 'Radovid', professon: 'Principe', actor: 'Hugh Skinner', sex: 'Male'},
    {id: 22, name: 'Vizimir', professon: 'Rei', actor: 'Ed Birch', sex: 'Male'},
    {id: 23, name: 'Voleth', lastname: ' Meir', professon: 'Entidade', actor: 'Ania Marson', sex: 'Female'},
    {id: 24, name: 'Sigismund',lastname: ' Dijkstra', professon: 'Mestre de espiões', actor: 'Graham McTavisck', sex: 'Male'},
    {id: 25, name: 'Foltest', professon: 'Rei', actor: 'Shaun Dooley', sex: 'Male'},
    {id: 26, name: 'Eist', lastname: ' Tuirseach', professon: 'Rei', actor: 'Bjorn Hlynur', sex: 'Male'},
    {id: 27, name: 'Fenn', professon: 'Anão', actor: 'Lizz Carr', sex: 'Female'},
    {id: 28, name: 'Codringher', professon: 'Anão', actor: 'Simon Callow', sex: 'Male'},
    {id: 29, name: 'Dara', professon: 'Elfo', actor: 'Wilson Radjou-Pujalte', sex: 'Female'}
]
     
    return (
        <>
        <div className='container-fotos'>
        {banner.map(users => (
          <div key={users.id} className='content-fotos'> 
            <div className='cards-fotos' id='cards-fotos' style={{ backgroundImage: `url(../cards/${users.name}.webp)` }}>
            <span>{users.name}{users.lastname},</span>
            <span> {users.professon}</span>
            <span className='actor-name'>{users.sex === 'Male' ? 'Ator: ' : 'Atriz: '}{users.actor}</span>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}

export default Banners