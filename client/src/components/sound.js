import { useState, useRef } from "react";
import { FaPlayCircle, FaRegPauseCircle } from "react-icons/fa";

function Sound(props) {
  const { trackPreview1, trackPreview2, trackPreview3 } = props;

  const [audioStatus, setAudioStatus] = useState({
    audio1: false,
    audio2: false,
    audio3: false,
  });

  const audioRefs = {
    audio1: useRef(),
    audio2: useRef(),
    audio3: useRef(),
  };

  const handleAudioToggle = (audioKey) => {
    const newState = { ...audioStatus };
    Object.keys(newState).forEach((key) => {
      newState[key] = key === audioKey ? !newState[key] : false;
    });
    setAudioStatus(newState);
  };

  const handleAudioStart = (audioKey) => {
    handleAudioToggle(audioKey);
    audioRefs[audioKey].current.play();
  };

  const handleAudioPause = (audioKey) => {
    handleAudioToggle(audioKey);
    audioRefs[audioKey].current.pause();
  };

  return (
    <div className="audioButtons">
      <div>
        <audio ref={audioRefs.audio1} src={trackPreview1} />
        {audioStatus.audio1 ? (
          <div onClick={() => handleAudioPause("audio1")}>
            <FaRegPauseCircle />
          </div>
        ) : (
          <div onClick={() => handleAudioStart("audio1")}>
            <FaPlayCircle />
          </div>
        )}
        <br />
        <br />

        <audio ref={audioRefs.audio2} src={trackPreview2} />
        {audioStatus.audio2 ? (
          <div onClick={() => handleAudioPause("audio2")}>
            <FaRegPauseCircle />
          </div>
        ) : (
          <div onClick={() => handleAudioStart("audio2")}>
            <FaPlayCircle />
          </div>
        )}
        <br />
        <br />

        <audio ref={audioRefs.audio3} src={trackPreview3} />
        {audioStatus.audio3 ? (
          <div onClick={() => handleAudioPause("audio3")}>
            <FaRegPauseCircle />
          </div>
        ) : (
          <div onClick={() => handleAudioStart("audio3")}>
            <FaPlayCircle />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sound;
