import React from 'react'
import { useEffect, useState } from 'react'
function Fetch({ addUser }) {
  const [url, setUrl] = useState('https://picsum.photos/v2/list?page=2&limit=100')
  const [res, setRes] = useState([])
  //urlni ulash
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((date) => setRes(date))
      .catch((err) => console.log(err))

  }, [url])


let infor=()=>{
  // addUser(res)
}
infor()
  

  return (
    <div>
    
    </div>
  )
}

export default Fetch;
