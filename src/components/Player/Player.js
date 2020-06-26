import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";
import {PlayerProgressComponent} from "./PlayerProgress";
import Popup from "./Popup";

export class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            progress: 1,
            repeat: false,
            volume: 0.5,
            playbackRate: 2,
            speed: 1
        }
        this.timer = 0; // setTimeout by doubleClick
        this.prevent = false;
        this.delay = 500;

        this.timerID = 0;

    }
    render() {
        const prefix = this.props.prefix;
        const music = this.props.music;
        const path = this.props.path;
        const id = `${prefix}-${music.id}`;
        return (
            <div key={id} style={{position:"relative"}}>
                <ReactPlayer
                    id={id}
                    src={`${path}${music.src}`}
                    title={music.name}
                    volume = {this.state.volume}
                    loop={this.state.repeat}
                    onEnded={()=>{this.ended()}}
                    onPlay={this.play.bind(this)}
                    onPause={this.pause.bind(this)}

                    ref={(el)=> {this.ref = el} }
                />
                <div
                    className={`svg`}
                    onClick={()=>this.handleClick()}
                    onDoubleClick={()=>this.changeConfig() }
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

    togglePlay() {
        if(!this.state.play){
            this.ref.audioEl.current.play();
        }else {
            this.ref.audioEl.current.pause();
        }
    }

    play () {
        const timeNow = this.ref.audioEl.current.currentTime;
        const timeAll = this.ref.audioEl.current.duration;
        const progress = parseInt( timeNow / timeAll * 100 )

        this.setState({play: true, progress: progress+1});

        this.timerID = setInterval(() => {
            if(this.state.progress > 100) this.state.progress = 0;
                this.setState({progress: this.state.progress + (this.state.speed * 1)});
            },
            parseInt( timeAll * 10 )
        );
    }

    pause () {
        this.setState({play:false});
        clearInterval(this.timerID);
    }

    ended() {
        if(this.state.repeat) {
            this.ref.audioEl.current.currentTime = 0;
            this.ref.audioEl.current.play()
        }
        clearInterval(this.timerID);
        this.setState({progress:0})
    }

    handleClick() {
        let me = this;
        setTimeout(() => {
            if (!me.prevent) {
                me.togglePlay();
            }
            me.prevent = false;
        }, me.delay);
    }

    async changeConfig() {
        const popup =  Popup(
            this.props,
            {
                play: this.togglePlay.bind(this),
                volume: this.volume.bind(this),
                speed: this.playbackRate.bind(this),
                loop: this.loop.bind(this),
                currentTime: this.currentTime.bind(this)
            });
        const popupResponse = await popup();
    }

    loop( repeat ) {
        this.setState({repeat: repeat});
    }

    volume( vol ) {
        console.log('volume',vol)
        this.setState({volume: parseFloat(vol) })
    }

    playbackRate( speed ) {
        this.ref.audioEl.current.playbackRate = speed;
        this.setState({ speed: speed});
    }

    currentTime(progress ) {
        const timeAll = this.ref.audioEl.current.duration;

        this.ref.audioEl.current.currentTime = timeAll * (progress/100);

        this.setState({ progress: progress});
    }
}