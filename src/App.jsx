import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import Modal from './assets/Modal'
import Offline from './assets/Offline'

import { useState } from 'react'
// import { Fetch } from './hoks/Fetch'



function App() {


  // window.addEventListener("offline", (e) => {
  // setApp('none')
  // setOff(true)
  // console.log(e)
  //  });
const [app ,setApp] = useState("app") 
const[users,setUser]=useState([])
const [open , setOpen]=useState(false)
const [ off , setOff]= useState(false)
// const [url ,setUrl ]= useState('https://dummyjson.com/products')
// const[date ,error ,ispanding]=  fetch(url)
// console.log(date)
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

 
let openModal=(e)=>{

  console.log(e.key)
 setOpen(true)
}
//close modal modallni yopish
let closeModal = (e)=>{
    if(e.target.className==='overlay') setOpen(false)
     console.log(e)
}

 
  return (
    <>
    <div className={app} onClick={closeModal} >
      {off && <Offline/>}
     <Navbar users={users.length}/>
      {open && <Modal addUser={addUser}/>}
     <main className='main'>
     
      <div className="container">
     <marquee behavior="" direction="">
      <div className="animation">
        <h3>Azizbek Habibullayev</h3>
        <h3>+99890 530 75 60</h3>
        <h3>azizbek.habibullayev@icloud.com</h3>
        <h3>t.me: @Azizbekdotcom</h3>
        <h3>level: junior || junior+</h3>
       
     
      </div>
        </marquee>
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
        <span>{user.date}</span>
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
