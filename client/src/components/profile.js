import { accessToken } from './spotify';
import Playlist from './playlist';
import { useState } from 'react'

function Profile(){
const [name, setName] = useState('')    
const [ID, setID] = useState('')    

    
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
                setID(data['id'])
           
          })
        );
      })
//       .then(result => {
//         // Make post request
//         fetch('http://localhost:8888/profile', {
//            method: "POST",
//            body: JSON.stringify(result)
//         })
//        .then(data => {
//         // do what you need with the data from the post request
//     });
// });
      // const navigate = useNavigate()
    // const postUser = () => {
      
    //   fetch('http://localhost:8888/profile', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({name}, {})
    //   })
    //   window.location.href="http://localhost:3000/game"
    // }

    const handleStart = (e) => {  
        window.location.href="http://localhost:3000/game"
    }


    return (
        <div className='mainpage'>
              <h1>  Hello:
              {name}</h1>
            <button type="button" onClick={handleStart} className='startButton'>START</button>
                        </div>

        // <Playlist
        // id = {id}
        // />

    )
}

export default Profile