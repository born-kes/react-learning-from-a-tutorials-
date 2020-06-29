import React, {Component} from 'react';
import DropZone from "react-drop-zone";
import {Drop} from "./Content/Drag&Drop";

export class Pulpit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            src:'',
            history:['']
        };
    }

    responseDrop = ({src}) => {
        if(this.state.history[this.state.history.length -1] !== src)
        this.setState({
            src:src,
            history:[...this.state.history, src]
        });
    }

    backDrop = () =>{

        const history = [...this.state.history]

        history.splice(history.length-1, 1)
        this.setState({
            src: history[history.length -1] ,
            history: history

        } );
    }

    render() {
        const container3d = {
            perspective: '550px',
            zIndex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
        }

        const box3d = {
            width: '100%',
            transform: 'rotate3d(2, 0, 0, .1turn)',
            transformStyle: 'preserve-3d',
            textAlign: 'center',
        };
        const contenderElement ={
            maxWidth: '120vh',
            maxHeight: '100vh',
            width: '100%',
            height: '100%'
        }

        return (
            <div id="Pulpit">
                <Drop style={container3d} responseDrop={this.responseDrop} backDrop={this.backDrop}>
                    <DropZone
                    onDrop={(file) =>this.responseDrop({src: URL.createObjectURL(file) }) }
                    handleClick={ false }
                    >
                        { () => (
                            <div style={box3d} className='DropZone'>
                                <img src={this.state.src} alt={``} style={contenderElement}/>
                            </div>
                            )}
                    </DropZone>
                </Drop>
            </div>
        )
    }
}