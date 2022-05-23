const Login = () => {

  const handleAboutMe = (e) => {
    window.location.href = "http://localhost:3000/about";
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0, 
      behavior: 'auto',
    });
  }

return (

  <div className='loginbackground'>
    <div className='loginpagebuttons'>
  <div className='login_button'>
    <a href="http://localhost:8888/login">
      Log in with Spotify
      </a>
      </div>
      <div className='findOut_button' onClick={handleAboutMe}>
  
      Find out more
      
      </div>
      </div>

      </div>
     


)
}


export default Login;
