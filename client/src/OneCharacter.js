import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OneCharacter() {
    const {name} = useParams();
    const [character, setCharacter] = useState({
        name: '',
        debutFilm: '',
        debutYear: 0,
    })

    useEffect(() => {
        async function getCharacter() {
            const response = await axios(`${process.env.REACT_APP_API_URL}/oneCharacter/${name}`);
            setCharacter(response.data);
        }

        getCharacter();
    }, [name])

    return (
        <div>
            <h1>{character.name}</h1>
            <h5>Debuted in: {character.debutFilm}</h5>
            <h5>Released in: {character.debutYear}</h5>
        </div>
    )
}

export default OneCharacter;