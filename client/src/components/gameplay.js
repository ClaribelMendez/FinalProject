import { useState, useEffect } from "react";
// import GenreData from "./genredata";
import { accessToken } from "./spotify";
import Sound from "./sound";

// INCLUDE?

function Game() {
  const [genres, setGenres] = useState([]);
  const [token, setToken] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [currentArtist, setCurrentArtist] = useState(" ");
  const [score, setScore] = useState("Score:");
  const [allTracks, setAllTracks] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [index, setIndex] = useState(0);
  const [trackAudio, setTrackAudio] = useState([]);
  const [info, setInfo] = useState([]);
  const [currentTrack, setCurrentTrack] = useState('');

  let handleGenreSelection = (e) => {
    setGenres(e.target.value);
  };
  const loadGenres = () => {
    fetch("http://localhost:8888/genres")
      .then((response) => response.json())
      .then((genre) => {
        setGenres(genre);
      });
  };

  useEffect(() => {
    loadGenres();
    setToken(accessToken);
  }, []);

  const getGenres = (e) => {
    e.preventDefault();
    let genre = e.target.value;

    console.log("Line 13 frontend ", genre);
    // add to request body
    fetch(`http://localhost:8888/game?genre=${genre}&token=${token}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let allgenres = [
          data.artists.items[0]["genres"],
          data.artists.items[1]["genres"],
          data.artists.items[2]["genres"],
          data.artists.items[3]["genres"],
          data.artists.items[4]["genres"],
          data.artists.items[5]["genres"],
          data.artists.items[6]["genres"],
          data.artists.items[7]["genres"],
          data.artists.items[8]["genres"],
          data.artists.items[9]["genres"],
        ];
        setSubgenres(allgenres);
        console.log(allgenres);

        let allArtistsIds = [
          data.artists.items[0]["id"],
          data.artists.items[1]["id"],
          data.artists.items[2]["id"],
          data.artists.items[3]["id"],
          data.artists.items[4]["id"],
          data.artists.items[5]["id"],
          data.artists.items[6]["id"],
          data.artists.items[7]["id"],
          data.artists.items[8]["id"],
          data.artists.items[9]["id"],
        ];
        setArtistId(allArtistsIds);
        console.log(allArtistsIds);

        let allArtists = [
          data.artists.items[0]["name"],
          data.artists.items[1]["name"],
          data.artists.items[2]["name"],
          data.artists.items[3]["name"],
          data.artists.items[4]["name"],
          data.artists.items[5]["name"],
          data.artists.items[6]["name"],
          data.artists.items[7]["name"],
          data.artists.items[8]["name"],
          data.artists.items[9]["name"],
        ];
        setArtists(allArtists);
        console.log(allArtists);
        let arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        let randomNumber = Math.floor(Math.random() * arrayOfNums.length); // // random number from array of indices
        setIndex(randomNumber);
        console.log("this is random number" + index);
        let randomArtist = allArtists[randomNumber]; // random artist
        console.log("artist " + randomArtist);
        setCurrentArtist(randomArtist);

        // setCurrentGenre(data.response.currentGenre);
        // console.log("Line 198 front" + data.response.artists.items[0]['id']);

        // .catch((err) => console.error(`Error: ${err}`));
        
        let trackNames = []
       

        for (let i = 0; i < 10; i++){
           console.log("all tracks index  " + [index]);
           fetch(
           `https://api.spotify.com/v1/artists/${allArtistsIds[i]}/top-tracks?market=ES`,

          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
           ).then((response) => {
            console.log(
             response.json().then((data) => {
               let trackPreview = [
                data.tracks[0].name,
                data.tracks[1].name,
                data.tracks[2].name,
              ];
              trackNames.push(trackPreview)
              console.log(trackNames)
            })
          );
        })};
        setAllTracks(trackNames)
      });
      
  };
    for (let i = 0; i < 10; i++){
    console.log('this is array ',  allTracks)

  fetch(`https://itunes.apple.com/search?term=${currentArtist}&entity=musicTrack`)
  .then((response) => {
     response.json().then(
          (data) => {
            let trackPreview = data.results[0]['previewUrl']
            // console.log(data.results[0]['previewUrl'])
            setTrackAudio(trackPreview)
            // setInfo(data.results[0]['previewUrl'])
            // console.log(data.results[0].artworkUrl100)
              
          }
      );
  });
}

  // let handleArtistChosen = () => {
  //   let arrayOfNums = [];
  //   for (let i = 0; i < artists.length; i++) {
  //     arrayOfNums.push(i);
  //   }
  //   console.log(arrayOfNums);
  //   let randomNumber = Math.floor(Math.random() * arrayOfNums.length);
  //   console.log(randomNumber);
  //   let randomArtist = artists[randomNumber];
  //   setCurrentArtist(randomArtist);
  //   console.log("this is the artist" + randomArtist);

  //   // arrayOfNums = arrayOfNums.splice(randomNumber)
  // };

  let handleAnswer = (e) => {
    // setAnswer(e.target.value);

    console.log(e.target.value);
    if (currentArtist.indexOf() === e.target.value.indexOf()) {
      console.log("correct");
      setScore(score + 1);
      setCurrentArtist();
      console.log(currentTrack)
    } else {
      console.log("incorrect");
    }
  };

  //onClick={handleArtistChosen}

  return (
    <div>
      <select onChange={getGenres}>
        <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.value}>
            {genre.genre}
          </option>
        ))}
      </select>
      <a href="http://localhost:8888/login">LOGIN WITH SPOTIFY</a>
      <div className="subgenres-container">
        {subgenres.map((item, index) => (
          <button
            type="radio"
            key={item.index}
            value={item}
            onClick={handleAnswer}
          >
            {"\n" + item}
          </button>
        ))}
      </div>
      {score}
      <h2>Artist: {currentArtist}</h2>
      <h3>Track: {currentTrack}</h3>
      <Sound preview={trackAudio} />
      <img src={info.artworkUrl100} alt="backgroundimage"></img>{" "}
    </div>
  );
}

export default Game;
