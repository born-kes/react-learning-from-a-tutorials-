import React, {createContext, useState} from "react";

export const NoisliContext = createContext();

export const NoisliProvider = props => {
    const [noisli, setNoisli] = useState([
        {
            name:'ogien',
            src:'ogien.ogg',
            id:'n1',
            ref:null,
            play:null,
            icon:'fire.svg'
        },
        {
            name:'deszcz',
            src:'deszcz.ogg',
            id:'n2',
            ref:null,
            play:null,
            icon:'rain.svg'
        },
        {
            name:'las',
            src:'las.ogg',
            id:'n3',
            ref:null,
            play:null,
            icon:'forest.svg'
        },
        {
            name:'błyskawica',
            src:'grzmot.ogg',
            id:'n4',
            ref:null,
            play:null,
            icon:'lightning.svg'
        },
        {
            name:'noc',
            src:'noc.ogg',
            id:'n5',
            ref:null,
            play:null,
            icon:'moon.svg'
        },
        {
            name:'strumyk',
            src:'strumyk.ogg',
            id:'n6',
            ref:null,
            play:null,
            icon:'mountain.svg'
        },
        {
            name:'szum morza',
            src:'jezioro.ogg',
            id:'n7',
            ref:null,
            play:null,
            icon:'wave.svg'
        },
        {
            name:'Dudnienie',
            src:'wentylator.ogg',
            id:'n8',
            ref:null,
            play:null,
            icon:'windmill.svg'
        },
        {
            name:'Wiatr',
            src:'wiatr.ogg',
            id:'n9',
            ref:null,
            play:null,
            icon:'wind.svg'
        },

    ]);
    return (
        <NoisliContext.Provider value={[noisli, setNoisli]} >
            {props.children}
        </NoisliContext.Provider>
    )
}

export const MusicContext = createContext();

export const MusicProvider = props => {
    const [music, setMusic] = useState([
        {
            name:'ElemTown.mp3',
            src:'ElemTown.mp3',
            id:'m1',
            ref:null,
            play:null,
            icon:''
        },
        {
            name:'Win-Scenario.mp3',
            src:'Win-Scenario.mp3',
            id:'m2',
            ref:null,
            play:null,
            icon:''
        },
        {
            name:'Defend-Castle.mp3',
            src:'Defend-Castle.mp3',
            id:'m3',
            ref:null,
            play:null,
            icon:''
        },
    ]);
    return (
        <MusicContext.Provider value={[music, setMusic]} >
            {props.children}
        </MusicContext.Provider>
    )
}