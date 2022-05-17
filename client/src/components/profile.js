import { accessToken, logout } from './spotify';

function Profile(){
    
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
                console.log(data)
           
          })
        );
      });



    return (
        <div>
    
                        </div>
    )
}

export default Profile