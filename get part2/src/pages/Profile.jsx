
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Profile.css'



function Profile() {
    const location = useLocation();
    const {user} = location.state || {};

    if(!user) return <p>Nenhum usuario selecionado</p>
return (
  <>
    <div className='card'>

      <div className='borda'>
      <div className='container-perfil'>
        <div className='container-text'>
          <h2 className='title'>Perfil do usuario</h2>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    </div>
    
    <div>
      <button >
        <Link to={'/'}> Home - Voltar</Link>
      </button>

    </div>
    </div>
  </>
  );
}

export default Profile
