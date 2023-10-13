import style from './Navbar.module.css'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
export function Navbar() {
    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
                <div className={style.listing_sec_nav}>
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>About us</li>
                        <Link to={'/services'}><li>Services</li></Link>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
