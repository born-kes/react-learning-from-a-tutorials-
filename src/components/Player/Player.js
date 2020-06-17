import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";

export class Player extends Component {


    render() {
        console.log('player',this.props)
        const music = this.props.music;
        const index = this.props.index;
        const path = this.props.path;
        const id = `player${music.id}`;
        return (
            <div key={`player${music.id}`}>
                <ReactPlayer
                    id={id}
                    src={`${path}${music.src}`}
                    title={music.name}
                    // controls
                    volume = {0.5}
                    // ref={(el)=> music.ref = el }
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
        // const newMusicList = Object.assign([], this.state.activeMusic);
        // newMusicList[index].play = !newMusicList[index].play;
        // this.setState({ activeMusic: newMusicList });

        const el = document.getElementById(id);
        console.log(id, el)
        if(music.play){
            el.play()
        }else{
            el.pause()
        }
    }
}