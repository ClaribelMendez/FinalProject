import { useState, useRef } from "react";

function Sound(props) {
  let track1 = props.trackPreview1;
  let track2 = props.trackPreview2;
  let track3 = props.trackPreview3;

  const [show, setShow] = useState(false)
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
     
      <audio ref={myRef1} src={track1} />
      
      {audioStatus1 ? (
        <button onClick={pauseAudio1}>pause</button>
      ) : (
        <button onClick={startAudio1}>play</button>
      )}
      
      <audio ref={myRef2} src={track2} />
      {audioStatus2 ? (
        <button onClick={pauseAudio2}>pause</button>
      ) : (
        <button onClick={startAudio2}>play</button>
      )}

      <audio ref={myRef3} src={track3} />
      {audioStatus3 ? (
        <button onClick={pauseAudio3}>pause</button>
      ) : (
        <button onClick={startAudio3}>play</button>
      )}

    </div>
  );
}

export default Sound;
