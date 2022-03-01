import React from 'react';



const CardButton = (props) => {


    return (
        <div className='card-button'>
            <button onClick={props.random} style={{backgroundColor: props.bg}} >
            <i class="fa-solid fa-circle-arrow-right"></i>
            </button>
        </div>
    );
};

export default CardButton;