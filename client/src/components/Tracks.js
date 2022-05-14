import { useState, useEffect} from 'react'
import { accessToken } from "./spotify";
import Audio from './audio'

function Tracks(props) {
  const [tracks, setTracks] = useState([]);
  const [ids, setIds] = useState('')
  
  let index = props.index
 
  let info = props.info

  

  let artistId = info[index]
  console.log(artistId, index)

  // setIds(artistIds)
  
  // console.log(artistIds)



  // let artistIds = ids.artists


  // let artistId = artistIds.items[0]['id']
  // console.log(artistId)

  // let artistId = ids.artists.items[0]['id']
  
  // console.log('line 13 ', artistId)
  // let id = info.items[0]['id']
  // console.log(id)
  // let id = '0TnOYISbd1XYRBk9myaseg'
  useEffect(() => {
    getTrack()
  }, );

async function getTrack() {
  await fetch(
     `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`,

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
        // response.json(data)
        setTracks([data.tracks[0]['name'],data.tracks[1]['name'],data.tracks[2]['name']])
       console.log(tracks)
            })
    );
    

  });
}

  return (
    <div>
      Track 1: {tracks[0]}
      Track 2: {tracks[1]}
      Track 3: {tracks[2]} 

      <Audio  trackTitles = {tracks} />
    </div>
  );
}

export default Tracks;
