import './style.css'

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
        <input name='name' type="text" />
        <input name='age' type="number" />
        <input name='email' type="email" />
        <button type='button'>Register</button>
      </form>

      {users.map((user) => (
        <>
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
        <button>

        </button>
        </>
      ))}
    </div>
    </>
        
      
    
  )
}

export default Home
