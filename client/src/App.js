import './App.css';
// import Blog from './components/blogposts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Post from './components/post' 
import Form from './components/form'
import BlogPosts from './components/blogposts'



function App() {
  return (
    <><Router>
      <div className="App">
        
        <div className="content">
  
          <nav>

            <a href="/Contact">Contact</a>  &nbsp;
              <a href="/form">Form</a>
              <a href="/blogposts">Blogposts</a>

              {/* <li><a href="/whale">About Us</a></li> */}
            
          </nav>
          <Routes>
            <Route path="/blogposts" element={ <BlogPosts />} />
          </Routes>
          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
        
        </div>
      </div>
    </Router><div>               
       {/* <Post /> */}
      </div></>
    
  );
}

export default App;



