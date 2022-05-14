import { useState, useEffect} from 'react'
import { accessToken } from "./spotify";

function Tracks(props) {
  const [tracks, setTracks] = useState();
  
  // let index = props.index
 
  let id = props.info
  
  console.log(id)
  // let id = info.items[0]['id']
  // console.log(id)
  // let id = '0TnOYISbd1XYRBk9myaseg'
  useEffect(() => {
    getTrack()
  }, []);

const getTrack = () => {
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
       setTracks(data.tracks[0]['name'])
            })
    );
    

  });
}

  return (
    <div>
      Track 1: {tracks}
      {/* Track 2: {tracks[1]}
      Track 3: {tracks[2]} */}
    </div>
  );
}

export default Tracks;
