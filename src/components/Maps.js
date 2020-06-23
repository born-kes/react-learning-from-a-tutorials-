import React, {useContext} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {DataContext} from "./Content/Data";

export const Maps = () => {
    const [data, /*setMaps*/] = useContext(DataContext);

    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <div id={`Maps`} style={{width: '210px'}}>
        <AliceCarousel touchTrackingEnabled={true}
                       controlsStrategy='responsive'
                       autoPlayInterval = { 2000 }
                       autoPlayDirection = "rtl"
                       autoPlay = { true }
                       fadeOutAnimation = { true }
                       mouseTrackingEnabled = { true }
                       // playButtonEnabled ={ true }
                       // disableAutoPlayOnAction = { true }
                       stagePaddin={{
                           paddingLeft : 0 ,
                           paddingRight : 0
                       }}
        >
            {
                data.Maps.map((map)=>(
                    <div key={map.id}>
             <img src={map.src} onDragStart={handleOnDragStart} className="yours-custom-class" alt={map.name} />
                        <p>{map.name} </p>
                    </div>
                ))
            }

        </AliceCarousel>
        </div>
    )
}