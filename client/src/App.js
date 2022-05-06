import './App.css';
// import Blog from './components/blogposts';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './components/game'
// import GamePlayBackground from './components/gameplaybackground';
import Sound from './components/sound.js'





function App() {
  // const myRef = React.useRef(null);

  // const audioRef = myRef(null);
  // const play = (url) => {
  //   audioRef.current.play(); 
  //  }
    return (
      
  <div>
    {/* <input type="button" value="play" onClick={() => play()} />
      <audio
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
        ref={audioRef}
      ></audio> */}
      <Game />
      
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



