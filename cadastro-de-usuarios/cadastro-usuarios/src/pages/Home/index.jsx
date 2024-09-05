import './style.css'

function Home() {

  return (
        
    <div className='container'>
      <form>
        <h1>User Registration</h1>
        <input name='name' type="text"/>
        <input name='age' type="number"/>
        <input name='email' type="email"/>
        <button type='button'>Register</button>
      </form>
    </div>
        
      
    
  )
}

export default Home
