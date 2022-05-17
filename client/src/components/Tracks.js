import { useState } from "react";
import { accessToken } from "./spotify";
// import Audio from './audio'
import Video from './video'
import Sound from './sound'
import GamePlay from "../game";
import TrackAnalysis from "./trackAnalysis";
import MediaControlCard from "./mediaCard";


function Tracks(props) {
  const [track1, setTrack1] = useState("");
  const [track2, setTrack2] = useState("");
  const [track3, setTrack3] = useState("");
  const [trackId1, setTrackId1] = useState("");
  const [trackId2, setTrackId2] = useState("");
  const [trackId3, setTrackId3] = useState("");
  const [trackPreview1, setTrackPreview1] = useState('');
  const [trackPreview2, setTrackPreview2] = useState('');
  const [trackPreview3, setTrackPreview3] = useState('')
  const [artist, setArtist] = useState('')

  let id = props.info;
  let image = props.image

  
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
        setTrackId1(data.tracks[0]["id"]);
        setTrackId2(data.tracks[1]["id"]);
        setTrackId3(data.tracks[2]["id"]);
        console.log('track id ', data.tracks[0]['id'])
        setTrackPreview1(data.tracks[0]["preview_url"]);
        setTrackPreview2(data.tracks[1]["preview_url"]);
        setTrackPreview3(data.tracks[2]["preview_url"]);
        setArtist(data.tracks[0]['artists'][0]['name'])
       
      })
    );
  });


  let trackTitles = [track1, track2, track3]

  return (
    <div>
      <GamePlay
      trackTitle1 = {track1}
      trackTitle2 = {track2}
      trackTitle3 = {track3}
      trackNames = {trackTitles}
      />

      <Sound  
      trackPreview1 = {trackPreview1} 
      trackPreview2 = {trackPreview2} 
      trackPreview3 = {trackPreview3} 
      artistName = {artist}
      />
        <Video  
      trackTitle1 = {track1} 
      trackTitle2 = {track2} 
      trackTitle3 = {track3} 
      artistName = {artist}
      />

      <TrackAnalysis
        track1 = {trackId1}
        track2 = {trackId2}
        track3 = {trackId3}
      />

      <MediaControlCard
      trackTitle = {track1}
      artistName = {artist}
      image = {image}
      />
   
    </div>
  );
}

export default Tracks;
