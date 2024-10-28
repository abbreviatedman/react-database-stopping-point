const express = require('express');
const {
    getAllCharacters,
    createOneCharacter,
    getCharacterByName,
    deleteCharacter,
} = require('../controllers/McuController');

const router = express.Router();

// GET request to localhost:3001/api/allCharacters
router.get('/allCharacters', getAllCharacters);
// POST request to localhost:3001/api/createOneCharacter
router.post('/createOneCharacter', createOneCharacter);
// GET request to localhost:3001/api/oneCharacter
router.get('/oneCharacter/:name', getCharacterByName);
// DELETE request to localhost:3001/api/deleteCharacter
router.delete('/deleteCharacter/:name', deleteCharacter);

module.exports = router;