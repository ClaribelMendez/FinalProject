import { useState} from 'react'
import {currentArtist} from './genredata'

function Tracks(props) {
const [artist, setArtist] = useState();


  return (
     <div>Track: {props.track}</div>
  )
}

export default Tracks;
