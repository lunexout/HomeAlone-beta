import React from 'react'
import { NavLink } from 'react-router-dom'
import NEXT from './../../assets/next.png'

export const RightTestSysytem = () => {
    return(
        <>
            <div style={{position: 'fixed', backgroundColor:'#32363E', zIndex: 999999999, 
            justifyContent:'center', alignItems:'center', textAlign:'center', borderBottomRightRadius: 10,borderTopRightRadius: 10}} className='leftSideBtn'>
                <NavLink to='/test-system' style={{}}>
                    <img src={NEXT} style={{paddingTop: 4}} alt='testing'/>
                </NavLink>               
            </div>
        </>
    )
}