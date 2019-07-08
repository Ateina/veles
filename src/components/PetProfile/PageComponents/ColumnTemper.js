import React from 'react';

function ColumnTemper(props) {
    let temper = null;
    
    if (props.temper) {
        temper = <React.Fragment>
            <div className="column temper">
                <div className={"icon " + props.type}></div>
                <ul>
                    {Object.keys(props.temper).map(key => (
                        <li
                            key={key}
                            index={key}
                        >
                            {props.temper[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>;
    }
    return temper;
}

export default ColumnTemper;