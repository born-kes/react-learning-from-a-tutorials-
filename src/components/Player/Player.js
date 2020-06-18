import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";

export class Player extends Component {

    constructor(props) {
        super(props);
        this.play = false;
        this.timer = 0;
        this.delay = 500;
        this.prevent = false;
        this.repeat = false;
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
                    volume = {0.5}
                    onEnded={()=>{this.ended()}}
                    ref={(el)=> {this.ref = el} }
                />
                <div
                    className={`svg ${this.play}`}
                    onClick={()=>this.handleClick()}
                    onDoubleClick={()=>this.changeRepeat() }
                >
                    { (music.icon)? (
                        <img src={`${path}${music.icon}`} alt={music.name} title={music.name} />
                        ):(
                        <div>{music.name}</div>
                    )}
                </div>
            </div>
        )
    }

    start() {
        this.play = !this.play;

        if(this.play){
            this.ref.audioEl.current.play()
            this.playRepeat();
        }else{
            this.ref.audioEl.current.pause()
        }
    }
    ended() {
        if(this.repeat){
            this.ref.audioEl.current.play()
            this.playRepeat();
        }else{
            this.ref.audioEl.current.pause()
        }
    }
    handleClick() {
        let me = this;
        this.timer = setTimeout(() => {
            if (!me.prevent) {
                me.start();
            }
            me.prevent = false;
        }, me.delay);
    }
    changeRepeat() {
        console.log('repeat', this.ref.audioEl.current.currentTime);
        this.repeat = !this.repeat;

        this.playRepeat();
    }
    playRepeat() {
        if(this.repeat) {
            let timeToEnd = parseInt((this.ref.audioEl.current.duration - this.ref.audioEl.current.currentTime) * 1000) - 1;
            console.log('time to end', timeToEnd)

            setTimeout(() => {
                this.ref.audioEl.current.currentTime = 0
            }, timeToEnd);
        }
    }
}