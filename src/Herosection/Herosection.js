import React, { Fragment } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Images/pexels-andrew-neel-2859169.jpg'
import img2 from '../Images/pexels-connor-mcmanus-17366637.jpg'
import img3 from '../Images/pexels-emre-can-acer-2079228.jpg'
import img4 from '../Images/pexels-jeremy-bishop-8241135.jpg'
import img5 from '../Images/pexels-porapak-apichodilok-346885.jpg'

export function Herosection() {
    return (
        <Fragment>
            <Carousel autoPlay stopOnHover={false} showThumbs={false} infiniteLoop interval={3000}>
                <div>
                    <img src={img1} alt='' />
                </div>
                <div>
                    <img src={img2} alt='' />

                </div>
                <div>
                    <img src={img3} alt='' />
                </div>
                <div>
                    <img src={img4} alt='' />
                </div>
                <div>
                    <img src={img5} alt='' />
                </div>
            </Carousel>
        </Fragment>
    )
}
