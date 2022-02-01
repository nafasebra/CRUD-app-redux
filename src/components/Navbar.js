import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbar_logo}>
                CRUD App
            </div>
        </div>
    );
}

export default Navbar;
