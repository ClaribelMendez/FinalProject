import { accessToken } from "./spotify";
import Playlist from "./playlist";
import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import SelectSearch from "react-select-search";

function Profile() {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");


  fetch(
    "https://api.spotify.com/v1/me",

    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }
  ).then((response) => {
    console.log(
      response.json().then((data) => {
        console.log(data["display_name"]);
        setName(data["display_name"]);
        setID(data["id"]);
        console.log(ID);
      })
    );
  });

  const handleStart = (e) => {
    window.location.href = "/game";
  };






  return (
    
      <div className="mainpage">
        <div id="logo">
          <h1>InTune </h1>
        </div>
        <span className="tag">
          CONNECTING YOU TO THE
          <br></br>
          SOUNDS YOU LOVE AND
          <br></br>
          SOON TO DISCOVER.
          <br></br>A MUSIC TRIVIA GAME
          <br></br>
          TO LEARN SUBGENRES.
          <br></br>
          <br></br>
      
          Not {name} ? /
         
        </span>
        
          
          
     
        <br></br>
        <br></br>
        <br></br>

         <div id='start_button'>
        <button type="button" onClick={handleStart} className="start_button">
          START
        </button>
        <div> 
     


          
        </div>

        </div> 
         </div>
    
    /* <Playlist id={ID} /> */
    
  );
}

export default Profile;
