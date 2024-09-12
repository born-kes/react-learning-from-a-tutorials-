import React, {Component} from 'react';
import './SliderBox.css';


class SliderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleActive = (e)=> {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        return (
            <div className={`panel ${this.props.type} ${(this.state.active)?` active`:``}`}>
                <div className='panel-overlap' onClick={this.toggleActive}>{this.props.name}</div>
                {this.props.children}
            </div>
        )
    }
}

export default SliderBox;