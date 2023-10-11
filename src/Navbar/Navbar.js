import style from './Navbar.module.css'
import React, { Fragment } from 'react'

export function Navbar() {
    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
                <div className={style.listing_sec_nav}>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
