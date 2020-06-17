// @flow
import React, {Component, useContext} from 'react'
import { NoisliContext } from "./Content/Noisli";
import {Player} from "./Player/Player";

export const Music1 = () => {

    const [noisli, setNoisli] = useContext(NoisliContext);

    return (
        <div id={`Music1`}>
            <h1>Music1</h1>
            <div className='box'>
                { noisli.map((music, index)=>{
                        return <Player key={music.id} index={index} music={music} path="/Noisli/" />
                    }
                )}
            </div>
        </div>
    )

}