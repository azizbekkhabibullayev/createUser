import './Navbar.css'


function Navbar({users}) {

return (
  <>
  <div className="navbar">
    <div className='container'>
        <div className="navbar-container container">

      <h1>Cuser</h1>
      <h3 className='h3'>
      {users > 0 ? `You have: ${users} user`:"No user:("}
      </h3>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;
