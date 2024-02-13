import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import Modal from './assets/Modal'
import { useState } from 'react'



function App() {



const[users,setUser]=useState([])
const [open , setOpen]=useState(false)
// user qoshish
console.log(users)
let addUser =(user)=>{
  setUser((prev)=>{
    return [...prev, user]
  })
  setOpen(false)
}
//userlarni ochirish 
let deleteUser=(id)=>{
  setUser((prev)=>{
    return prev.filter((user)=>{
      return user.id !== id
    })
  })

}

let openModal=()=>{
 setOpen(true)
}
//close modal modallni yopish
let closeModal = (e)=>{
    if(e.target.className==='overlay') setOpen(false)
     console.log(e)
}

  return (
    <>
    <div className="app" onClick={closeModal} onKeyDown={closeModal} >

     <Navbar users={users.length}/>
      {open && <Modal addUser={addUser}/>}
     <main className='main'>
      <div className="container">
      <h1 className='h1'>
      {users.length > 0 ? " " :"No user"}
      </h1>
     
      {users.map((user)=>{
        return(
          <div className="user_div" key={user.id}>
        <img src={user.image} alt="img" />
        <h2 className='h2_text'>{user.title}</h2>
        <h3 className="h3_text">{user.subtitle}</h3>
        <span className="job">{user.age}- {user.from} - {user.job}</span>
        <span> gender:{user.gender}</span>
        <button className='delete' onClick={()=>deleteUser(user.id)}>delete</button>
      </div>
        )
      })}
     
   
      </div>
      <button onClick={openModal} className='btn3' type='button'> create user</button>
     </main>
     <Footer />
     </div>
    </>
  )
}

export default App
