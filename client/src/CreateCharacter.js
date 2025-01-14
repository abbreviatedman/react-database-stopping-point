import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCharacter() {
    const [character, setCharacter] = useState({
        name: '',
        debutFilm: '',
        debutYear: 0,
    })

    const navigate = useNavigate();

    async function postCharacter() {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/createOneCharacter`, character, {
                "Access-Control-Allow-Origin": "*"
            })

            navigate('/mcu');
        } catch(error) {
            console.log(error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        postCharacter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={character.name}
                    onChange={(e) => setCharacter({...character, name: e.target.value})}
                />
            </label>
            <label>
                Debut Film
                <input
                    type="text"
                    value={character.debutFilm}
                    onChange={(e) => setCharacter({...character, debutFilm: e.target.value})}
                />
            </label>
            <label>
                Debut Year
                <input
                    type="text"
                    value={character.debutYear}
                    onChange={(e) => setCharacter({...character, debutYear: e.target.value})}
                />
            </label>
            <button type="submit">Create Character</button>
        </form>
    )
}

export default CreateCharacter;