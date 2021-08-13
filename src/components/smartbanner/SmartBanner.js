import React from 'react'
import { NavLink } from 'react-router-dom'

import NEXT from './../../assets/next.png'

export const SmartBanner = () => {
    return(
        <>
        <div className='smart-home-banner'>
            {/* <p >Test your smart system</p> */}
                <NavLink className='test-btn' to='/test-system'>
                    <img src={NEXT} alt='testing'/>
                </NavLink>
        </div>
        </>
    )
}