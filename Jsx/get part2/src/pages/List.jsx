import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './List.css'

function List() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  },[])

  const getUsers =async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
    
  }

  const openUserProfile = (user) => {
    navigate('/profile', {state: {user}})
  }
  
  return (
    <>
    
    <h1>Nome de usuarios</h1>

    <div className='container'>
     
      {users.map((user) => (
          <button  onClick={() => openUserProfile(user)}>
            <li key={user.id}>{user.name}</li>
          </button>
        )) 
        
      }
    </div>
    
    </>
  )
}

export default List
