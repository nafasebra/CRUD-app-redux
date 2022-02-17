import React from 'react';

import { OpenModal } from '../actions/modalAction';
import { useDispatch } from 'react-redux';

import style from './Navbar.module.css';
import theme from './Theme.module.css';

import AddPost from './modal/child/AddPost'


const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <div className={style.navbar}>
            <div className={style.navbar_logo}>
                CRUD App
            </div>

            <div className={style.nav_icons}>
                {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> */}
                <button className={theme.btn_icon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </button>

                <button 
                    className={theme.btn_icon}
                    onClick={
                        () => dispatch(OpenModal('Adding a post', <AddPost />))
                    }
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
