import React, { useContext } from 'react'
import { Player } from "./Player/Player";
import {DataContext} from "./Content/Data";
import {Drag} from "./Content/Drag&Drop";


export const Music1 = () => {

    const [data, /*setData*/] = useContext(DataContext);

    return (
        <div id={`Music1`}>
            <h1>Music1</h1>
            <div className='box'>
                { data.Noisli.map((music)=>{
                    music.path = '/Noisli/';
                        return (
                            <Drag
                                key={music.id}
                                item={music}
                            >
                                <Player
                                    prefix={`noisli`}
                                    music={music}
                                />
                            </Drag>
                            )
                    }
                )}
            </div>
        </div>
    )

}