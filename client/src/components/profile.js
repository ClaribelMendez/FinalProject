import { useEffect, useState } from "react";
import { accessToken } from "./spotify";

function Profile() {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data["display_name"]);
        setName(data["display_name"]);
        setID(data["id"]);
        console.log('from profile', ID);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  const handleStart = () => {
    window.location.href = "/game";
  };

  return (
    <div className="mainpage">
      <div id="logo">
        <span>Not {name} ? /</span>
        <br />
        <br />
        <br />
        <div id='start_button'>
          <button type="button" onClick={handleStart} className="start_button">
            START
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
