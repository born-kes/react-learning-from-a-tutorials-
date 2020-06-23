import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";
import {PlayerProgressComponent} from "./PlayerProgress";

export class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            progress:1,
            timer:0
        }
        this.play = false;
        this.timer = 0;
        this.time = 0;
        this.delay = 500;
        this.prevent = false;
        this.repeat = false;
        this.child = ()=>{return 'pa'};
    }
    render() {
        const prefix = this.props.prefix;
        const music = this.props.music;
        const path = this.props.path;
        const id = `${prefix}-${music.id}`;
        const style = {
            width: `${this.state.progress}%`
        }
        return (
            <div key={id} style={{position:"relative"}}>
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
                    <PlayerProgressComponent progress={this.state.progress} />
                    { (music.icon)? (
                        <img src={`${path}${music.icon}`} alt={music.name} title={music.name} />
                        ):(
                        <div>{music.name}</div>
                    )}
                </div>
            </div>
        )
    }

    progress () {
        if(this.play){
            this.timerID = setInterval(
                () => {
                    this.setState({progress:this.state.progress + 1});
                },
                parseInt(this.ref.audioEl.current.duration*10)
            );
        }else{
            clearInterval(this.timerID);
        }
    }

    start() {
        this.play = !this.play;

        if(this.play){
            this.ref.audioEl.current.play()
            this.playRepeat();
        }else{
            this.ref.audioEl.current.pause()
        }
        this.progress();
    }
    ended() {
        if(this.repeat){
            this.ref.audioEl.current.play()
            this.playRepeat();
        }else{
            clearInterval(this.timerID);
            // this.ref.audioEl.current.pause()
        }
        this.setState({progress:0})
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
            const timeToEnd = parseInt((this.ref.audioEl.current.duration - this.ref.audioEl.current.currentTime) * 1000) - 1;

            setTimeout(() => {
                this.ref.audioEl.current.currentTime = 0
                this.setState({progress:0})
            }, timeToEnd);
        }
    }
}