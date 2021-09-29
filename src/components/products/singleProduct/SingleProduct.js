/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios'
import React, { useEffect, useState } from 'react'

// import dataJSON from './../../../API.json'

// import { Spinner } from '../../spinner/Spinner'

// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
// import { ProductTypesCarousel } from '../../carousels/ProductTypesCarousel';
// import { SmartBanner } from '../../smartbanner/SmartBanner';
// import { Footer } from '../../footer/Footer';
// import { AirMasterCentralACControlKit } from '../../vibes/AirMasterCentralACControlKit';
import { DoorWindowSensor } from '../../vibes/DoorWindowSensor';


import { Singlemain } from './Singlemain';
import axios from 'axios';
import dataJSON from './../../../API.json'

SwiperCore.use([Pagination, Navigation]);

export const SingleProduct = ({ match }) => {
    const [product, setProduct] = useState()
    const [isMobile, setMobile] = useState(false);
    let width = 0;

    const handleResize = () => {
        width = window.innerWidth;
        if (width < 900) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    useEffect(() => {
        axios.get(`${dataJSON.API_URL}api/getconcretprod/${match.params.id}`).then(result => {
            setProduct(result.data)
        })
        window.scrollTo(0, 0);
    }, [])
    const unical = () => {
        if (product) {
            if (product.product.unicProduct === "DWS1") {
                return < DoorWindowSensor match={match} />
            } else {
                return <Singlemain match={match} />
            }
        }
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <>

            {isMobile ?
                <Singlemain match={match} />
                :
                unical()
            }
        </>
    )
}
