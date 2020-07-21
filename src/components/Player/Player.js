import React, {Component} from 'react'
import ReactPlayer from "react-audio-player";
import {PlayerProgressComponent} from "./PlayerProgress";
import Popup from "./Popup";

export class Player extends Component {

    constructor(props) {
        super(props);
        const {music:{id, name, src, icon, path=''}, prefix=''} = props;

        this.key = `${prefix}-${id}`;
        this.state = {
            srcIcon: (icon ? path + icon : ''),
            srcMusic: path + src,
            name: name,

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

        if(this.props.load) {
            this.props.load( () => this.gC() );
        }
    }
    render() {
        return (
            <div
                key={this.key}
                style={{position:"relative"}}>
                <ReactPlayer
                    id={this.key}
                    src={this.state.srcMusic}
                    title={this.state.name}
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
                    { (this.state.srcIcon)? (
                        <img
                            src={this.state.srcIcon}
                            alt={this.state.name}
                            title={this.state.name}
                        />
                        ):(
                        <div>{this.state.name}</div>
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