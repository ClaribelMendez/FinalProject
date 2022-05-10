import { useState, useEffect } from "react";
import Tracks from './Tracks'
import MediaControlCard from "./MediaCard";



function Music() {
  const [genres, setGenres] = useState([]);
  const [currentTrack, setCurrentTrack] = useState('')
  const [image, setImage] = useState('')


  const loadGenres = () => {
    fetch("http://localhost:4003/genres")
      .then((response) => response.json())
      .then((genre) => {
        setGenres(genre);
      });
  };


   
  

  useEffect(() => {
    loadGenres();
  }, []);

  const getGenres = (e) => {
    e.preventDefault();
    let genre = e.target.value;
    console.log("Line 13 frontend ", genre);
    // add to request body
    fetch(`http://localhost:4003/game?genre=${genre}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
  })
  .then((response) => {
    console.log(
      response.json().then((data) => {
         console.log(data.tracks[0].name)
         console.log('Data from top tracks:  ' + data.tracks[0]['preview_url'])      
         setCurrentTrack(data.tracks[0].name)
         setImage(data.tracks[0]['album']['images'][0]['url'])
          // console.log(data.tracks[0]['preview_url'])
        // console.log(data.tracks[1]['preview_url'])
        // console.log(data.tracks[2]['preview_url'])
        })
         .catch((err) => console.error(`Error: ${err}`))
    )})}

    // INCLUDE?
// let handleGenreSelection = (e) => {
//   setGenres(e.target.value)
// }


    // const getTracks

  return (
    <div>
      {/* {currentTrack} */}
    <select onChange={getGenres}>
      <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.value}>
          {genre.genre}
        </option>
      ))}
    </select>

    <MediaControlCard tracktitle={currentTrack} image = {image} />
    </div>
  );
}

export default Music;
