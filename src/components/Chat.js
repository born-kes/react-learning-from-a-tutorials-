// @flow
import React, {Component} from 'react'
import "./chat/chat.css";
import {DataContext} from "./Content/Data";

export class Chat extends Component {
    static contextType = DataContext;

    constructor() {
        super();


        this.state = {
            received:['Ja','Albert','Bot'],
            messageList: [],
            icons: {
                Bot:     1,
                kes:     8,
                Albert:  5,
                Bart:    3,
                Warrior: 7,
                Ja:      1
            }
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
                    author: 'Ja',
                    type: 'text',
                    data: { text:text }
                }]
            },
                ()=>this.autoScrollDown())
        }
    }


    render() {
        const [data/*, setData*/] = this.context;
        if(this.state.messageList.length===0)
        this.setState({ messageList: data.Chat });
        return (
            <div id={`Chat`}>
                <h1>
                    <div>Chat</div>
                    {/*<div onClick={this.iconConfig}>Config</div>*/}
                </h1>
                <div className={`sc-message-list`} ref={this.refMessageList}>
                {
                    this.state.messageList.map(({author, sender, data:{text}}, i) =>(
                        <div key={i}
                            className={`sc-message`}
                        >
                            <div className={`sc-message--content ${(this.state.received.indexOf(author)!==-1)?`received`:`sent`}`}>
                                <div className={`sc-message--avatar ico${this.state.icons[author]?this.state.icons[author]:1}`} >
                                </div>
                                <div className={`sc-message--text`}>
                                    <span className={`Linkify`}>{author}</span>
                                    <div className={`sc-message--date`}>{text}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className={`sc-message`}>
                    <div className={`sc-message--content received`}>
                        <div className={`sc-message--avatar ico${this.state.icons.Ja}`} onClick={this.changeIcon}>
                        </div>
                        <div className={`sc-message--text`}>
                            <form  onSubmit={this._sendMessage.bind(this)}>
                                <input placeholder='Możesz tu pisać...'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    autoScrollDown = () => {
        this.refMessageList.current.lastChild
            .scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"})
    }

    changeIcon = () => {
       let nr = this.state.icons.Ja;
       if(nr>15) nr = 0;
       this.setState({icons: {...this.state.icons, Ja: (nr+1) } });
    }

}