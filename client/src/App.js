import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './components/game';
import Music from './components/Music';
import Sound from './components/sound';
import Tracks from './components/Tracks';
// import MediaControlCard from './components/MediaCard';
// import ResponsiveAppBar from './components/navbar';
import Login from './components/Login';
// import Dashboard from './components/dashboard';
// 



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
 
<div className='navbar'>
  <a href="/login">Login/Logout</a>  &nbsp;
  <a href="/genres">Game</a>
  </div>
<br></br>
 <br></br>
<br></br>
<br></br>

{/* < GamePlayBackground /> */}
{/* </nav> */}
<Routes>
<Route path='/genres' element={ <Music />} />
</Routes>
 <Routes>
  
<Route path="/login" element={ <Login />} />
</Routes>
        
<Routes>
      
</Routes>
  

</Router> 
{/* {code ? <Dashboard code={code} /> : <Login />}   */}
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



