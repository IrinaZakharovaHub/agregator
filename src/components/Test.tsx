import * as React from 'react';
import {FunctionComponent, useState} from "react";
import Modal from './Modal';
import {useModal} from '../helpers/useModal';


const Test:FunctionComponent = () => {
    const [isShow, toggleState] = useModal(false);
    return (
        <>
            <div onClick={()=>toggleState()}>CLICK!</div>
            <Modal title='Hello' show={isShow} onToggle={toggleState}/>
        </>
    );
}

export default Test;