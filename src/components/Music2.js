import React, {useContext} from 'react';
import {Player} from "./Player/Player";
import {Route} from "react-router-dom";
import DropZone from 'react-drop-zone';
import 'react-drop-zone/dist/styles.css';
import {DataContext} from "./Content/Data";
import {Drag} from "./Content/Drag&Drop";

export const Music2 = () => {
        const [data, setData] = useContext(DataContext);
        return (
            <div id={`Music2`}>
                <h1>Music2</h1>
                <div className="boxList">
                    {data.Music.map((music)=>{
                        music.path=`/Music/`;
                        return (
                            <Drag
                                key={music.id}
                                item={music}
                            >
                                <Player
                                    prefix={`music`}
                                    music={music}
                                />
                            </Drag>
                        )
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
                                setData({...data, Music: [...data.Music, newEl] });
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