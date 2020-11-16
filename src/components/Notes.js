import React, {Component} from 'react';
import "./Notes/Notes.css";
// import {DataContext} from "./Content/Data";

export class Notes extends Component {

    // static contextType = DataContext;

    constructor() {
        super();

        this.state = {
            Notes: []
        }
    }

    render() {
        console.log('n')
            // if(this.state.Notes.length === 0 && false) {
            //     const [{Notes}/*, setData*/] = this.context;
            //     this.setState({Notes: Notes });
            // }
        return (
            <div id={`Notes`}>
                <h2>Notes</h2>
                <form  onSubmit={this.addNote.bind(this)}>
                    <textarea></textarea>
                    <input type='submit' value='Zapisz'/>
                </form>
                <div>
                {
                    this.state.Notes.map((Note, index) =>(
                        <div key={Note.id}>Notatka {index} <b>[czytaj więcej]</b> </div>
                        )
                    )
                }
                </div>
            </div>
        )
    }

    addNote (event) {
        event.preventDefault();
        const text = event.target.firstChild.value;

        if (text.length > 0) {
            this.setState({
                    Notes: [...this.state.Notes, {
                        id: this.state.Notes.length,
                        text:text
                    }]
                });
        }
    }
}
