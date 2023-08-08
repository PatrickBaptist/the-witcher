import React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

function Profile() {
  const {login} = useContext(UserContext)

  return (
    <div>
      {login ? 'Dados do usuário' : 'Faça o seu login para ter acesso as informações'}
      
      
    </div>
  )
}

export default Profile
