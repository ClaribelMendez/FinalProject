import { useState, useEffect } from "react";
import GenreData from "./genredata";
import { accessToken } from './spotify'

// INCLUDE?


function Genres() {
  const [genres, setGenres] = useState([]);
  const [token, setToken] = useState(null)
  const [subgenres, setSubgenres] = useState([])
  
  


  let handleGenreSelection = (e) => {
    setGenres(e.target.value)
  }
  const loadGenres = () => {
    fetch("http://localhost:8888/genres")
      .then((response) => response.json())
      .then((genre) => {
        setGenres(genre);
      });
  };

  useEffect(() => {
    loadGenres();
    setToken(accessToken)
  }, []);

  const getGenres =  (e) =>{
    e.preventDefault();
    let genre = e.target.value;
    console.log("Line 13 frontend ", genre);
    // add to request body
    fetch(`http://localhost:8888/game?genre=${genre}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
  })
    .then((response) => response.json())
    .then((data) => {
        let allgenres = [data.artists.items[0]['genres'], data.artists.items[1]['genres'],data.artists.items[2]['genres'], data.artists.items[3]['genres'],data.artists.items[4]['genres'], data.artists.items[5]['genres'],data.artists.items[6]['genres'], data.artists.items[7]['genres'],data.artists.items[8]['genres'], data.artists.items[9]['genres']]
      setSubgenres(allgenres)

  
      console.log(allgenres)

        // setCurrentGenre(data.response.currentGenre);
        // console.log("Line 198 front" + data.response.artists.items[0]['id']);
        
    })
    .catch((err) => console.error(`Error: ${err}`));
}


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

    <a href='http://localhost:8888/login'>LOGIN WITH SPOTIFY</a>

        {/* <GenreData genres = {subgenres} /> */}
        {subgenres}
    </div>
  );
}

export default Genres;