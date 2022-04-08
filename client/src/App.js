import './App.css';
// import Blog from './components/blogposts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './components/post' 
import Form from './components/form'
import BlogPosts from './components/blogposts'
import Home from './components/home'





function App() {
  return (
    <><Router>
      <div className="App">
        
        <div className="content">
  
          <nav>

            <a href="/Contact">Contact</a>  &nbsp;
              <a href="/form">Form</a>  &nbsp;
              <a href="/blogposts">Blogposts</a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

            
          </nav>
          <Routes>
            <Route path='/' element={ <Home />} />
            </Routes>
          <Routes>
            <Route path="/blogposts" element={ <BlogPosts />} />
          </Routes>
          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
          <Routes>
      <Route
        path="/blogposts/:id"
        element={<Post />}
      />
    </Routes>
  
        
        </div>
      </div>
    </Router><div>               
       {/* <Post /> */}
      </div></>
    
  );
}

export default App;



