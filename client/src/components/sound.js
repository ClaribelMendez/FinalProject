// import {Howl} from 'howler';
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-web-playback';



function Sound(props) {
    // const[isPlaying, setPlaying] = useState(false)
    let track1 = props.trackPreview1
    let track2 = props.trackPreview2
    let track3 = props.trackPreview3

    // const play = (url) => {
    //     let song = new Audio(url)
    //     if(!isPlaying){
    //     song.play()
    //     setPlaying(false)
    //     }if(isPlaying){
    //         song.pause()
    //         setPlaying(true)
    //     }
    // }
    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();
  
    const startAudio = () => {
      myRef.current.play();
  
      changeAudioStatus(true);
    };
  
    const pauseAudio = () => {
      console.log("here");
      myRef.current.pause();
      changeAudioStatus(false);
    };
  
    return (
      <>
        <audio
          ref={myRef}
          src= {track1}
        />
        {audioStatus ? (
          <button onClick={pauseAudio}>pause</button>
        ) : (
          <button onClick={startAudio}>start</button>
        )}
      </>
    );
        }
    

  




export default Sound



