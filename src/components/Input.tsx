import * as React from 'react';
import { useReducer, useEffect, useState } from 'react';
import {FunctionComponent, ReactNode} from "react";
import {validate} from './../helpers/validate';
import Validator from '../props/Validator'

interface Props {
    type: string,
    onInput: (string)=>void,
    validators: Validator[],
    id: string,
}

interface State  {
    value: string,
    isValid: boolean
}

// const reducer = (state: State, action):State => {
//     switch(action.type) {
//         case 'CHANGE':
//             return {
//                 ...state,
//                 value: action.val,
//                 isValid: validate(action.val, action.validators)
//             };
//             default:
//                 return state;
//     }
// } 

const Input:FunctionComponent<Props> = ({type, onInput, validators, id}) => {
    const [val, dispatch] = useState({
        value: '',
        isValid: false
    });

    const inputHandler = (e) => {
        dispatch({value: e.target.value, isValid: validate(e.target.value, validators)});
        // dispatch({type: 'CHANGE', val: e.target.value, validators})
    }

    useEffect(()=>{
        onInput(val)
    },[val])

    return (
        <>
            <input id={id} type={type} onInput={inputHandler}/>
        </>
    );
}

export default Input;