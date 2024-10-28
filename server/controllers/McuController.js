const Mcu = require('../models/McuModel');

async function getAllCharacters(req, res) {
    try {
      const characters = await Mcu.find({});
      res.json(characters);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

// /oneCharacter/:name
async function getCharacterByName(req, res) {
    try {
        const foundCharacter = await Mcu.findOne({name: req.params.name})
        res.json(foundCharacter);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}

async function createOneCharacter(req, res) {
    try {
        const newCharacter = req.body;
        const characterFromDb = await Mcu.create(newCharacter);
        res.json(characterFromDb);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}

async function deleteCharacter(req, res) {
    try {
        const deletedCharacter = await Mcu.findOneAndDelete({name: req.params.name});
        res.json(deletedCharacter);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {
    getAllCharacters,
    createOneCharacter,
    getCharacterByName,
    deleteCharacter,
}