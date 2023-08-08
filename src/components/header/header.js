import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/The Witcher 2.ico'

function Header() {

    return (
        <header>
            <img id='logo' src={Logo} alt='Logo'/>
            <nav className='list-nav'>
                <ul>
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
        </header>

    )
}

export default Header