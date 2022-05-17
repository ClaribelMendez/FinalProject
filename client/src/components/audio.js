// import { useState, useEffect } from "react";
// import Sound from "./sound";

// const Audio = (props) => {
//   const [trackPreview1, setTrackPreview1] = useState('');
//   const [trackPreview2, setTrackPreview2] = useState('');
//   const [trackPreview3, setTrackPreview3] = useState('');


//   const trackTitle1 = props.trackTitle1;
//   const trackTitle2 = props.trackTitle2;
//   const trackTitle3 = props.trackTitle3;
//   let artistName = props.artistName;



//   fetch(`https://itunes.apple.com/search?term=${trackTitle1}&term=${artistName}
//     &entity=musicTrack&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
//     (response) => {
//       response.json().then((data) => {
//         let results = data.results;
//         let indexAudio = results.map((c) => c.trackName).indexOf(trackTitle1);
//         let previewAudio = results[indexAudio]["previewUrl"];
//         setTrackPreview1(previewAudio);
//         console.log(data)
//       });
//     }
//   );


//   fetch(`https://itunes.apple.com/search?term=${trackTitle2}&term=${artistName}
//   &entity=musicTrack&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
//     (response) => {
//       response.json().then((data) => {
//         let results = data.results;
//         let indexAudio = results.map((c) => c.trackName).indexOf(trackTitle2);
//         let previewAudio = results[indexAudio]["previewUrl"];
//         setTrackPreview2(previewAudio);
//         console.log(trackPreview2)
//       });
//     }
//   );

//   fetch(`https://itunes.apple.com/search?term=${trackTitle3}&term=${artistName}
// &entity=musicTrack&allArtist&attribute=songTerm&attribute=allArtistTerm`).then(
//     (response) => {
//       response.json().then((data) => {
//         let results = data.results;
//         let indexAudio = results.map((c) => c.trackName).indexOf(trackTitle3);
//         let previewAudio = results[indexAudio]["previewUrl"];
//         setTrackPreview3(previewAudio);
//         console.log(trackPreview3)
//       });
//     }
//   );

//   return (
//     <div>
//       <h3>Artist: {artistName}</h3>
//       <Sound
//         preview1={trackPreview1}
//         preview2={trackPreview2}
//         preview3={trackPreview3}
//       />
//     </div>
//   );
// };

// export default Audio;
