import { useState } from 'react'
import Sound from './sound'


const Audio = (props) => {
    const[trackPreview, setTrackPreview] = useState([])


    const trackTitle1 = props.trackTitle1
    const trackTitle2 = props.trackTitle2
    const trackTitle3 = props.trackTitle3
    const allTrackTitles = [trackTitle1, trackTitle2, trackTitle3]  
    let artistName = props.artistName
    


    for (let i = 0; i < 20 ; i++){
        let previews = []
    fetch(`https://itunes.apple.com/search?term=${allTrackTitles[i]}&term=${artistName}
    &entity=musicTrack&musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm&limit=20`)
  .then((response) => {
     response.json().then(
          (data) => {
              console.log(data)
            //   for (let i = 0; i < 20; i++){
            let results = data.results
            let index = results.map(c => c.trackName).indexOf(allTrackTitles[i]);
                previews.push(results[index]['previewUrl'])
                console.log('preview ', previews)
            // let trackPreview = data.results[0]['previewUrl']
            //     setTrackPreview(trackPreview)
            // console.log(data.results[0]['previewUrl'])
            // setTrackAudio(trackPreview)
            // setInfo(data.results[0]['previewUrl'])
            // console.log(data.results[0].artworkUrl100)
            //   }
          }
        
      );
        
  })
    }

return (
    <div>
        <h3>Artist: {artistName}</h3>
        <Sound 
            preview1 = {trackPreview}
        />
    </div>
)

}

export default Audio