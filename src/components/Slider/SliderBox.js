import React, {useState} from 'react';
import './SliderBox.css';


const SliderBox = ({children, type='', name}) => {
    const [active, setActive] = useState(false);
    const toggleActive = (e)=>{
        console.log('active')
        setActive(!active);
    }

        return (
            <div className={`panel ${type} ${active?` active`:``}`}>
                <div className='panel-overlap' onClick={toggleActive}>{name}</div>
                {children}
            </div>
        )

}

export default SliderBox;