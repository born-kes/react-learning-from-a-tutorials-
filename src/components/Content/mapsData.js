import React, {createContext, useState} from "react";

export const MapsContext = createContext();

export const MapsProvider = props => {
    const [maps, setMaps] = useState([
        {
            name:'jaskienia',
            src:'20_05_2014_3.jpg',
            id:'m1',
        },
        {
            name:'Las',
            src:'Noisli/forest.svg',
            id:'m2',
        },
        {
            name:'wave',
            src:'Noisli/wave.svg',
            id:'m3',
            icon:''
        },
        {
            name:'fire',
            src:'Noisli/fire.svg',
            id:'m4',
        },
    ]);
    return (
        <MapsContext.Provider value={[maps, setMaps]} >
            {props.children}
        </MapsContext.Provider>
    )
}