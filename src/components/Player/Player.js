import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";

export class Player extends Component {

    render() {
        const prefix = this.props.prefix;
        const music = this.props.music;
        const path = this.props.path;
        const id = `${prefix}-${music.id}`;
        return (
            <div key={id}>
                <ReactPlayer
                    id={id}
                    src={`${path}${music.src}`}
                    title={music.name}
                    volume = {0.5}
                    ref={(el)=> {this.ref = el} }
                />
                <div className={`svg ${music.play}`} onClick={()=>this.start(id, music)}>
                    { (music.icon)? (
                        <img src={`${path}${music.icon}`} alt={music.name} title={music.name} />
                        ):(
                        <div>{music.name}</div>
                    )}
                </div>
            </div>
        )
    }

    start(id, music) {
        music.play = !music.play;

        if(music.play){
            this.ref.audioEl.current.play()
        }else{
            this.ref.audioEl.current.pause()
        }
    }
}