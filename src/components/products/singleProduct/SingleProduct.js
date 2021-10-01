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
import { AirMasterCentralACControlKit } from '../../vibes/AirMasterCentralACControlKit';
import { AlloneProRFIRHub } from '../../vibes/AlloneProRFIRHub';
import { IPCamera } from '../../vibes/IPCamera';
import { MagicCubeWifiIRController } from '../../vibes/MagicCubeWifiIRController';
import { MixPadGenie } from '../../vibes/MixPadGenie';
import { MixPadMiniSuperSmartPanel } from '../../vibes/MixPadMiniSuperSmartPanel';
import { MixPadSAllinoneGatewayPanel } from '../../vibes/MixPadSAllinoneGatewayPanel';
import { SmartCurtainMotor } from '../../vibes/SmartCurtainMotor';
import { SmartCurtainMotorKit } from '../../vibes/SmartCurtainMotorKit';
import { SmartDoorLockC1 } from '../../vibes/SmartDoorLockC1';
import { SmartDoorLockS2 } from '../../vibes/SmartDoorLockS2';
import { SmartLEDLight } from '../../vibes/SmartLEDLight';
import { SuperSmartSwitch } from '../../vibes/SuperSmartSwitch';
import { TemperatureHumiditySensor } from '../../vibes/TemperatureHumiditySensor';
import { TouchClassicZigbeeSwitchSeries } from '../../vibes/TouchClassicZigbeeSwitchSeries';
import { ZigbeeCombustibleGasSensor } from '../../vibes/ZigbeeCombustibleGasSensor';
import { ZigbeeCOSensor } from '../../vibes/ZigbeeCOSensor';
import { ZigbeeEmergencyButton } from '../../vibes/ZigbeeEmergencyButton';
import { ZigbeeSmokeSensor } from '../../vibes/ZigbeeSmokeSensor';
import { ZigbeeWaterLeakageSensor } from '../../vibes/ZigbeeWaterLeakageSensor';

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
            } else if (product.product.unicProduct === "AMCACK ") {
                return < AirMasterCentralACControlKit match={match} />
            } else if (product.product.unicProduct === "APRIH") {
                return < AlloneProRFIRHub match={match} />
            } else if (product.product.unicProduct === "IC") {
                return < IPCamera match={match} />
            } else if (product.product.unicProduct === "MCWIC") {
                return < MagicCubeWifiIRController match={match} />
            } else if (product.product.unicProduct === "MG") {
                return < MixPadGenie match={match} />
            } else if (product.product.unicProduct === "MMSSP") {
                return < MixPadMiniSuperSmartPanel match={match} />
            } else if (product.product.unicProduct === "MSAGP") {
                return < MixPadSAllinoneGatewayPanel match={match} />
            } else if (product.product.unicProduct === "SCM") {
                return < SmartCurtainMotor match={match} />
            } else if (product.product.unicProduct === "SCMK") {
                return < SmartCurtainMotorKit match={match} />
            } else if (product.product.unicProduct === "SDLC1") {
                return < SmartDoorLockC1 match={match} />
            } else if (product.product.unicProduct === "SDLS2") {
                return < SmartDoorLockS2 match={match} />
            } else if (product.product.unicProduct === "SLL") {
                return < SmartLEDLight match={match} />
            } else if (product.product.unicProduct === "SSS") {
                return < SuperSmartSwitch match={match} />
            } else if (product.product.unicProduct === "THS") {
                return < TemperatureHumiditySensor match={match} />
            } else if (product.product.unicProduct === "TCZSS") {
                return < TouchClassicZigbeeSwitchSeries match={match} />
            } else if (product.product.unicProduct === "ZCGS") {
                return < ZigbeeCombustibleGasSensor match={match} />
            } else if (product.product.unicProduct === "ZCS") {
                return < ZigbeeCOSensor match={match} />
            } else if (product.product.unicProduct === "ZEB") {
                return < ZigbeeEmergencyButton match={match} />
            } else if (product.product.unicProduct === "ZSS") {
                return < ZigbeeSmokeSensor match={match} />
            } else if (product.product.unicProduct === "ZWLS") {
                return < ZigbeeWaterLeakageSensor match={match} />
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
