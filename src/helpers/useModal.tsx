import { useState } from 'react';

type Modal = [boolean, ()=>void];

export const useModal = (bool: boolean):Modal => {
    const [isShow, setShow] = useState(bool);
    const toggleState = () => {
        setShow(!isShow);
    }
    return [isShow, toggleState];
};
