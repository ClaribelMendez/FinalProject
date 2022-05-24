import { useState, useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";


function Sound(props) {
  let track1 = props.trackPreview1;
  let track2 = props.trackPreview2;
  let track3 = props.trackPreview3;

  const [audioStatus1, changeAudioStatus1] = useState(false);
  const [audioStatus2, changeAudioStatus2] = useState(false);
  const [audioStatus3, changeAudioStatus3] = useState(false);

  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  const startAudio1 = () => {
    myRef1.current.play();
    changeAudioStatus1(true);
    changeAudioStatus2(false);
    changeAudioStatus3(false);
  };

  const pauseAudio1 = () => {
    console.log("here");
    myRef1.current.pause();
    changeAudioStatus1(false);
  };

  const startAudio2 = () => {
    myRef2.current.play();
    changeAudioStatus1(false);
    changeAudioStatus2(true);
    changeAudioStatus3(false);
  };

  const pauseAudio2 = () => {
    console.log("here");
    myRef2.current.pause();
    changeAudioStatus2(false);
  };

  const startAudio3 = () => {
    myRef3.current.play();
    changeAudioStatus1(false);
    changeAudioStatus2(false);
    changeAudioStatus3(true);
  };

  const pauseAudio3 = () => {
    console.log("here");
    myRef3.current.pause();
    changeAudioStatus3(false);
  };

  return (
    <div className="audioButtons">
      <div>
      <audio ref={myRef1} src={track1} />
      
      {audioStatus1 ? (
        <div onClick={pauseAudio1}><FaRegPauseCircle /></div>
      ) : (
        <div onClick={startAudio1}><FaPlayCircle /></div>
      )}
      <br></br>
      <br></br>

      <audio ref={myRef2} src={track2} />
      {audioStatus2 ? (
        <div onClick={pauseAudio2}><FaRegPauseCircle /></div>
      ) : (
        <div onClick={startAudio2}><FaPlayCircle /></div>
      )}
      <br></br>
      <br></br>

      <audio ref={myRef3} src={track3} />
      {audioStatus3 ? (
        <div onClick={pauseAudio3}><FaRegPauseCircle /></div>
      ) : (
        <div onClick={startAudio3}><FaPlayCircle /></div>
      )}
    </div>
    </div>
  );
}

export default Sound;
