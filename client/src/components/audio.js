import { useState } from 'react'
import Sound from './sound'


const Audio = (props) => {
    const[trackPreview1, setTrackPreview1] = useState('')
    const[trackPreview2, setTrackPreview2] = useState('')

    const[trackPreview3, setTrackPreview3] = useState('')



    const trackTitle1 = props.trackTitle1
    const trackTitle2 = props.trackTitle2
    const trackTitle3 = props.trackTitle3
    const allTrackTitles = [trackTitle1, trackTitle2, trackTitle3]  
    let artistName = props.artistName
    


     
      fetch(`https://itunes.apple.com/search?term=${trackTitle1}&term=${artistName}
    &entity=musicTrack&musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`)
  .then((response) => {
     response.json().then(
          (data) => {
            let results = data.results
            let index = results.map(c => c.trackName).indexOf(trackTitle1);
                let preview = results[index]['previewUrl']
                console.log(preview)
                setTrackPreview1(preview)
          }
      );
  })

  fetch(`https://itunes.apple.com/search?term=${trackTitle2}&term=${artistName}
  &entity=musicTrack&musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`)
.then((response) => {
   response.json().then(
        (data) => {
          let results = data.results
          let index = results.map(c => c.trackName).indexOf(trackTitle1);
              let preview = results[index]['previewUrl']
              console.log(preview)
              setTrackPreview2(preview)
        }
    );
})

fetch(`https://itunes.apple.com/search?term=${trackTitle3}&term=${artistName}
&entity=musicTrack&musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`)
.then((response) => {
 response.json().then(
      (data) => {
        let results = data.results
        let index = results.map(c => c.trackName).indexOf(trackTitle1);
            let preview = results[index]['previewUrl']
            console.log(preview)
            setTrackPreview3(preview)
      }
  );
})

 

    


    
return (
    <div>
        <h3>Artist: {artistName}</h3>
            <Sound
            preview1 = {trackPreview1}
            preview2 = {trackPreview2}
            preview3 = {trackPreview3}
            />

        {/* <Sound 
            preview1 = {trackPreview}
        /> */}
    </div>
)

}

export default Audio