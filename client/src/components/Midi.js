
import React from "react";
import MidiPlayer from "react-midi-player";

class Midi extends React.Component{

    async componentDidMount(){
        this._comp = (<MidiPlayer data={await this.LoadMidi()}/>);
        console.log(this._data);
        this._loaded = true;
        this.forceUpdate();
    }

    LoadMidi(){
        return fetch('http://localhost:3001/song')
        .then(res=> res.blob()).then((res => this._data = res.arrayBuffer()))
        .catch((err)=>{console.log(`ERROR: ${err}`);})
    }

    render(){
        if(this._loaded){
            return this._comp
        }else{
            return <h1>Loading...</h1>
        }
    }
}

export default Midi;