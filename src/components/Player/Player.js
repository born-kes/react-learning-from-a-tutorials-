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

                     controls // TODO active view controllers

                    volume = {0.5}
                    ref={this.ref}
                    // TODO get ref.current
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
            // TODO look ref and current.audioEl
        console.log( this.ref.current.audioEl);
        
        music.play = !music.play;
        // const newMusicList = Object.assign([], this.state.activeMusic);
        // newMusicList[index].play = !newMusicList[index].play;
        // this.setState({ activeMusic: newMusicList });

        // TODO This is working
        const el = document.getElementById(id);
        // myśle że tego nie robi się w ten sposób
        console.log(id, el)
        if(music.play){
            el.play()
        }else{
            el.pause()
        }
        // TODO This don't work
        // this.ref.play()
        // this.ref.current.play()
        // this.ref.current.audioEl.play()
    }
}