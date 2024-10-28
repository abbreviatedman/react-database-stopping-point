import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function AllCharacters() {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      const response = await axios(`${process.env.REACT_APP_API_URL}/allCharacters`);
      setServerData(response.data);
    }

    getCharacters();
  }, [])

  return (
    <ul>
        {serverData.map((debut) => (
          <li key={debut._id}>
            <Link to={`/mcu/${debut.name}`}>{debut.name}</Link>
          </li>
        ))}
    </ul>
);
}

export default AllCharacters;