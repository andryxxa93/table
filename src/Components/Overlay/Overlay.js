import React from 'react';
import './overlay.scss';

const Overlay = ({visible, onCustomClick}) => {
    
    return (
        visible 
        ? <div onClick={onCustomClick} className='overlay'></div>
        : null
    )
}

export default Overlay;