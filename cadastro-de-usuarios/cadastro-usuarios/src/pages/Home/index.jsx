import './style.css'
import { useEffect } from 'react';

import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {

  let users = [];

  async function getUsers() {
    users = await api.get('/users');
    console.log(users);
  }

  //ele vai rodar isso td vez q a página abrir
  useEffect(() => {
    getUsers();
  }, []);

  return (
        
    <>
    <div className='container'>
      <form>
        <h1>User Registration</h1>
        <input placeholder='Name' name='name' type="text" />
        <input placeholder='Age' name='age' type="number" />
        <input placeholder='Email' name='email' type="email" />
        <button type='button'>Register</button>
      </form>

      {users.map((user) => (
        <>
        <div key={user.id} className='card'>
          <p>Name: <span>{user.name}</span></p>
          <p>Age: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
        </>
      ))}
    </div>
    </>
        
      
    
  )
}

export default Home
