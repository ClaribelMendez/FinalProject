import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Tracks from "./Tracks";
import { Modal, Button} from "react-bootstrap";
import Playlist from './playlist'

function Game(props) {
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
  const [modal, setModal] = useState(false);
  const [playlistButton, setPlaylistButton] = useState(false)
  

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);


  let analysis1 = props.analysis1

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
    }

  // console.log(allArtists);
  // let arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let randomNumber = Math.floor(Math.random() * arrayOfNums.length); // // random number from array of indices
  // setIndex(randomNumber);
  // console.log("this is random number" + index);
  // let randomArtist = allArtists[randomNumber]; // random artist
  // console.log("artist " + randomArtist);
  // setCurrentArtist(randomArtist);

  // setCurrentGenre(data.response.currentGenre);
  // console.log("Line 198 front" + data.response.artists.items[0]['id']);

  // .catch((err) => console.error(`Error: ${err}`));

  //       let trackNames = []

  // let trackPreview = allTracks[0]
  // console.log('track preview line 147' , trackPreview)

  // console.log('this is array ',  allTracks)
  // let trackPreview = allTracks[index][0].split(' ').join('+')
  // console.log(trackPreview)
  // fetch(`https://itunes.apple.com/search?term=${allTracks[index]}&entity=musicTrack`)
  // .then((response) => {
  //    response.json().then(
  //         (data) => {
  //           let trackPreview = data.results[0]['previewUrl']
  //           console.log('track preview', trackPreview)
  //           console.log(data.results[0]['name'])

  //           // console.log(data.results[0]['previewUrl'])
  //           setTrackAudio(trackPreview)
  //           // setInfo(data.results[0]['previewUrl'])
  //           // console.log(data.results[0].artworkUrl100)

  //         }
  //     );
  // })

  // let artistName = currentArtist.split(' ').join('+')
  // fetch(`https://itunes.apple.com/search?term=${artistName}`)
  // .then((response) => {
  //    response.json().then(
  //         (data) => {
  //           // console.log(data)
  //           setMusic(data.results[0])

  //         }
  //     );
  // });

  // let chooseIndex = () => {
  //   let arrayOfNums = [];
  //   for (let i = 0; i < 10; i++) {
  //     arrayOfNums.push(i);
  //   }
  //   console.log(arrayOfNums);
  //   let randomNumber = Math.floor(Math.random() * arrayOfNums.length);
  //   console.log(randomNumber);
  // let randomArtist = artists[randomNumber];
  // setCurrentArtist(randomArtist);
  // console.log("this is the artist" + randomArtist);

  // arrayOfNums = arrayOfNums.splice(randomNumber)
  // };

  let handleAnswer = (e) => {
    if(index === 10){
      setShow(false)
      setPlaylistButton(true)
     }
    if (subgenres[index].toString() === e.target.value) {
      console.log("correct");
      setScore(score + 1);
      setIndex(index+1)
      
    } else {
      console.log("end of game");
      setIndex(index + 1);
    }
  
  };

  let playlist = (e) => {
    window.location.href='http://localhost:3000/playlist'
  }

  return (
        
    <div id='gamePage'>
    <div className="container">
      <div className={!show ? "dropdownContainer" : ''}>
       

      <div className='instructions'>

    </div>
    {!show ? (

        <select onChange={getGenres} className='dropdown'>
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

      {playlistButton ? <button onClick={playlist}>You earned A playlist! Click here to check it out</button> : '' }
      
      <div className={show ? "subgenres-container" : ''}>
      {show
        ? (subgenres.map((item, index) => (
            <button
              type="radio"
              key={item.index}
              value={item}
              onClick={handleAnswer}
            className="glow-on-hover">
           {"\n" + item}
            </button>
          )))
        : ("")}
        </div>
        
        <div className='score'>
      {show ? ("score " ) : ('')} 
       {show ? score : ""}
      </div>

        <div id="artistInfo">
      {show ? (<h2 className="artistInfo">{artists[index]}</h2> ): ""}

  {show ?
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={image[index]} alt="Artist" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      danceability: .75
      <br></br>
      energy: .29
      <br></br>
      tempo: 140.134
    </div>
  </div>
</div> 
: "" } 

      </div>

      <Tracks index={index} info={artistId[index]} image={image[index]} />
{/* 
     <Playlist   
      genre = {genre}
      />    */}

    </div>
    </div>
  );
}

export default Game;
