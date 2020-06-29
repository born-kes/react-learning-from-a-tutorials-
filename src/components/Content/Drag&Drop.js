import React from 'react'

export const Drag = ({children, item, class_Name = null}) => {

    const dragStarted = (event) => {
        event.dataTransfer.setData("items", JSON.stringify(item));
    }

    return (
        <div
            draggable="true"
            onDragStart={dragStarted}
        >
            <div className={class_Name}></div>
            {children}
        </div>
    )

}

export const Drop = ({children, style, className, responseDrop=()=>{}, backDrop =()=>{} }) => {

    const dragOver = event => {
        event.preventDefault();
        drop(event);
    }

    const drop = event => {
        event.preventDefault();

        let src = event.dataTransfer.getData('application/x-moz-file-promise-url');
        if(!src)
            src = event.dataTransfer.getData('text/plain');
        if(src)
            return responseDrop({src:src})

        if(!src && event.dataTransfer.getData('items'))
            responseDrop( JSON.parse(event.dataTransfer.getData('items') ) );

    }

    return (
        <div
            style={style}
            className={className}
            onDragOver={dragOver}
            onDrop={drop}
            onDragLeave={backDrop}
        >
            {children}
        </div>
    )
}