import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Tracks from "./Tracks";
import Gameplay from "./game";

function Game() {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("");
  const [token, setToken] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [score, setScore] = useState(0);
  const [info, setInfo] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentArtist, setCurrentArtist] = useState("");
  const [image, setImage] = useState([]);
  const [music, setMusic] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [tracks, setTracks] = useState("");
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState(false);
  const [word, setWord] = useState("");
  const [showButton, setShowButton] = useState(false);

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
    setGenre(genre);
    setShow(true);

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
        // console.log(allgenres);
        setInfo(data);
        // console.log(data)
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

        // setCurrentArtist(data.artists.items[index]['name'])
        let allArtistImages = [
          data.artists.items[0]["images"][1]["url"],
          data.artists.items[1]["images"][1]["url"],
          data.artists.items[2]["images"][1]["url"],
          data.artists.items[3]["images"][1]["url"],
          data.artists.items[4]["images"][1]["url"],
          data.artists.items[5]["images"][1]["url"],
          data.artists.items[6]["images"][1]["url"],
          data.artists.items[7]["images"][1]["url"],
          data.artists.items[8]["images"][1]["url"],
          data.artists.items[9]["images"][1]["url"],
        ];
        setImage(allArtistImages);
        // setArtistId(data.artists.items[index]['id'])
        console.log("image", image);

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
      });
      setShowButton(true)
  };

  let handleButton = (e) => {
    setShow(false);
    window.location.href="http://localhost:3000/gameplay"
  };

  let handleAnswer = (e) => {
    if (subgenres[index].toString() === e.target.value) {
      setWord("YOU GOT IT!");
      setScore(score + 1);
      if (index < 10) {
        setIndex(index + 1);
      }
      if (index === 10) {
        showButton(true);
      }
    } else {
      setWord("NOT QUITE...");
      setIndex(index + 1);
    }
    if (index === 10) {
      showButton(true);
    }
  };

  return (
    <div className="game_bg">
      <div className="container">
        <div className="word">{word}</div>
        <div className='dropdown'>
      {!show ? (
        <select onChange={getGenres} >
          <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.value}>
              {genre.genre}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
      </div>
        <div className="subgenres-container">
          {show
            ? subgenres.map((item, index) => (
                <button
                  type="radio"
                  key={item.index}
                  value={item}
                  onClick={handleAnswer}
                  className="glow-on-hover"
                >
                  {"\n" + item}
                </button>
              ))
            : ""}
        </div>
        {show ? score : ""}

        {/* <div id="artistInfo">
          {show ? <h2 className="artistInfo">Artist: {artists[index]}</h2> : ""} */}
         <Gameplay 
         image = {image[index]}
         />
          <button onClick={handleButton}>Play</button>
        </div>
        <Tracks index={index} info={artistId[index]} image={image[index]} />

        {/* <Playlist
    genre = {genre}
     /> */}
      </div>
    
  );
}

export default Game;
