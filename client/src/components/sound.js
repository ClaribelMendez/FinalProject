import {Howl} from 'howler';
import { useState } from 'react';


function Sound(props) {
    const[isPlaying, setPlaying] = useState(false)
    let url = props.preview
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
        <input type="button" value="play" onClick={()=> play(props.preview)} />
       <audio src={props.preview} id="audio"></audio>
    </div>
    )

}



export default Sound