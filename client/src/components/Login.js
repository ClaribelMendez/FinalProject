import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { loginUrl } from "./spotify";

const useStyles = makeStyles({
    login: {
        display: 'grid',
        placeItems: 'center',
        height: '70vh',
        width: '130vh',
        backgroundColor: 'black',
        marginLeft: "20vh",
    

        '& img':{
            width: '30%'
        },

        '& a':{
            padding: '20px',
            borderRadius: '99px',
            backgroundColor: '#1db954',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
        },

        '& a:hover':{
            backgroundColor:' white',
            borderColor: '#1db954',
            color: '#1db954',
        }
    },
});

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=cb79505b7a4e48258da5fc9f2d1672c2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Login() {
    const classes = useStyles()
    return (
        <div className={classes.login}>
            
      <div className='intune'>INTUNE</div>
            <a href={AUTH_URL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
