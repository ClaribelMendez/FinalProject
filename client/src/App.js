import './App.css';
// import Blog from './components/blogposts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BlogPosts from './components/blogposts'
import Home from './components/home'
// import GamePlayBackground from './components/gameplaybackground';





function App() {
  return (
    <><Router>
      <div className="App">
        
        <div className="content">

          {/* <nav> */}

            <a href="/Contact">Contact</a>  &nbsp;
]              <a href="/blogposts">Blogposts</a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

            {/* < GamePlayBackground /> */}
          {/* </nav> */}
          <Routes>
            <Route path='/' element={ <Home />} />
            </Routes>
          <Routes>
            <Route path="/blogposts" element={ <BlogPosts />} />
          </Routes>
        
          <Routes>
      
    </Routes>
  
        
        </div>
      </div>
    </Router><div>               
       {/* <Post /> */}
      </div></>
    
  );
}

export default App;



