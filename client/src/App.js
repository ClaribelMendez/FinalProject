import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Game from "./components/gameplay";
import { useState, useEffect } from "react";
import {
  accessToken,
  logout,
  getCurrentUserProfile,
} from "./components/spotify";
import Login from "./components/loginpage";
import Mainpage from './components/mainpage'
import Gameplay from './components/game'
import Profile from './components/profile'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);
    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  //   if (refreshToken) {
  //     fetch(`/refresh_token?refresh_token=${refreshToken}`)
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.error(err));
  //   }
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <Router>
            <ScrollToTop />
             <Routes>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Routes>
              <Route path="/" element={<Profile />}
              ></Route>
            </Routes>  
            <nav>
              <a href="/game">Play/Discover</a> &nbsp;
              <a href="/form">Playlists</a> &nbsp;
              <a href="/blogposts">About</a>
              <br></br>
            </nav>
             
          
            <Routes>
              <Route path="/game" element={<Game />}></Route>
            </Routes>  
           
            <Routes>
              <Route
                path="/game"
                element={<button onClick={logout}>Log Out</button>}
              ></Route>
            </Routes>
          </Router>
        )}
      </header>
      {/* <Overlay /> */}
      {/* <> 
                 

                  {profile && ( 
                    <div>
                      <h1>{profile.display_name}</h1>
                      <p>{profile.followers.total} Followers</p>
                      {profile.images.length && profile.images[0].url && (
                        <img src={profile.images[0].url} alt="Avatar"/>
                      )}
                    </div>
                  )} 
                 </> */}
      {/* <Game /> */}
      {/* <GenreData /> */}
      {/* <Sound /> */}
      {/* <Tracks /> */}
      {/* <Profile /> */}
      {/* <VideoPlayer /> */}
      {/* <AudioPlayer /> */}
    </div>
  );
}

export default App;
