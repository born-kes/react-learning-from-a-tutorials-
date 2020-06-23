import React, { useContext } from 'react'
import { Player } from "./Player/Player";
import {DataContext} from "./Content/Data";


export const Music1 = () => {

    const [data, /*setData*/] = useContext(DataContext);

    return (
        <div id={`Music1`}>
            <h1>Music1</h1>
            <div className='box'>
                { data.Noisli.map((music)=>{
                        return <Player key={music.id} prefix={`noisli`} music={music} path="/Noisli/" />
                    }
                )}
            </div>
        </div>
    )

}