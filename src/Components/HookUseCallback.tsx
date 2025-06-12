import React, { useCallback, useState } from 'react'
//both are use for memoization
//usecallback > function memoization
//usememo > component memoization

//Memoization is an optimization technique that stores the result of expensive function calls
//  and returns the cached result when the same inputs occur again.
// Instead of recalculating, it remembers.
const HookUseCallback = () => {
  const [user,setUser]=useState<string>("abhay")


      const handleUser=()=>{
        setUser("abhee")
      }
      const handledata=useCallback(()=>{
        console.log(user)
      },[user])
  return (
    <>

<div onClick={handleUser}>
       usecallback vs usememo 
       
    </div>
    <div onClick={handledata}>
       <button >handle data</button>
       
    </div>
    <div>
      
       {user}
    </div>
    </>
    
    
    
  )
}

export default HookUseCallback

