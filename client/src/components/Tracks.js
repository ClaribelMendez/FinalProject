import { useState, useEffect} from 'react'
import { accessToken } from "./spotify";
// import Audio from './audio'

function Tracks(props) {
  const [tracks, setTracks] = useState('');
  const [artistId, setArtistId] = useState('')
  
  let index = props.index
 
  let id = props.info
  // console.log(artistIds)
  // console.log(artistId)
  // console.log(info + ' ds')
  // setArtistId(artistIds)
  

// let info = '2lolQgalUvZDfp5vvVtTYV'
  // let artistIds = info
  // console.log( artistIds)


 
  
      // setArtistId(id)
      console.log(id)
     fetch(
     `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`,

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
    // let trackNames =  data.tracks['name']
        setTracks(data.tracks[index]['name'])
       console.log('line 35 ', data.tracks[0]['name'])
            })
    );
    

  });


// useEffect(() => {
//   Tracks()
// });


  return (
    <div>
      Track 1: {tracks}
      {/* Track 2: {tracks}
      Track 3: {tracks}  */}

      {/* <Audio  trackTitles = {tracks} /> */}
    </div>
  );
}

export default Tracks;