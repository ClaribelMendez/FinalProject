import { useState } from "react";
import DisplayVideo from './displayVideo'

const Video = (props) => {
  const [videoPreview1, setVideoPreview1] = useState("");
  const [videoPreview2, setVideoPreview2] = useState("");
  const [videoPreview3, setVideoPreview3] = useState("");

  const trackTitle1 = props.trackTitle1;
  const trackTitle2 = props.trackTitle2;
  const trackTitle3 = props.trackTitle3;
  let artistName = props.artistName;

  fetch(`https://itunes.apple.com/search?term=${trackTitle1}&term=${artistName}
    &entity=musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
    (response) => {
      response.json().then((data) => {
        let results = data.results;
        let indexVideo = results.map((c) => c.trackName).indexOf(trackTitle1);
        let previewVideo = results[indexVideo]["previewUrl"];
        setVideoPreview1(previewVideo);
      });
    }
  );

  fetch(`https://itunes.apple.com/search?term=${trackTitle2}&term=${artistName}
  &entity=musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
    (response) => {
      response.json().then((data) => {
        let results = data.results;
        let indexVideo = results.map((c) => c.trackName).indexOf(trackTitle2);
        let previewVideo = results[indexVideo]["previewUrl"];
        console.log(previewVideo);
        setVideoPreview2(previewVideo);
      });
    }
  );

  fetch(`https://itunes.apple.com/search?term=${trackTitle3}&term=${artistName}
&entity=musicVideo&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
    (response) => {
      response.json().then((data) => {
        let results = data.results;
        let indexVideo = results.map((c) => c.trackName).indexOf(trackTitle3);
        let previewVideo = results[indexVideo]["previewUrl"];
        setVideoPreview3(previewVideo);
      });
    }
  );

  return (
    <div>
      <DisplayVideo
        video1 = {videoPreview1}
        video2 = {videoPreview2}
        video3 = {videoPreview3}
        />
    </div>
  );
};

export default Video;
