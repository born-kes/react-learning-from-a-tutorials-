import * as React from "react";
import TodoItem from "./components/TodoItem";
import './components/index.css';

class Todo extends React.Component {
    state = {
        elements : [
            {id: 's1',isComplited: false, title: 'Zrobic zakupy'},
            {id: 's2',isComplited: true, title: 'Zajac sie dziecmi'}
        ],
        inputValue: ''
    }
    inputHandler(event) {
        const newValue = event.target.value;
        this.setState({ inputValue: newValue });
    }
    addItem() {
        if(this.state.inputValue ==='') return;
    const item = {
        id: (`s${this.state.elements.length+1}`),
        isComplited: false,
        title: (this.state.inputValue)
    };
    const newElements = [item, ...this.state.elements];
    this.setState({ elements: newElements });
    this.setState({ inputValue: '' });
    };

    markCompleted(id) {
        const index = this.state.elements
                            .findIndex(x=>x.id === id);
        const newElements = this.state.elements;
        newElements[index].isComplited = true;

        this.setState({ elements: newElements });
    };

    render() {
        console.log(this.state);

        const element = this.state.elements.map(e=> {
            return <TodoItem key={e.id} element={e} markClicked={this.markCompleted.bind(this)} />;
        });
        return (
            <div>
                Todo App
                <input type="text" value={this.state.inputValue } onChange={this.inputHandler.bind(this)}/>
                <button key="buttonNewItem" onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {element}
            </div>
        )
    }
}

export default Todo;