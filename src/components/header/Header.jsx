import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.name}>CapyBlappy</h1>
        </div>
    )
}

export default Header;