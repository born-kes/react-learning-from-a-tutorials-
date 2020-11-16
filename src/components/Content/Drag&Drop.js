import React from 'react'

export const Drag = ({children, item, class_Name = null}) => {

    const dragStarted = (event) => {
        event.dataTransfer.setData("items", JSON.stringify(item));
    }
    const onTouchStart =(ev) => {
        // console.log(ev.target)
        // document.getElementById('Notes').innerText = JSON.stringify(ev);
    }

    return (
        <div
            draggable="true"
            onDragStart={dragStarted}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchStart}
            onTouchEnd={onTouchStart}
        >
            <div className={class_Name}></div>
            {children}
        </div>
    )

}

export const Drop = ({children, style, className, responseDrop=()=>{}, responseDragOver }) => {

    const dragOver = event => {
        event.preventDefault();
        if(responseDragOver)
            responseDragOver(event);
    }

    const drop = event => {
        event.preventDefault();
        if(event.dataTransfer.getData('items'))
            return responseDrop( JSON.parse(event.dataTransfer.getData('items') ) );

        let src = event.dataTransfer.getData('application/x-moz-file-promise-url');
        if(!src)
            src = event.dataTransfer.getData('text/plain');
        if(src)
            return responseDrop({src:src})

    }
    const onTouchStart =(ev) => {
        console.log(ev)
        // document.getElementById('Notes').innerText = JSON.stringify(ev);
    }
    return (
        <div
            style={style}
            className={className}
            onDragOver={dragOver}
            onDrop={drop}
            onTouchMove={onTouchStart}
            onTouchEnd={onTouchStart}
            onMouseUp={onTouchStart}
            onDragEnter={onTouchStart}
        >
            {children}
        </div>
    )
}