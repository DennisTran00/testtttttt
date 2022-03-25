const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { MIDI_PATH, getMidi, saveMidi } = require('../controllers/MIDI_Controller');

router.use(bodyParser);

router.get('/song', (req, res)=>{
    console.log("GETTING SONG");
    getMidi()
    .then((data)=>{
        console.log(data.buffer);
        res.status(200).send(data.buffer);
    })
    .catch((err)=>{
        console.log(`[ERROR] Error in GET /song: ${err}`);
    });
});

router.post('/song', (req, res)=>{
    const song = req.body.song;
    saveMidi(song);
});


module.exports = router;