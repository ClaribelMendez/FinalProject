import { useState, useEffect } from "react";
import GenreData from "./genredata";
import { accessToken } from "./spotify";


// INCLUDE?

function Game() {
  const [genres, setGenres] = useState([]);
  const [token, setToken] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [currentArtist, setCurrentArtist] = useState(" ");
  const [score, setScore] = useState("Score:");
  const [currentTrack, setCurrentTrack] = useState('')

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
        let arrayOfNums = [];
        for (let i = 0; i < allArtists.length; i++) {
          arrayOfNums.push(i); // an array of indices to be randomized later
          console.log(arrayOfNums);
        }
        console.log("array of index numbers " + arrayOfNums);
        let randomNumber = Math.floor(Math.random() * arrayOfNums.length); // // random number from array of indices
        console.log("random number " + randomNumber);
        let randomArtist = allArtists[randomNumber]; // random artist
        console.log(randomArtist);
        setCurrentArtist(randomArtist);
        console.log("this is the artist" + randomArtist);

        // arrayOfNums = arrayOfNums.splice(randomNumber)

        // setCurrentGenre(data.response.currentGenre);
        // console.log("Line 198 front" + data.response.artists.items[0]['id']);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  let artistid = '0TnOYISbd1XYRBk9myaseg'
fetch(`https://api.spotify.com/v1/artists/${artistid}/top-tracks?market=ES`, {
                method: 'GET', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => {
                    console.log(response.json().then(
                        (data) => {
                              setCurrentTrack(data.tracks[0]['preview_url'])
                            console.log(data.tracks[0]['preview_url'])
                            console.log(data.tracks[1]['preview_url'])
                            console.log(data.tracks[2]['preview_url'])
                        }
                    ));
                });
//         })
// )})})


    //   let artistName = currentArtist.split(' ').join('+')

    // fetch(`https://itunes.apple.com/search?term=${artistName}`)
    // .then((response) => {
    //    response.json().then(
    //         (data) => {
    //          console.log(data)

    
    //         }
    //     );
    // });
    

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
    } else {

      console.log("incorrect");
      
    }
  };

  //onClick={handleArtistChosen}

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

      <a href="http://localhost:8888/login">LOGIN WITH SPOTIFY</a>

          <div className='subgenres-container'>
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

      <h2>{currentArtist}</h2>
      {score}
      {currentTrack}
    </div>
  );
}

export default Game;