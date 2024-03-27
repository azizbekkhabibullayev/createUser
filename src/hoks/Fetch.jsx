import { useEffect, useState } from "react";


 export function Fetch() {
  const [date ,setDate] =  useState(null)
  const [error, setError] = useState(null)
  const [ispanding , setIspanding ] = useState(false)

  useEffect((url)=>{
    setIspanding(true)
    try{
      const fetch= async (url)=>{
      const req = await fetch(url)
      if( !req.ok){
        throw new Error(req.errortext)
      }
      const res = await req.json()
      setDate(res)
      setIspanding(false)
    }}
    catch(err){
      setIspanding(false)
      setError(err)

    }
   

  },[])
  return{ date , error,ispanding}
}


