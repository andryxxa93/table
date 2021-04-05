import React from 'react';
import './modal.scss'

const Modal = ({visible, top, selectedItem}) => {
    return (
        visible ?
        <div style={{top: `${top}px`}} className='modal'>
           <div>
               <strong>ID: {selectedItem.userId}</strong>
           </div>
           <div>
               <strong>Tttle: {selectedItem.title}</strong>
           </div>
       </div>
       : null
    )
}

export default Modal;