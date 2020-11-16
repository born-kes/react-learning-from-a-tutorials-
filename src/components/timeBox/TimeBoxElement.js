import React, {Component} from 'react'
import {Player} from "../Player/Player";
// import "./timeBox.css";

export class TimeBoxElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeToEnd: props.dropTime,
            translate_X: this.percent(props.maxTime, props.dropTime),
            translate_Y: -30,
            opacity: 1
        };

        this.ref = '';
        this.timeID = 0;
        this.progressTimeID = 0;
    }

    loadElement = ref => {
        this.props.onLoadElemet(ref, this.props.el);
        this.countingTimeDown();
    }

    countingTimeDown = () => {
        setTimeout(this.startTime);
        this.progressTimeID = setInterval(this.progressTime,1000)
        this.timeID = setTimeout(this.finishTime, this.state.timeToEnd * 1000)
    }

    percent = (maxTime, timeToEnd ) =>{ return Math.floor(100 / (maxTime / timeToEnd) )}

    render() {
        return (
            <div
                className={`x ${this.state.timeToEnd?'opacity':''}`}
                style={ this.state.timeToEnd?
                    {
                    transform: `translate3d(${100 - this.state.translate_X}%, -30px, 0px)`,
                    transition: `transform ${this.state.timeToEnd}s linear 0s`,
                    }:{}
                }
            onClick={this.stopTime}
            >
                <Player
                    music={this.props.el}
                    load={this.loadElement}
                />
            </div>
        )
    }

    startTime = () => {
        this.setState({translate_X: 0});
    }

    stopTime = event => {
        event.preventDefault();
        this.setState({translate_X: this.percent(this.props.maxTime, this.state.timeToEnd) });
        clearInterval(this.progressTimeID);
        clearTimeout(this.timeID);
    }

    progressTime = ()=>{
        // this.setState({ timeToEnd: this.state.timeToEnd -1  })
        // if(this.state.timeToEnd<1)
            clearInterval(this.progressTimeID)
    }

    finishTime = () => {
        this.setState({opacity:0, timeToEnd:false})
        this.props.finish(this.props.el)
    }
}