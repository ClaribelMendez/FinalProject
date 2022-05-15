import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Audio from './audio'


function Tracks(props) {
  const [track1, setTrack1] = useState("");
  const [track2, setTrack2] = useState("");
  const [track3, setTrack3] = useState("");
  const [artist, setArtist] = useState('')

  let id = props.info;

  
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
        setTrack1(data.tracks[0]["name"]);
        setTrack2(data.tracks[1]["name"]);
        setTrack3(data.tracks[2]["name"]);

        setArtist(data.tracks[0]['artists'][0]['name'])

       
      })
    );
  });




  return (
    <div>
      Track 1: {track1}
      Track 2: {track2}
      Track 3: {track3}
      <Audio  
      trackTitle1 = {track1} 
      trackTitle2 = {track2} 
      trackTitle3 = {track3} 
      artistName = {artist}
      />
    </div>
  );
}

export default Tracks;
