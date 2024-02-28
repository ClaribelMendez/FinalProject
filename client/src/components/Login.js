const Login = () => {
  return (
    <>
      <div className="container">
        <h1 id="title">
          InTune
        </h1>
        <div>
          <img src={'/icon.ico'} />
        </div>
        <div className='loginbutton'>
          <span><a href="http://localhost:3002/login">Log in with Spotify</a></span>
        </div>
      </div>
    </>
  );
}

export default Login;
