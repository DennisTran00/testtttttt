const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { MIDI_PATH, getMidi, saveMidi } = require('../controllers/MIDI_Controller');


router.get('/song', (req, res)=>{
    console.log("GETTING SONG");
    res.download(MIDI_PATH);
    /*getMidi()
    .then((data)=>{
        console.log(data);
        res.status(200).send(data);
    })
    .catch((err)=>{
        console.log(`[ERROR] Error in GET /song: ${err}`);
    });*/
});

router.post('/song', (req, res)=>{
    console.log("POST SONG");
    const song = req.body.song;
    saveMidi(song);
});


module.exports = router;