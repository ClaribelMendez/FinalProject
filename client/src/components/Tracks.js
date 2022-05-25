import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Video from "./video";
import Sound from "./sound";
import TrackAnalysis from "./trackAnalysis";

function Tracks(props) {
  const [track1, setTrack1] = useState("");
  const [track2, setTrack2] = useState("");
  const [track3, setTrack3] = useState("");
  const [trackId1, setTrackId1] = useState("");
  const [trackId2, setTrackId2] = useState("");
  const [trackId3, setTrackId3] = useState("");
  const [trackPreview1, setTrackPreview1] = useState("");
  const [trackPreview2, setTrackPreview2] = useState("");
  const [trackPreview3, setTrackPreview3] = useState("");
  const [artist, setArtist] = useState("");
  const [show, setShow] = useState(false)
  const [favorites1, setFavorites1] = useState('');
  const [favorites2, setFavorites2] = useState('');
  const [favorites3, setFavorites3] = useState('');


  let id = props.info;
  let artistImage = props.image;
  

  const callTracks = () => {
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
        console.log("track id ", data.tracks[0]["id"]);
        setTrackPreview1(data.tracks[0]["preview_url"]);
        setTrackPreview2(data.tracks[1]["preview_url"]);
        setTrackPreview3(data.tracks[2]["preview_url"]);
        setArtist(data.tracks[0]["artists"][0]["name"]);
        setShow(true)
      })
    );
  });
  }

  useEffect(() => { 
    callTracks();
   }, [id]);

   let favorite1 = (e) => {

     setFavorites1(trackId1)
   }

   let favorite2 = (e) => {
    setFavorites2(trackId2)
  
  }

  let favorite3 = (e) => {
     setFavorites3(trackId3)
  
  }
  

  // let trackTitles = [track1, track2, track3];

  return (
    <div>
      <div className='trackTitles' >
      {track1} 
      <br></br>
      <br></br>
      <br></br>

      {track2} 
      <br></br>
      <br></br>
      <br></br>


      {track3}
      <br></br>
      <br></br>
      <br></br>

      </div>
      

      <Sound
        trackPreview1={trackPreview1}
        trackPreview2={trackPreview2}
        trackPreview3={trackPreview3}
        artistName={artist}
      />

      <TrackAnalysis track1={trackId1} track2={trackId2} track3={trackId3}/>
      {/* <Playlist fav1 = {favorites1} fav2 ={favorites2} fav3 = {favorites3}/> */}
 
    </div>
  );
}

export default Tracks;
