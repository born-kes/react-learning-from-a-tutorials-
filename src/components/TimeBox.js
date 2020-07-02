import React, {Component} from 'react'
import {Drop} from "./Content/Drag&Drop";
import {Player} from "./Player/Player";
import "./timeBox/timeBox.css";

export class TimeBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: [],
            in:[]
        }
        this.startTime = 0;
    }
    render() {
        const handrelRespons = item => {
            item.timeToRun = 100 - (100 / (300 /this.startTime));
            this.setState({ date:[...this.state.date, item] } )
        }

        const onLoadElement = (el) => {

            this.setState({
                in:[...this.state.in, el]
            });

            let odliczanie = this.startTime-1;
            let nr = this.state.date.length-1;

            let timeID = setInterval(()=>{
                const newDate = [...this.state.date];
                newDate[nr].timeToRun = 100 - Math.floor(100 / (300 / odliczanie) );
                newDate[nr].opacity = '';

                if(odliczanie<0) {
                    newDate[nr].opacity = 'opacity';
                    clearInterval(timeID);
                }
                this.setState({date: newDate });

            },1000)
            setTimeout(()=>{
                el().play()
            },this.startTime*1000)
        }

        const play = () => {
            this.state.in.map(el => {
               return el().play();
            });
        }

        const pause = () =>{
            this.state.in.map(el=>{
               return el().pause();
            });
        }

        const rulerTime = () => {
            let string = [];
            for (let step = 10; step > 0; step--) {
                let time = step*30;
                string.push(
                    <div key={step}
                        onDragOver={e=>{
                            let t = e.target.innerText.split(':');
                            let s = parseInt(t[0])*60 + parseInt(t[1]);

                            this.startTime = s;
                        }}
                    >
                        { Math.floor((time)/60 ) }:{ `${Math.floor(time%60)}`.padStart(2, "0")  }
                    </div>
                );
            }
            string.push(<div  key={-1}>0:00</div>);
            return string
        }

        return (
            <div
                id={`TimeBox`}
            >
                <Drop
                    responseDrop={handrelRespons}
                >
                    <div className={'ruler'}>{ rulerTime() }</div>


                <div className={`TimeBox-el`}>
                    {this.state.date.map(
                        (el, i) =>(
                            <div
                                key={i + el.id}
                                className={`x ${el.opacity}`}
                                 style={el.opacity===''?{
                                     transform: `translate3d(${el.timeToRun}%, -30px, 0px)`,
                                     opacity: 1
                                 }:{}}>

                                <Player
                                    music={el}
                                    load={onLoadElement}
                                ></Player>
                            </div>
                        )
                    )}
                </div>
                <div>
                    <div onClick={play}>Play</div>
                    <div onClick={pause}>Pause</div>
                </div>
                </Drop>
            </div>
        )
    }
}