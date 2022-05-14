import { useState } from 'react'


const Audio = (props) => {
    
    let trackTitles = props.trackTitles

    for (let i = 0; i < 3; i++){
    fetch(`https://itunes.apple.com/search?term=${allTracks[index]}&entity=musicTrack`)
  .then((response) => {
     response.json().then(
          (data) => {
            let trackPreview = data.results[0]['previewUrl']
            console.log('track preview', trackPreview)
            console.log(data.results[0]['name'])

            // console.log(data.results[0]['previewUrl'])
            setTrackAudio(trackPreview)
            // setInfo(data.results[0]['previewUrl'])
            // console.log(data.results[0].artworkUrl100)
              
          }
        
      );
        
  })
}

return (
    <div>

    </div>
)

}

export default Audio