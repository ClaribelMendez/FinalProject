// import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
// import { useAudioData, visualizeAudio } from "@remotion/media-utils";
// import music from "./music.mp3";
//  
//  function AudioPlayer (){

//   const frame = useCurrentFrame();
//   const { width, height, fps } = useVideoConfig();
//   const audioData = useAudioData('https://p.scdn.co/mp3-preview/585736d2d4dba1eef13b6d63c54dd4c16a3275fb?cid=cb79505b7a4e48258da5fc9f2d1672c2');
//  
//   if (!audioData) {
//     return null;
//   }
//  
//   const visualization = visualizeAudio({
//     fps,
//     frame,
//     audioData,
//     numberOfSamples: 16,
//   }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//  
//   // Render a bar chart for each frequency, the higher the amplitude,
//   // the longer the bar
//   return (
//     <div>
//       <Audio src={'https://p.scdn.co/mp3-preview/585736d2d4dba1eef13b6d63c54dd4c16a3275fb?cid=cb79505b7a4e48258da5fc9f2d1672c2'} />
//       {visualization.map((v) => {
//         return (
//           <div
//             style={{ width: 1000 * v, height: 15, backgroundColor: "blue" }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default AudioPlayer