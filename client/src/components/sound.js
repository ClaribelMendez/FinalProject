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
        <input type="button" value="play" onClick={()=> play(track1)}  />
       <audio src={track1} id="audio"></audio>
       <ReactPlayer url= {'https://video-ssl.itunes.apple.com/itunes-assets/Video123/v4/1f/ec/43/1fec4387-98b7-5467-ae93-6af495c55da6/mzvf_16922034866386966595.640x480.h264lc.U.p.m4v'} />

       <input type="button" value="pause" onClick={()=> play(track2)} />
       <audio src={track2} id="audio"></audio>
       <ReactPlayer url= {track2} />

       <input type="button" value="play" onClick={()=> play(track3)} />
       <audio src={track3} id="audio"></audio>
       <ReactPlayer url= {track3} />
    </div>
    )

}



export default Sound