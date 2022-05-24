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
import Mainpage from "./components/mainpage";
import Gameplay from "./components/game";
import Profile from "./components/profile";
import Playlists from "./components/playlists";
import About from "./components/about";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  const [token, setToken] = useState(null);
  // const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);
    // const fetchData = async () => {
    //   try {
    //     const { data } = await getCurrentUserProfile();
    //     setProfile(data);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <Login /> 
        ) : (
          <Router>
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Routes>
              <Route path="/" element={<Profile />}></Route>
            </Routes>
            <nav>
              <a href="/game">Play/Discover</a> &nbsp;
              {/* <a href="/playlist">Playlists</a> &nbsp; */}
              <a href="/about">About</a>
              <br></br>
            </nav>
            <Routes>
              <Route
                path="/"
                element={<a href className='logout_button1'onClick={logout}>Log Out</a>}
              ></Route>
            </Routes>
            <Routes>
            <Route path="/playlists" element={<Playlists />}></Route>
          </Routes>
            <Routes>
              <Route path="/game" element={<Game />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/game"
                element={<a href className='logout_button'onClick={logout}>Log Out</a>}
              ></Route>
            </Routes>
          
            <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
              <Route
                path="/about"
                element={<a href className='logout_button'onClick={logout}>Log Out</a>}
              ></Route>
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App; 
