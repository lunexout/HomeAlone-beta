import React from 'react'
import { ProductTypesCarousel } from '../carousels/ProductTypesCarousel'

import logoprod1 from './../../assets/audio.png';
import logoprod2 from './../../assets/interact.png';
import logoprod3 from './../../assets/light.png';
import logoprod4 from './../../assets/security.png';
import logoprod5 from './../../assets/Curtain_4ae1b6b39b529.png';
import logoprod6 from './../../assets/hvac.png';
import logoprod7 from './../../assets/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png';
import logoprod8 from './../../assets/home.png';
import logoprod9 from './../../assets/hotel.png';
export const ProductBann = () => {
    return (
        <div>
            <div>

                <ProductTypesCarousel ProductList={[
                    { mainImage: logoprod1, name: 'Audio Products', type: 'Audio_Products' },
                    { mainImage: logoprod2, name: 'Interaction Center', type: 'Interaction_Center' },
                    { mainImage: logoprod3, name: 'Smart Lighting', type: 'Smart_Lighting' },
                    { mainImage: logoprod4, name: 'Home Security', type: 'Home_Security' },
                    { mainImage: logoprod5, name: 'Smart Curtain', type: 'Smart_R+T' },
                    { mainImage: logoprod6, name: 'Temperature Control', type: 'Smart_HVAC' },
                    { mainImage: logoprod7, name: 'Home Entertaiment', type: 'Home_Entertaiment' },
                    { mainImage: logoprod8, name: 'Domestic Appliances', type: 'Domestic_Appliances' },
                    { mainImage: logoprod9, name: 'Hotel System', type: 'Hotel_System' },
                ]} />
            </div>
        </div>
    )
}