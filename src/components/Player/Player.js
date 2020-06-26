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

    gC() {
        return this.ref.audioEl.current;
    }

    togglePlay() {
        if(!this.state.play){
            this.gC().play();
        }else {
            this.gC().pause();
        }
    }

    play () {
        this.setState({play: true});


        this.timerID = setInterval(
            this.progress.bind(this),
            500
        );
    }

    pause () {
        this.setState({play:false});
        clearInterval(this.timerID);
    }

    ended() {
        if(this.state.repeat) {
            this.gC().currentTime = 0;
            this.gC().play()
        }
        clearInterval(this.timerID);
        this.progress();
    }

    progress() {
        const timeNow = this.gC().currentTime;
        const timeAll = this.gC().duration;
        const progress = parseInt( timeNow / timeAll * 100 )
        this.setState({progress: progress})
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
        this.setState({volume: parseFloat(vol) })
    }

    playbackRate( speed ) {
        this.gC().playbackRate = speed;
        this.setState({ speed: speed});
    }

    currentTime(progress ) {
        const timeAll = this.gC().duration;

        this.gC().currentTime = timeAll * progress;

        this.progress();
    }
}