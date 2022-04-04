import './App.css';
import Students from './components/students';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './components/post'


function App() {
  return (
    <><Router>
      <div className="App">
        <div className="content">
          <nav>

            <a href="/contacts">Students</a>  &nbsp;
              <a href="/Form">Form</a>
              {/* <li><a href="/whale">About Us</a></li> */}
            
          </nav>

          <Routes>
            <Route path="/contacts" element={<Students />} />
          </Routes>
        </div>
      </div>
    </Router><div>               
       <Post />
      </div></>
    
  );
}

export default App;



