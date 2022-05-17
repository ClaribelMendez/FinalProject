import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Game from "./gameplay";

function Dropdown() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [genreSelection, setGenreSelection] = useState("");
  const loadGenres = () => {
    fetch("http://localhost:8888/genres")
      .then((response) => response.json())
      .then((genres) => {
        setGenres(genres);
      });
  };

  const getGenres = (e) => {
    e.preventDefault();
    let genre = e.target.value;
    setGenreSelection(genre);
    navigate('/game')
  };

  useEffect(() => {
    loadGenres();
  }, []);
  return (
    <div>
      <select onChange={getGenres}>
        <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.value}>
            {genre.genre}
          </option>
        ))}
      </select>

      <Game genre={genreSelection} />
    </div>
  );
}

export default Dropdown;
