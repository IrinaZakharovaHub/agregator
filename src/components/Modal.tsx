import * as React from 'react';
import {FunctionComponent, ReactNode, useEffect, useState} from "react";
import ReactDOM = require('react-dom');
import './Modal.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {useModal} from '../helpers/useModal';

interface Props {
    title: String,
    show: Boolean,
    children?: ReactNode,
    onToggle: ()=>void
}

const Modal: FunctionComponent<Props> = ({children, title, show, onToggle}) => {
    const closeModal = () => {
       onToggle()
    };

    const content =
        <TransitionGroup component={null}>
            {show &&
            <CSSTransition
                timeout={300}
                classNames="slide"
                mountOnEnter
                unmountOnExit
            >
                <div className="Modal_Wrapper" onClick={()=>closeModal()}>
                    <div className="Modal" onClick={(e)=>e.stopPropagation()}>
                        <div className="Modal_Close" onClick={()=>closeModal()}>X</div>
                        <div className="Modal_Title">
                            {title}
                        </div>
                        <div className="Modal_Content">
                            {children}
                        </div>
                        <div className="Modal_ButtonBorder">
                            <div className="Modal_Button"  onClick={()=>closeModal()}>
                                 OK
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            }
        </TransitionGroup>;
    return ReactDOM.createPortal(content, document.getElementById('modal'))
};

export default Modal;