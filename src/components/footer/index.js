import React from 'react'
import Image from '../../assets/The Witcher 2.ico'
import './styles.css'
import { Link } from 'react-router-dom'

function Footer () {
    return (
    <div id="footer">
        <footer className='footer'>
            <nav className='nav-list'>
                <ul className='link'>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
            <img src={Image} id='logo' alt='Logo'/>
            <span>Todos os direitos reservados©</span>
            <span>Desenvolvido por: Patrick Baptista</span>
        </footer>
    </div>
    )
}

export default Footer