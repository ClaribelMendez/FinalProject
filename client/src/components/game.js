import React from 'react'


const Gameplay = (props) => {
    const analysis = props.analysis
    const image = props.image
  
    console.log(image)
    // const trackTitle = trackTitle
  return (
    <div>
          

 <div id='artistInfo'>
   <div class="flip-card">
 <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={image} alt="Avatar" />
    </div>
    <div class="flip-card-back">
      

          </div>
  </div>
</div> 
</div>

    </div>
  )
}

export default Gameplay
