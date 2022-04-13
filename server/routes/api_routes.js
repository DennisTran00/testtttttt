const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { MIDI_PATH, getMidi, saveMidi } = require('../controllers/MIDI_Controller');

router.use(bodyParser.json());

router.get('/song', (req, res)=>{
    console.log("GETTING SONG");
    res.download(MIDI_PATH);
});

router.post('/song', (req, res)=>{
    console.log("POST SONG");
    saveMidi(req.body);
});


module.exports = router;