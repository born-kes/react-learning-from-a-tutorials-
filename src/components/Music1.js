// @flow
import React, { useContext } from 'react'
import { NoisliContext } from "./Content/waveData";
import { Player } from "./Player/Player";


export const Music1 = () => {

    const [noisli, setNoisli] = useContext(NoisliContext);

    return (
        <div id={`Music1`}>
            <h1>Music1</h1>
            <div className='box'>
                { noisli.map((music)=>{
                        return <Player key={music.id} prefix={`noisli`} music={music} path="/Noisli/" />
                    }
                )}
            </div>
        </div>
    )

}