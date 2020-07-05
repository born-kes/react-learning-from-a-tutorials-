import React, {Component} from 'react'
import {Drop} from "./Content/Drag&Drop";
import "./timeBox/timeBox.css";
import {TimeBoxElement} from "./timeBox/TimeBoxElement";

export class TimeRulerBox extends Component {
    constructor(props) {
        super(props);

        this.state = {date: [] }
        this.maxTime = 300;
        this.timeStep = 30;
        this.dropTime = 0;
    }

    index = el => this.state.date.indexOf(el);

    timeRulerBoxes = () => {
        const string = [];
        const step = this.timeStep;
        let steps = this.maxTime / step;

        for (; steps > 0; steps--) {
            let time = steps * step;
            string.push(
                <div key={steps}
                     onDragOver={this.dragOver}
                >
                    { this.singleScale( time )  }
                </div>
            );
        }
        string.push(<div key={-1}>0:00</div>);
        return string
    }

    render() {
        return (
            <div id={`TimeBox`} >
                <Drop
                    responseDrop={this.responseDrop}
                >
                    <div className={'ruler'}>{ this.timeRulerBoxes() }</div>
                    
                    <div className={`TimeBox-el`}>
                        {this.state.date.map(
                            (el) =>(
                                <TimeBoxElement
                                    key={el.key}
                                    el={el}
                                    maxTime={this.maxTime}
                                    dropTime={this.dropTime}
                                    onLoadElemet={this.onLoadElement}
                                    finish={this.timeFinish}
                                />
                            )
                        )}
                    </div>
                    <div>
                        <div onClick={this.playAll}>Play</div>
                        <div onClick={this.pauseAll}>Pause</div>
                    </div>
                </Drop>
            </div>
        )
    }

    responseDrop = item => {
        item.key = Math.random();
        this.setState({ date:[...this.state.date, item] } )
    }

    onLoadElement = (ref, el) => {
        const index = this.index(el);
        const newDate = [...this.state.date];

        newDate[index].ref = ref;
        this.setState({ date: newDate });
    }

    dragOver = event => {
        let [min, sec] = event.target.innerText.split(':');
        this.dropTime = parseInt(min)*60 + parseInt(sec);
    }

    singleScale = time => {
        const min = Math.floor(time / 60 );
        const sec = Math.floor(time % 60 )

        return `${min}:${`${sec}`.padStart(2, "0")}`;
    }

    timeFinish = el => {
        const index = this.index(el);
        this.state.date[index].ref().play();
        this.state.date[index].ref().onended  = () => this.theEnd(el);
    };

    theEnd = el => {
        const index = this.index(el);
        const newDate = [...this.state.date];

        newDate.splice(index, 1);

        this.setState({date: [...newDate]});
    }

    playAll = () => {
        this.state.date.forEach(el => {
            el.ref().play();
        });
    }

    pauseAll = () =>{
        this.state.date.forEach(el=>{
           el.ref().pause();
        });
    }

}