import style from './Services.module.css'
import React, { Fragment } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export function Services() {
    return (
        <Fragment>
            <div className={style.pricing_wrapper}>

                <h1 className={style.pricing_table_title}>Services </h1>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_services}>Free</h3>
                    <div className={style.price}>₹0<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon /> Single User</li>
                        <li><CheckIcon />5GB Storage </li>
                        <li><CheckIcon />Unlimited Public Projects </li>
                        <li> <CheckIcon />Community Access </li>
                        <li><ClearIcon />Unlimited Private Projects </li>
                        <li><ClearIcon />Dedicated Phone Support </li>
                        <li><ClearIcon />Free Subdomain</li>
                        <li><ClearIcon />Monthly Status Reports </li>
                    </ul>

                    <div className={style.table_buy}>
                        <button>Button</button>
                    </div>
                </div>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_services}>Plus</h3>
                    <div className={style.price}>₹9<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon /> 5 Users</li>
                        <li><CheckIcon />50GB Storage </li>
                        <li><CheckIcon />Unlimited Public Projects </li>
                        <li> <CheckIcon />Community Access </li>
                        <li><CheckIcon />Unlimited Private Projects </li>
                        <li><CheckIcon />Dedicated Phone Support </li>
                        <li><CheckIcon />Free Subdomain</li>
                        <li><ClearIcon />Monthly Status Reports </li>

                    </ul>

                    <div className={style.table_buy}>
                        <button >Button</button>
                    </div>
                </div>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_services}>Pro</h3>
                    <div className={style.price}>₹49<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon />Unlimited Users</li>
                        <li><CheckIcon />150GB Storage </li>
                        <li><CheckIcon />Unlimited Public Projects </li>
                        <li> <CheckIcon />Community Access </li>
                        <li><CheckIcon />Unlimited Private Projects </li>
                        <li><CheckIcon />Dedicated Phone Support </li>
                        <li><CheckIcon />Unlimited Free Subdomains</li>
                        <li><CheckIcon />Monthly Status Reports </li>
                    </ul>

                    <div className={style.table_buy}>
                        <button >Button</button>
                    </div>
                </div>
            </div>

            <div className={style.services_cards_sub_main}>
                <div className={style.services_gallery}>
                    <div className={style.services_img}>
                        <h3>Web Developement</h3>
                    </div>
                    <div className={style.services_img}>
                        <h3>Web Application Development
                        </h3>
                    </div>
                    <div className={style.services_img}>
                        <h3>Social Media Management
                        </h3>
                    </div>
                    <div className={style.services_img}>
                        <h3>Branding Solutions</h3>
                    </div>
                    <div className={style.services_img}>
                        <h3>Cloud Storage Solutions
                        </h3>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
