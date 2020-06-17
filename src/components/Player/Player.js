import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";

export class Player extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

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
                    // controls
                    volume = {0.5}
                    ref={this.ref}
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
        console.log(this.ref)

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