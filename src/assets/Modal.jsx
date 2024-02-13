import { useState } from 'react'
import './Modal.css'
import { v4 as uuidv4 } from 'uuid';


function Modal({addUser}) {
  const [val , setVal]=useState([])
  let infor =(e)=>{
    e.preventDefault() 
     addUser(val)
     console.log(val)
  }

  return (
    <div>
      <div className="overlay">
     
      </div>
      <div className="container">
      <div className="inputs">
                <form onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, id:uuidv4()}
                      })
                    }}  onSubmit={infor} >
                  <h2 className='h2'>Create user</h2>
                  <label >
                    <span>Image url:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, image: e.target.value}
                      })
                    }} type="url"required/>
                  </label>
                  <label >
                    <span>First name:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, title: e.target.value}
                      })
                    }} type="text" required />
                  </label>  <label >
                    <span>Last name:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, subtitle: e.target.value}
                      })
                    }}type="text" required />
                  </label>  <label >
                    <span>Years:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, age: e.target.value}
                      })
                    }} type="number" required />
                  </label>  <label >
                    <span>From:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, from: e.target.value}
                      })
                    }} type="text" required />
                  </label> 
                  <label >
                    <span>Job:</span>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, job: e.target.value}
                      })
                    }} type="text" required />
                  </label> <label className='gender' >
                    <span>Gender:</span>
                    <small>Male</small>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, gender: e.target.value}
                      })
                    }} type="radio"  name='name' value={'male'}required />
                    <small>Female</small>
                    <input onChange={(e)=>{
                      setVal((prev)=>{
                        return {...prev, gender: e.target.value}
                      })
                    }} type="radio" name='name' value={'female'} required />
                  </label>  
                  
                  <button  className='submit'>Submit</button>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Modal
