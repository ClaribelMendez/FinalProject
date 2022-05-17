import { accessToken, logout } from './spotify';
import { useState, useEffect } from 'react'

function Profile(){
const [name, setName] = useState('')    
    
    fetch(
        'https://api.spotify.com/v1/me',
    
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      ).then((response) => {
        console.log(
          response.json().then((data) => {
                console.log(data['display_name'])
                setName(data['display_name'])
           
          })
        );
      });

    const postUser = () => {
      fetch('http://localhost:8888/profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
      });
    }



    return (
        <div>
            {name}
            <button type="button" onClick={postUser}>Click Me!</button>
                        </div>
    )
}

export default Profile