import * as React from "react";

const TodoItem = pros => {

    const e = pros.element;
    const runMarkClicked = pros.markClicked;
    return (
        <div key={`z${e.id}`} className={`card ${e.isComplited ? 'complited':''}`}>
            <h2>{e.title}</h2>
            <button onClick={() => runMarkClicked(e.id) }>Wykonane</button>
        </div>
    );
}

export default TodoItem;