import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props => {
    const Noisli = [
        {
            name:'ogien',
            src:'ogien.ogg',
            id:'n1',
            icon:'fire.svg'
        },
        {
            name:'deszcz',
            src:'deszcz.ogg',
            id:'n2',
            icon:'rain.svg'
        },
        {
            name:'las',
            src:'las.ogg',
            id:'n3',
            icon:'forest.svg'
        },
        {
            name:'błyskawica',
            src:'grzmot.ogg',
            id:'n4',
            icon:'lightning.svg'
        },
        {
            name:'noc',
            src:'noc.ogg',
            id:'n5',
            icon:'moon.svg'
        },
        {
            name:'strumyk',
            src:'strumyk.ogg',
            id:'n6',
            icon:'mountain.svg'
        },
        {
            name:'szum morza',
            src:'jezioro.ogg',
            id:'n7',
            icon:'wave.svg'
        },
        {
            name:'Dudnienie',
            src:'wentylator.ogg',
            id:'n8',
            icon:'windmill.svg'
        },
        {
            name:'Wiatr',
            src:'wiatr.ogg',
            id:'n9',
            icon:'wind.svg'
        },

    ];
    const Music = [
        {
            name:'ElemTown.mp3',
            src:'ElemTown.mp3',
            id:'m1',
            icon:''
        },
        {
            name:'Win-Scenario.mp3',
            src:'Win-Scenario.mp3',
            id:'m2',
            icon:''
        },
        {
            name:'Defend-Castle.mp3',
            src:'Defend-Castle.mp3',
            id:'m3',
            icon:''
        },
    ];
    const Maps = [
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
    ];

    const [data, setData] = useState({
        Noisli: Noisli,
        Music: Music,
        Maps: Maps
    });

    return (
        <DataContext.Provider value={[data, setData]} >
            {props.children}
        </DataContext.Provider>
    )
}


