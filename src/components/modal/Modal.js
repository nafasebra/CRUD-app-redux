import React from 'react';

import style from './Modal.module.css';
import theme from './../Theme.module.css'

const Modal = (props) => {

    const {
        children, isOpen, isTitle, title, toCloseModal
    } = props

    return (
        <>
            {
                isOpen ?
                <div className={style.modal_container}>
                    <div className={style.modal}>
                        <div className={style.modal_header}>
                            {
                                isTitle &&
                                <h3 className={style.modal_title}>{title}</h3>
                            }
                            <button 
                                className={theme.btn_icon}
                                onClick={() => toCloseModal()}
                            >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className={style.modal_body}>
                            {children}
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Modal;
