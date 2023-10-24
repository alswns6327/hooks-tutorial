import React, { useReducer, useState } from 'react';

const Counter = () => {

    function reducer(stated, action) {
        switch(action.type){
            case 'INCREMENT':
                return stated + 1;
            case 'DECREMENT':
                return --stated;
            default:
                return stated;
        }
    }

    const [statea, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>
                현재 카운터 값 <b>{statea}</b>
            </p>
            <button onClick={() => dispatch({type : "INCREMENT"})}>+1</button>
            <button onClick={() => dispatch({type : "DECREMENT"})}>-1</button>
        </div>
    );
};

export default Counter;