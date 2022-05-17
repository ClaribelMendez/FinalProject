// import { accessToken } from './spotify'

// function Playlist(props){

//     let genre = props.genre

//     fetch(
//         `https://api.spotify.com/v1/search?q=${genre}e&type=playlist`,
    
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + accessToken,
//           },
//         }
//       ).then((response) => {
//         console.log(
//           response.json().then((data) => {
//                 console.log(data.playlists)
           
//           })
//         );
//       });

//       let userIdURL = `https://api.spotify.com/v1/users/${userId}/playlists`
//       let data = '--data'

//       fetch(
//         `https://api.spotify.com/v1/users/${userId}/playlists` `${data}` + "{\"name\":\"New Playlist\",\"description\":\"New playlist description\",\"public\":false}"
//       )
//         return (
//         <div>

//         </div>
//     )
// }
// export default Playlist