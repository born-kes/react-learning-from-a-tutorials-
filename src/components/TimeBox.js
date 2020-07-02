import React, {Component} from 'react'
import {Drop} from "./Content/Drag&Drop";
import {Player} from "./Player/Player";

export class TimeBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: [],
            in:[]
        }
    }
    render() {
        const handrelRespons = item => {
            this.setState({ date:[...this.state.date, item] } )
        }

        const onLoadElement = (el) => {
            this.setState({ in:[...this.state.in, el] });
        }

        const play = () => {
            this.state.in.map(el => {
                el().play();
            });
        }

        const pause = () =>{
            this.state.in.map(el=>{
                el().pause();
            });
        }


        return (
            <Drop
                responseDrop={handrelRespons}
                id={`TimeBox`}
            >
                TimeBox
                <div className={`box`}>
                    {this.state.date.map(
                        (el, i) => <Player key={i+el.id} music={el} load={onLoadElement} ></Player>
                    )}
                </div>
                <div>
                    <div onClick={play}>Play</div>
                    <div onClick={pause}>Pause</div>
                </div>
            </Drop>

        )
    }
}