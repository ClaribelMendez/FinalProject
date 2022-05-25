import { useState, useEffect } from 'react'
import { accessToken } from './spotify'
import Game from './gameplay'
import Tracks from './Tracks'


function TrackAnalysis (props){

let track1 = props.track1
let track2 = props.track2
let track3 = props.track3
let image = props.image
// console.log(image)

const [analysis1, setAnalysis1] = useState('')
const [analysis2, setAnalysis2] = useState([])
const [analysis3, setAnalysis3] = useState([])
const [index, setIndex] = useState(0)


const callTrackAnalysis = () => {
fetch(
  `https://api.spotify.com/v1/audio-features?ids=${track1}%2C${track2}%2C${track3}`,

  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  }
)
.then((response) => {
  console.log(
    response.json().then((data) => {
      // setAnalysis1([ 'Danceability: ', data.audio_features[0].danceability, <br></br>, 'Energy : ', data.audio_features[0].energy,<br></br> ,'Key : ', data.audio_features[0].key, <br></br> ,'Loudness : ', data.audio_features[0].loudness, <br></br>,'Speechiness : ', data.audio_features[0].speechiness, <br></br> ,'Acousticness : ', data.audio_features[0].acousticness, <br></br> ,'Instrumentalness : ', data.audio_features[0].instrumentalness, <br></br> ,'Liveness : ', data.audio_features[0].liveness, <br></br> ,'Valence : ', data.audio_features[0].valence, <br></br>, 'Tempo : ', data.audio_features[0].tempo])
      // setAnalysis1((state)  =>  data.audio_features[0].danceability)
      setAnalysis1([data.audio_features[0].energy, data.audio_features[0].danceability])
      setAnalysis2([data.audio_features[0].energy, data.audio_features[0].danceability])
      setAnalysis3([data.audio_features[0].energy, data.audio_features[0].danceability])

      console.log('analysis ', analysis1)
      console.log(data)
    })
  );
});
}

useEffect(() => { 
  callTrackAnalysis();
 }, [track1]);





return (
<div>

</div>

);
}

export default TrackAnalysis;