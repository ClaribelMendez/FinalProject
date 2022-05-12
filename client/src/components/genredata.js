import Genres from './genres';
import { useState, useEffect } from 'react'


function GenreData() {
    // const [token, setToken] = useState(null);
    const [subgenres, setSubgenres] = useState([null]);
  
    useEffect(() => {
    //   setSubgenres(genres);
      const fetchData = async () => {
        try {
          const { data } = await GenreData();
          setSubgenres(data.artists.items[0]['id']);
          console.log(data)
        } catch(e) {
          console.error(e);
        }
      };
  
      fetchData();
    }, []);

        return(
            <h1>
                {subgenres}
            </h1>
        )
}
    export default GenreData