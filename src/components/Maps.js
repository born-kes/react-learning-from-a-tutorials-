import React, {useContext} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {DataContext} from "./Content/Data";
import "./maps.css"
import {Drag} from "./Content/Drag&Drop";

export const Maps = () => {
    const [data, /*setMaps*/] = useContext(DataContext);

    return (
        <div id={`Maps`} style={{width: '210px'}}>
        <AliceCarousel touchTrackingEnabled={true}
                       controlsStrategy='responsive'
                       autoPlayInterval = { 2000 }
                       autoPlay = { true }
                       fadeOutAnimation = { true }

                       stagePaddin={{
                           paddingLeft : 0 ,
                           paddingRight : 0
                       }}
        >
            {
                data.Maps.map((map)=>(
                    <div key={map.id}>
                        <Drag class_Name={`maska`} item={map}>
             <img src={map.src} className="yours-custom-class" alt={map.name} />
                        <p>{map.name} </p>
                        </Drag>
                    </div>
                ))
            }
        </AliceCarousel>
        </div>
    )
}