import React, {Component} from 'react'

export class Pulpit extends Component {

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
            height: '100%'
        }

        return (
            <div id="Pulpit" style={container3d}>
                <div style={box3d}>
                    <img src="20_05_2014_3.jpg" alt={``} style={contenderElement} />
                </div>
            </div>
        )
    }
}