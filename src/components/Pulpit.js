import React, {Component} from 'react';
import DropZone from "react-drop-zone";
import {Drop} from "./Content/Drag&Drop";
import "./Pulpit/Pulpit.css";

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




        return (
            <div id="Pulpit">
                <Drop
                    className='container3d'
                    responseDrop={this.responseDrop}
                >
                    <DropZone
                    onDrop={(file) =>{file.src = URL.createObjectURL(file); this.responseDrop(file, false) }}
                    handleClick={ false }
                    >
                        { () => (
                            <div className='DropZone box3d'>
                                <img src={this.state.src} alt='upuść Mape/ Obrazek tutaj...' className='contenderElement' />
                            </div>
                            )}
                    </DropZone>
                </Drop>
            </div>
        )
    }
}