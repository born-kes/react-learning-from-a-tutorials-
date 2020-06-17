// @flow
import React, {Component, useContext} from 'react';
import ReactPlayer from 'react-audio-player';
import {Player} from "./Player/Player";
import {MusicContext, NoisliContext} from "./Content/Noisli";

export const Music2 = () => {
        const [music, setMusic] = useContext(MusicContext);
        return (
            <div id={`Music2`}>
                <h1>Music2 x</h1>
                <div className="boxList">
                    {music.map((music,index )=>{
                        return <Player key={music.id} index={index} music={music} path="/Music/" />
                        }
                    )}
                </div>
            </div>
        )
}