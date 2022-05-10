import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './components/game';
import Music from './components/music';
import Sound from './components/sound';
import Tracks from './components/tracks';
import MediaControlCard from './components/mediacard';
// import ResponsiveAppBar from './components/Navbar';
// import Login from './components/login';
// import Dashboard from './components/dashboard';



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
      {/* {code ? <Dashboard code={code} /> : <Login />}   */}
      <MediaControlCard />
      <Tracks />
      <Game />
      <Music />
      <Sound />
    </div>

//     <><Router>
//       <div className="App">
        
//         <div className="content">

//           {/* <nav> */}

//             <a href="/Contact">Contact</a>  &nbsp;
// ]              <a href="/blogposts">Blogposts</a>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>

//             {/* < GamePlayBackground /> */}
//           {/* </nav> */}
//           <Routes>
//             <Route path='/' element={ <Home />} />
//             </Routes>
//           <Routes>
//             <Route path="/blogposts" element={ <BlogPosts />} />
//           </Routes>
        
//           <Routes>
      
//     </Routes>
  
        
//         </div>
//       </div>
//     </Router><div>               
//        {/* <Post /> */}
    
  );
}

export default App;



