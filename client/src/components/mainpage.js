import React from 'react'

const Mainpage = () => {

    let handleStartButton = (e) => {
        window.location.href="/game"
    }
  return (
    <div>
     <button className='start_button' onClick={handleStartButton}>START</button>
    </div>
  )
}

export default Mainpage
