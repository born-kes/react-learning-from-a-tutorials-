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
    allowedExtensions = (src) => {
        const allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif|\.svg)(|\?.*)$/i;
        const prevent = (allowedExtensions.exec(src)?false:true);
        return prevent;
    }

    responseDrop = ({src}, test=true) => {
        if(test && this.allowedExtensions(src) ) {
            console.error('File problem not accepted', src)
            return;
        }

        this.setState({
            src:src
        });
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
                <Drop
                    style={container3d}
                    responseDrop={this.responseDrop}
                >
                    <DropZone
                    onDrop={(file) =>{file.src = URL.createObjectURL(file); this.responseDrop(file, false) }}
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