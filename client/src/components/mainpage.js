import React from 'react'

const Mainpage = () => {

    let handleStartButton = (e) => {
        window.location.href="http://localhost:3000/game"
    }
  return (
    <div className='mainpage'>
        <div className='instructions'>
      Ready to get more InTune with music? Here's how to play and discover:
      The game is simple - match the subgenres that belong to the artist.
        First, choose a genre. You will then see : 
      <ul>
          <li>
              10 subgenres
          </li>
          <li>
              Image of the current Artist
          </li>
          <li>
              Three 30s samples of the artists top tracks to listen to
          </li>
          <li>
              Audio Analysis such as: danceability, energy, tempo
                - Hover over the artist's image to view this.
          </li>
      </ul>


     If you score 8/10 you earn a playlist from this category!


     </div>


     <button className='start_button' onClick={handleStartButton}>START</button>

     
    </div>
  )
}

export default Mainpage
