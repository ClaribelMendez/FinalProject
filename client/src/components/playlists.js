import React from 'react'

const Playlists = () => {
  return (
    <div className='playlists'>
      <h1>Playlists</h1>
      Click on the name of the playlist to check these out on Spotify! 
      <br></br>
      <br></br>
    <div className='playlist_info'>
      <img
                      src={'https://i.scdn.co/image/ab67706c0000bebb774c35b4cf17ad95cd25c170'}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ='https://open.spotify.com/playlist/5U6pDCKthOnaEtvBGJ1R2v'>Afro Latin House</a>
                    <br></br>

                     Description: "Selection of our favourite house tracks. Updating our Playlist every Friday. Playlist curated by Triplepoint.
                     <br></br>
      <br></br>
                     <img
                      src={'https://i.scdn.co/image/ab67706c0000bebb9d07b67fe8b5af3b2b3c64e7'}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ="https://api.spotify.com/v1/playlists/03g5NZj1QR8YYsgITELxbl">"Pop Latino-Reggaeton-Latin House"</a>
                    <br></br>

                     Description: "Una Playlist che racchiude tutto il mondo  Caliente , e che sicuramente non potrà non farvi ballare"
                     <br></br>
      <br></br>
                     <img
                      src={'https://i.scdn.co/image/ab67706c0000bebb64868e0252be5c69c3d393f2'}
                      alt="album cover"
                      style={{ width: "100px", height: "100px" }}
                    />     
                    <br></br>
                    < a href ="https://open.spotify.com/playlist/5TzoOqGXpPC13KwGwHjRsd">"Latino House Party"</a>
                    <br></br>

                     Description: "if u ever lose ur latine friends just shuffle this playlist and theyll flock to u"
                     </div>        
    </div>
  )
}

export default Playlists
