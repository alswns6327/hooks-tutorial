import React, { useEffect, useReducer, useState } from 'react';
import useInputs from './useInputs';

const Info = () => {

    // const reducer = (state, action) =>{
    //     console.log(action);
    //     return {
    //         ...state,
    //         [action.name] : action.value
    //     };
    // }

    // const [state, dispatch] = useReducer(reducer, {
    //     name : '',
    //     nickname :''
    // });

    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    })

    const {name, nickname} = state;

    useEffect(()=>{
        console.log('first');
        console.log(name);
        return () => {
            console.log('aa');
            console.log(name);
        }
    }, [])

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;