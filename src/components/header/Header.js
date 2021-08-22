import React, { useState } from 'react'
import './header.css'
import logo from './../../assets/logo.png';
import Right from './../../assets/right1.png'
import TBC_LOGO from './../../assets/TBC_Bank_logo.svg'

import PARTNER1 from './../../assets/partners/guru.jpg'
import PARTNER2 from './../../assets/partners/citron.jpg'
import PARTNER3 from './../../assets/partners/black-sea.jpg'

import {NavLink } from "react-router-dom";

export const Header = () => {
    const [ProductsBox, setProductsBox] = useState(false);
    const [ServicesBox, setServicesBox] = useState(false);
    const [AboutBox, setAboutBox] = useState(false);

    const OpenBox = (arg) => {
        if(arg === 2) {
            setProductsBox(true);
            setServicesBox(false);
            setAboutBox(false)
        }else if(arg === 3) {
            setProductsBox(false);
            setServicesBox(true);
            setAboutBox(false)
        }else if(arg === 4) {
            setProductsBox(false);
            setServicesBox(false);
            setAboutBox(true)
        }
        else {
            setProductsBox(false);
            setServicesBox(false);
            setAboutBox(false)
        }
    }

    return(
        <>
            <div className='header' >
                <div className='animate__animated animate__fadeInLeft' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div onMouseEnter={() => OpenBox(0)}>
                    <NavLink className='nav-item'  activeClassName="nav-active" exact to='/' >
                    <p>HOME</p>
                    </NavLink>
                </div>
                <div onMouseEnter={() => OpenBox(2)}>
                    <NavLink className='nav-item' activeClassName="nav-active" to='/products' onClick={() => OpenBox(5)}>
                    <p>PRODUCTS </p>
                    </NavLink>
                </div>
                <div onMouseEnter={() => OpenBox(3)}>
                    <NavLink className='nav-item' activeClassName="nav-active" to='/services' onClick={() => OpenBox(5)}>
                    <p style={{borderRight: 'none'}}>SERVICES 	</p>
                    </NavLink>
                </div>
                </div>
                <NavLink className='nav-item'  activeClassName="nav-active" exact to='/' >
                <div onMouseEnter={() => OpenBox(0)} className='animate__animated animate__zoomIn'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                </NavLink>

                <div className='animate__animated animate__fadeInRight' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div onMouseEnter={() => OpenBox(4)}>
                    <NavLink className='nav-item' activeClassName="nav-active" to='/about' onClick={() => OpenBox(5)}>
                    <p>ABOUT </p>
                    </NavLink>
                </div>
                <div onMouseEnter={() => OpenBox(0)}>
                    <NavLink className='nav-item' activeClassName="nav-active" to='/news'>
                    <p>NEWS</p>
                    </NavLink>
                </div>
                <div onMouseEnter={() => OpenBox(0)}>
                    <NavLink className='nav-item' activeClassName="nav-active" to='/contact'>
                    <p >CONTACT</p>
                    </NavLink>
                </div>
                <div >
                    <p style={{borderRight: 'none'}} className='nav-item-lang'>EN</p>
                </div>
                </div>
            </div>
            <div>
                {ProductsBox && (
                    <>
                        <div onMouseLeave={() => setProductsBox(false)} className='product-box animate__animated animate__fadeInRight'>
                            <div className='full-box-div'>
                                <div style={{display:'flex', flexDirection: 'column', }}>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Interaction_Center' style={{textDecoration: 'none'}}>
                                    <p>Interaction Center</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Smart_Lighting' style={{textDecoration: 'none'}}>
                                    <p>Smart Lighting</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Home_Security' style={{textDecoration: 'none'}}>
                                    <p>Home Security</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Smart_R+T' style={{textDecoration: 'none'}}>
                                    <p>Smart R+T</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Smart_HVAC' style={{textDecoration: 'none'}}>
                                    <p>Smart HVAC</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Home_Entertaiment' style={{textDecoration: 'none'}}>
                                    <p>Home Entertaiment</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Domestic_Appliances' style={{textDecoration: 'none'}}>
                                    <p>Domestic Appliances</p>
                                    </NavLink>
                                </div>
                                <div style={{display: 'flex', justifyContent:'center', alignItems:'center',flexDirection: 'column'}}>
                                    <h3>Audio Products</h3>
                                    <div style={{display: 'flex', gap: 30}}>
                                        <div style={{display:'flex', flexDirection: 'column'}}>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Flush_Mount_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>Flush Mount Ceiling Speaker</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Coaxial_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>Coaxial Ceiling Speaker</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Two-Way_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>Two-Way Ceiling Speaker</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Fireproof_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>Fireproof Ceiling Speaker</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/EN54_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>EN54 Ceiling Speaker</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Surface_Mount_Ceiling_Speaker' style={{textDecoration: 'none'}}>
                                            <p>Surface Mount Ceiling Speaker</p>
                                    </NavLink>

                                        </div>
                                        <div style={{display:'flex', flexDirection: 'column'}}>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Mini_Smart_Music_Host' style={{textDecoration: 'none'}}>
                                            <p>Mini Smart Music Host</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Network_Smart_Music_Sys' style={{textDecoration: 'none'}}>
                                            <p>Network Smart Music Sys</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Smart_Central_Music_Sys' style={{textDecoration: 'none'}}>
                                            <p>Smart Central Music Sys</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Economic_Music_Sys' style={{textDecoration: 'none'}}>
                                            <p>Economic Music Sys</p>
                                    </NavLink>
                                    <NavLink className='nav-item' activeClassName="nav-active" to='/products/group/Speaker' style={{textDecoration: 'none'}}>
                                            <p>Speaker</p>
                                    </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div  className='products-right' style={{display:'flex', flexDirection: 'column', padding: 0,borderRadius: 25}}>
                                    <img src={Right}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {ServicesBox && (
                    <>
                        <div onMouseLeave={() => setServicesBox(false)} className='product-box animate__animated animate__fadeInRight'>
                            <div className='full-box-div'>
                                <div style={{display:'flex', flexDirection: 'column', }}>
                                    <p>Installment</p>
                                    <p>Smart Home System</p>
                                </div>
                                <div style={{display:'flex', flexDirection: 'column', }}>
                                    <p>Smart Hotel System</p>
                                    <p>Smart Office System</p>
                                </div>
                                <div>
                                    <img src={TBC_LOGO} alt ='' style={{height: 120}}/>
                                </div>
                                {/* <div style={{marginTop: 30}}>
                                    <img src={Right2} alt =''/>
                                </div> */}
                            </div>
                        </div>
                    </>
                )}
                {AboutBox && (
                    <>
                        <div onMouseLeave={() => setAboutBox(false)} className='product-box animate__animated animate__fadeInRight'>
                            <div className='full-box-div'>
                                <div style={{display:'flex', flexDirection: 'column', }}>
                                <p>
                                <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/partners'>Partners</NavLink>
                                </p>
                                    <p>Showroom</p>
                                <p>
                                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/gallery'>
                                Gallery
                                </NavLink>
                                </p>
                                </div>
                                <div className='partners' style={{ display: 'flex', justifyContent:'center', gap: 10, alignItems:'center'}}>
                                    <img src={PARTNER1} style={{height: 130, width: 'auto'}} alt=''/>
                                    <img src={PARTNER2} style={{height: 130}}alt=''/>
                                    <img src={PARTNER3} style={{height: 130}}alt=''/>
                                    <div style={{height: 130, padding: 10, display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    <p>
                                        <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/partners'>See More</NavLink>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}