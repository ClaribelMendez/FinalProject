import './App.css';
import Blog from './components/blogposts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Post from './components/post' 
import Form from './components/form'



function App() {
  return (
    <><Router>
      <div className="App">
        
        <div className="content">
  
          <nav>

            <a href="/Contact">Contact</a>  &nbsp;
              <a href="/form">Form</a>
              {/* <li><a href="/whale">About Us</a></li> */}
            
          </nav>

          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
          <Routes>
            <Route path="/Blog" element={ <Blog />} />
          </Routes>
        </div>
      </div>
    </Router><div>               
       {/* <Post /> */}
      </div></>
    
  );
}

export default App;



