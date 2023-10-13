import React from 'react';
import style from './Footer.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footer_content}>
                    <div className={style.footer_column}>
                        <h3>About</h3>
                        <p>This is a test website made by Manish Kumar Patra from Balasore Odisha India I'm a 22-year-old guy who is passionate about web development. Coding is my creative outlet, and I enjoy crafting websites and web applications. When I'm not coding, I'm exploring nature and do click some photos of the nature.
                        </p>
                    </div>
                    <div className={style.footer_column}>
                        <h3>Services</h3>
                        <ul className={style.footer_links}>
                            <li>
                                <a href="#12">Web Developement</a>
                            </li>
                            <li>
                                <a href="#12">Web Application Development</a>
                            </li>
                            <li>
                                <a href="#12">Social Media Management</a>
                            </li>
                            <li>
                                <a href="#12">Branding Solutions</a>
                            </li>
                            <li>
                                <a href="#12">Cloud Storage Solutions</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <h3>Follow Us</h3>
                        <ul className={style.social_links}>
                            <li>
                                <a href="https://twitter.com">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com">
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com">
                                    <WhatsAppIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="{style.footer_bottom}">
                    <p>&copy; {new Date().getFullYear()} Cust Ts. Created By Manish All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};