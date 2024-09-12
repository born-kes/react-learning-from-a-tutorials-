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
    items.push(<div key={-1}>
        <DropZone accept=".jpg, .jpeg, .png, .gif, .svg" onDrop={(file) =>{
        const newEl = {
            name: file.name,
            src: URL.createObjectURL(file),
            id: `drop${Math.random()}`
        };
        setData({...data, Maps: [...data.Maps, newEl] });
    } }>
        {({over}) =>over?<div className='DropZone'>Upuść tutaj</div>:<p className='button'>Dodaj<br /> Nowy</p>}
    </DropZone>
    </div>)

    console.log('m')
    return (
        <div id={`Maps`} style={{width: '210px'}}>
        <AliceCarousel touchTrackingEnabled={true}
                       items={items}
                       controlsStrategy='responsive'
                       autoPlayInterval = { 2000 }
                       // autoPlay = { true }
                       fadeOutAnimation = { true }

                       stagePaddin={{
                           paddingLeft : 0 ,
                           paddingRight : 0
                       }}
        />
        </div>
    )
}