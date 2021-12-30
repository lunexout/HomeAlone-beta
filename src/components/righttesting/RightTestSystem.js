import React from 'react'
import { NavLink } from 'react-router-dom'
import NEXT from './../../assets/next.png'
// import Fb from './../../assets/1200px-Facebook_f_logo_(2019).svg.png'
export const RightTestSysytem = () => {
    return(
        <>
            <div style={{position: 'fixed'  /*, backgroundColor:'#20232A'*/, zIndex: 999999999,top: 150,
            justifyContent:'center', alignItems:'center', textAlign:'center', borderBottomRightRadius: 10,borderTopRightRadius: 10}} className='leftSideBtn'>
                <NavLink to='/test-system' style={{}}>
                    <img src={NEXT} style={{paddingTop: 4}} alt='testing'/>
                </NavLink>               
            </div>
            {/* <div style={{display:'block',position: 'fixed'  , zIndex: 999999999,top: 150,
            justifyContent:'center', alignItems:'center', textAlign:'center', borderBottomRightRadius: 10,borderTopRightRadius: 10}} className='leftSideBtn'>
                <NavLink to='/test-system' style={{}}>
                    <img src={Fb} style={{paddingTop: 4}} alt='testing'/>
                </NavLink>               
            </div> */}
        </>
    )
}