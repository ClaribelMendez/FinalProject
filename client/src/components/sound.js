// import {Howl} from 'howler';
import { useState } from 'react';
import ReactPlayer from 'react-player'



function Sound(props) {
    const[isPlaying, setPlaying] = useState(false)
    let track1 = props.preview1
    let track2 = props.preview2
    let track3 = props.preview3

    const play = (url) => {
        let song = new Audio(url)
        if(!isPlaying){
        song.play()
        setPlaying(true)
        }if(isPlaying){
            song.pause()
            setPlaying(false)
        }
    }

  

    // const[play, setPlay] = useState(true)


   

    return (
        
        <div>
        <input type="button" value="play" onClick={()=> play(track1)} />
       <audio src={track1} id="audio"></audio>
       <ReactPlayer url= {track1} />
    </div>
    )

}



export default Sound