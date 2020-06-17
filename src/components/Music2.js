// @flow
import React, { useContext} from 'react';
import {Player} from "./Player/Player";
import {MusicContext} from "./Content/Noisli";

export const Music2 = () => {
        const [music, setMusic] = useContext(MusicContext);
        return (
            <div id={`Music2`}>
                <h1>Music2</h1>
                <div className="boxList">
                    {music.map((music)=>{
                        return <Player key={music.id} prefix={`music`} music={music} path="/Music/" />
                        }
                    )}
                </div>
            </div>
        )
}