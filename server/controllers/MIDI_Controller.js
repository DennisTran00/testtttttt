
const path  = require('path');
const fs    = require('fs');

const MIDI_PATH = path.resolve(__dirname, "../res/piece.mid");

const getMidi = async ()=>{
    return await fs.readFileSync(MIDI_PATH);
}

const saveMidi = async (song)=>{
    console.log(`SAVING MIDI`);
    fs.writeFileSync(MIDI_PATH, JSON.stringify(song));
}

module.exports = {
    MIDI_PATH,
    getMidi,
    saveMidi
}