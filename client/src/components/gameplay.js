import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Tracks from "./Tracks";
import Playlists from "./playlists";

function Game(props) {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState(" ");
  const [token, setToken] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [score, setScore] = useState(0);
  const [info, setInfo] = useState([]);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [tracks, setTracks] = useState(" ");
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState(false);
  const [playlistButton, setPlaylistButton] = useState(false);
  // const [hidePlaylist, setHidePlaylist] = useState(false);

 

  const loadGenres = () => {
    fetch("/genres")
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


    fetch(`/game?genre=${genre}&token=${token}`, {
      method: "GET",
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
  };

  //  const audio = new Audio(
  //   scclient/public/mixkit-game-flute-bonus-2313.wav"
  //  );

  let handleAnswer = (e) => {
    if (index === 9) {
      setShow(false);
      setPlaylistButton(true);
      // setHidePlaylist(true)
      
      window.location.href = "/playlists";
      //  audio.play()
    }
    if (subgenres[index].toString() === e.target.value) {
      console.log("correct");
      setScore(score + 1);
      setIndex(index + 1);
    } else {
      console.log("end of game");
      setIndex(index + 1);
    }
  };

  return (
    <div id="gamePage">
      <div className="container">
        <div className={!show ? "dropdownContainer" : ""}>
          <div className="instructions">
            {!show ? (
              <select onChange={getGenres} className="dropdown">
                <option value="⬇️ Select a genre ⬇️">
                  {" "}
                  -- Select a genre --{" "}
                </option>
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
          {!show ? (
            <div className="instructions">
              Begin by choosing a genre to see:
              <ul>
                <li>Image of the current Artist.</li>
                <li>
                  An audio analysis such as danceability/energy/tempo of playing
                  track by hovering over the image.
                </li>
                <li>Three 30s track samples to listen to.</li>
              </ul>
              There are 10 artists to match to the subgenres category the artist
              is labelled as according to Spotify.
              <br></br>
              When the game is over, you will see a list of playlists from this
              category.
              <br></br>
              <br></br>
              Have fun, hope you find some new tunes you enjoy!
            </div>
          ) : (
            " "
          )}

          <div className={show ? "subgenres-container" : ""}>
            {show
              ? subgenres.map((item, index) => (
                  <div className="answer_buttons">
                    <button
                      type="radio"
                      key={item.index}
                      value={item}
                      onClick={handleAnswer}
                      className="glow-on-hover"
                    >
                      {"\n" + item}
                    </button>
                  </div>
                ))
              : ""}
          </div>

          <div className="score">
            {show ? "Correct / " : ""}
            {show ? score : ""}
          </div>

          <div className="artist_container">
            <div id="artistInfo">
              {show ? <h2 className="artistInfo"> {artists[index]}</h2> : ""}

              {show ? (
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={image[index]}
                        alt="Artist"
                        style={{ width: "300px", height: "300px" }}
                      />
                    </div>
                    <div class="flip-card-back">
                      <br></br>
                      danceability: .75
                      <br></br>
                      energy: .29
                      <br></br>
                      tempo: 140.134
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            {show ? (
              <Tracks
                index={index}
                info={artistId[index]}
                image={image[index]}
              />
            ) : (
              ""
            )}

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
