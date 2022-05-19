import { useState, useEffect } from 'react'
import { accessToken } from './spotify'
import Game from './gameplay'

function TrackAnalysis (props){

let track1 = props.track1
let track2 = props.track2
let track3 = props.track3
const [analysis, setAnalysis] = useState('')
const [analysis2, setAnalysis2] = useState('')
const [analysis3, setAnalysis3] = useState('')




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
).then((response) => {
  console.log(
    response.json().then((data) => {
      response.json(data)
      setAnalysis(data.audio_features[0]['energy'])
     
    })
  );
});



return (
  <div className='audio_features'>

    <Game
    analysis = {analysis}
    />
  </div>
);
}

export default TrackAnalysis;