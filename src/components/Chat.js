// @flow
import React, {Component} from 'react'
import "./chat/chat.css";
import {testDate} from "./chat/testDate";

export class Chat extends Component {

    constructor() {
        super();


        this.state = {
            messageList: testDate()
        };

        this.refMessageList = React.createRef()
    }

    _sendMessage(event) {
        event.preventDefault();
        const text = event.target.firstChild.value;

        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    id: this.state.messageList.length,
                    author: 'my',
                    type: 'text',
                    data: { text:text }
                }]
            },
                ()=>this.autoScrollDown())

        }
    }


    render() {
        return (
            <div id={`Chat`}>
                <h1>Chat</h1>
                <div className={`sc-message-list`} ref={this.refMessageList}>
                {
                    this.state.messageList.map(({author, sender, data:{text}}, i) =>(
                        <div key={i}
                            className={`sc-message ${i}`}
                        >
                            <div className={`sc-message--content ${author==='my'?`received`:`sent`}`}>
                                <div className={`sc-message--avatar`}>img: {sender}</div>
                                <div className={`sc-message--text`}>
                                    <span className={`Linkify`}>{author}</span>
                                    <div className={`sc-message--date`}>{text}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div>
                    <form  onSubmit={this._sendMessage.bind(this)}>
                        <input/>
                    </form>
                </div>
            </div>
        )
    }

    autoScrollDown = () => {
        this.refMessageList.current.lastChild
            .scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"})
    }
}