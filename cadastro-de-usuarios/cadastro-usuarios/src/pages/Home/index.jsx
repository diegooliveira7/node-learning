import './style.css'

import Trash from '../../assets/trash.png'

function Home() {

  const users = [
    {
      id: '225151',
      name: 'Diego',
      age: 33,
      email: 'diego@gamil.com'
    },
    {
      id: '225152',
      name: 'Suze',
      age: 3,
      email: 'suze@gamil.com'
    }
  ]

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
