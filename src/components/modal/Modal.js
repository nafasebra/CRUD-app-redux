import React from 'react';

import style from './Modal.module.css';


const Modal = ({ children }) => {
    return (
        <div className={style.modal_container}>
            <div className={style.modal}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
