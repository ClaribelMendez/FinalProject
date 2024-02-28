import "./App.css";
import "./css/login.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Game from "./components/gameplay";
import { useState, useEffect } from "react";
import {
  accessToken,
  logout,
} from "./components/spotify";
import Login from "./components/Login";
import Profile from "./components/profile";
import Playlists from "./components/playlists";
import About from "./components/about";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <Router>
            <nav>
              <Link to="/game">Play/Discover</Link>
              <Link to="/about">About</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/game" element={<Game />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <a href="/" className="logout_button" onClick={logout}>Log Out</a>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
