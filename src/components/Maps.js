import React, {useContext} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {DataContext} from "./Content/Data";
import "./maps.css"
import {Drag} from "./Content/Drag&Drop";
import DropZone from "react-drop-zone";
import "./music/music2.css";

export const Maps = () => {
    const [data, setData] = useContext(DataContext);
    const items =  data.Maps.map((map)=> {
            return (
                <div key={map.id}>
                    <Drag class_Name={`maska`} item={map}>
                        <img src={map.src} className="yours-custom-class" alt={map.name}/>
                        <p>{map.name} </p>
                    </Drag>
                </div>
            )
        });

    return (
        <div id={`Maps`} style={{width: '210px'}}>
            <h1>Maps
                <DropZone accept=".jpg, .jpeg, .png, .gif, .svg" onDrop={(file) =>{
                    const newEl = {
                        name: file.name,
                        src: URL.createObjectURL(file),
                        id: `drop${Math.random()}`
                    };
                    console.log(newEl)
                    setData({...data, Maps: [...data.Maps, newEl] });
                } }>
                    {({over}) =>over?<div className='DropZone'>Upuść tutaj</div>:<div>+</div>}
                </DropZone>
            </h1>
        <AliceCarousel touchTrackingEnabled={true}
                       items={items}
                       controlsStrategy='responsive'
                       autoPlayInterval = { 2000 }
                       autoPlay = { true }
                       fadeOutAnimation = { true }

                       stagePaddin={{
                           paddingLeft : 0 ,
                           paddingRight : 0
                       }}
        />
        </div>
    )
}