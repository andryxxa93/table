import React, { useState } from 'react';
import './row.scss';

const Row = ({id, userId, title, completed, onCustomClick, onSelect}) => {

    const [checked, setChecked] = useState(completed)

    const checkedHandler = () => {
        setChecked(prev => !prev)
    }

    const onClickHandler = (e) => {
        onCustomClick(e)
        onSelect(id)
    }

   return (
       <div onClick={onClickHandler} className={`row ${checked ? 'row-completed' : ''}`}>
           <div>
                ID: {userId}    
           </div>
           <div>
                Title: {title}
           </div>
           <input type='checkbox' onChange={checkedHandler} checked={checked}/>
       </div>
   )
}

export default Row;