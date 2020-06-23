import React, {Component} from 'react'

export class PlayerProgressComponent extends Component {
    render() {
        const style = {
        width: `${this.props.progress}%`
    }

        return (
            <div style={style} className={`audio-play-progress`} ></div>
        )
    }
}