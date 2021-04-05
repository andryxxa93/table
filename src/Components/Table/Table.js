import React from 'react';
import Row from '../Row/Row';


const Table = ({data, onCustomClick, onSelect}) => {


    return (
       <div>
            {data.map(dataItem => {
                return(
                    <Row
                        key={dataItem.id}
                        id={dataItem.id}
                        onCustomClick={onCustomClick}
                        userId={dataItem.userId}
                        completed={dataItem.completed}
                        title={dataItem.title}
                        onSelect={onSelect}
                    />
                )
            })}
       </div>
    )
}

export default Table;