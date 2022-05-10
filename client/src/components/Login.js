import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    login: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        backgroundColor: 'black',

        '& img':{
            width: '50%'
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
function Login() {
    const classes = useStyles()
    return (
        <div className={classes.login}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY40JWs9PeIgxj878HvqjMHW-_dmXOVWbKfg&usqp=CAU" alt="Spotify-Logo"/>
            <a href="#">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
