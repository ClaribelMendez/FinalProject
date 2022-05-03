import {Howl} from 'howler'


function Sound() {



    let track_preview = 'https://p.scdn.co/mp3-preview/bc3ab974555f9136cdbc25a003b55f93ca4b3c78?cid=774b29d4f13844c495f206cafdad9c86'

    function soundPlay(src) {
      const sound = new Howl ({
          src,
          html5: true
      })
        sound.play()
    }


    return (
        <button
            onClick={() => soundPlay(track_preview)}>Sound</button>
    )

}



export default Sound