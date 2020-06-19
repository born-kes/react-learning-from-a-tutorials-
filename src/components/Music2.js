// @flow
import React, { useContext} from 'react';
import {Player} from "./Player/Player";
import {MusicContext} from "./Content/waveData";
import {Route} from "react-router-dom";
import DropZone from 'react-drop-zone';
import 'react-drop-zone/dist/styles.css';

export const Music2 = () => {
        const [music, setMusic] = useContext(MusicContext);
        return (
            <div id={`Music2`}>
                <h1>Music2</h1>
                <div className="boxList">
                    {music.map((music)=>{
                        return <Player key={music.id} prefix={`music`} music={music}
                                       path={(music.path)?``:`/Music/`} />
                        }
                    )}
                </div>
                    <Route path="/Music2/" >
                            <DropZone accept=".mp3, .ogg" onDrop={(file) =>{
                                const newEl =         {
                                        name: file.name,
                                        src: URL.createObjectURL(file),
                                        id: `drop${Math.random()}`,
                                        icon: '',
                                        path: true
                                    };
                                setMusic([...music, newEl]);
                            } }>
                                    {
                                            ({ over, overDocument }) =>
                                                <div className='DropZone'>
                                                        {
                                                                over ?
                                                                    'Upuść element' :
                                                                    overDocument ?
                                                                        'Plik dodany do listy' :
                                                                        'Dodaj nowy plików.'
                                                        }
                                                </div>
                                    }
                            </DropZone>
                    </Route>
            </div>
        )
}