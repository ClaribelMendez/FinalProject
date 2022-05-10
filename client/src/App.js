import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './components/game';
import Music from './components/music';
import Sound from './components/sound';
import Tracks from './components/tracks';
import MediaControlCard from './components/mediacard';
// import ResponsiveAppBar from './components/Navbar';
import Login from './components/login';
import Dashboard from './components/dashboard';




function App() {
  const code = new URLSearchParams(window.location.search).get('code')
    return (
      
  
    
   <div className='container'>
  
    {/* <input type="button" value="play" onClick={() => play()} />
      <audio
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
        ref={audioRef}
      ></audio> */}
      {/* <ResponsiveAppBar /> */}


    <Router>
 

  <a href="/login">Login</a>  &nbsp;
  <a href="/game">Music</a>
<br></br>
 <br></br>
<br></br>
<br></br>

{/* < GamePlayBackground /> */}
{/* </nav> */}
<Routes>
<Route path='/game' element={ <Game />} />
</Routes>
 <Routes>
<Route path="/login" element={ <Login />} />
</Routes>
        
<Routes>
      
</Routes>
  

</Router> 
{code ? <Dashboard code={code} /> : <Login />}  
      {/* <MediaControlCard /> */}
      {/* <Tracks /> */}
      {/* <Game /> */}
      {/* <Music />
      <Sound /> */}
  
{/* <Post /> */}
</div>
    
  );
}

export default App;



