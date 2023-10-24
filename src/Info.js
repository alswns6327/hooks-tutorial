import React, { useEffect, useReducer, useState } from 'react';

const Info = () => {

    const reducer = (state, action) =>{
        console.log(action);
        return {
            ...state,
            [action.name] : action.value
        };
    }

    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname :''
    });

    const {name, nickname} = state;

    useEffect(()=>{
        console.log('first');
        console.log(name);
        return () => {
            console.log('aa');
            console.log(name);
        }
    }, [])

    const onChangeName = e => {
        dispatch(e.target);
    }

    const onChangeNickname = e => {
        dispatch({name : e.target.name, value : e.target.value});
    }

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChangeName}/>
                <input name='nickname' value={nickname} onChange={onChangeNickname}/>
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