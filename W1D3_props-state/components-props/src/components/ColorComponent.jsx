import React from 'react';

const ColorComponent = (props) => {
    console.log('props: ', props);

    return (
        <div >
            <h3 style={{ color: props.color }}>

                Hello {props.color}
            </h3>
        </div>
    );
};

export default ColorComponent;