import {React, useEffect } from 'react'

const Redirect = () => {
    useEffect(() => {
       window.location.href="http://localhost:3000/game"
        },[]);

  return (
    <div>
      
    </div>
  )
}

export default Redirect
