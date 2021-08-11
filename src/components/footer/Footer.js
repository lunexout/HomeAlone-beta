import React, { useEffect, useState } from 'react'
// import {NavLink } from "react-router-dom";
import Right from './../../assets/right1.png'

export const Footer = () => {
    const [ProductsBox, setProductsBox] = useState(true);
    const [isMobile, setMobile] = useState(false);
    let width = 0;

    const handleResize = () => {
        width = window.innerWidth;
        console.log(width);
        if (width < 900) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
        window.removeEventListener("resize", handleResize);
        }
    })
    return(
        <>
            <div style={{height: 'auto ', width: '100%', backgroundColor: '#20232A',
            display: 'flex', justifyContent:'center', alignItems:'center'
            }}>
                <div className='footer-div'>
                    <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center',width: '100%',flexWrap: 'wrap',paddingTop: 15}}>
                        {/* <div style={{color: '#5A5D62'}}>© Copyright - 2021 All Rights Reserved | Powered by Cyber Solution LTD</div> */}
                        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', gap: 10, flexWrap:'wrap'}}>
                            <div className='img-divs'>
                                <img src='https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/accept-call.png' alt=''/>
                                <p style={{marginLeft: 10}}>+995 577-41-05-10</p>
                            </div>
                            <div className='img-divs'>
                                <img src='https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png' alt=''/>
                                <p style={{marginLeft: 10}}>INFO@HOMEALONE.GE</p>

                            </div >
                            <div className='img-divs'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png' alt=''/>
                                <p style={{marginLeft: 10}}>LTD HOME ALONE</p>

                            </div><div className='img-divs'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png' alt=''/>
                                <p style={{marginLeft: 10}}>LTD HOME ALONE</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                {ProductsBox && (
                    <>
                        <div className='product-box animate__animated'>
                            <div className='full-box-div'>
                                <div style={{display:'flex', justifyContent:'center', flexDirection: 'column'}}>
                                    {isMobile && <p>Audio Products</p> }
                                    <p>Interaction Center</p>
                                    <p>Smart Lighting</p>
                                    <p>Home Security</p>
                                    <p>Smart R+T</p>
                                    <p>Smart HVAC</p>
                                    <p>Home Entertaiment</p>
                                    <p>Domestic Appliances</p>
                                </div>
                                {!isMobile && (
                                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center',flexDirection: 'column',flexWrap:'wrap'}}>
                                    <h3>Audio Products</h3>
                                    <div style={{display: 'flex', gap: 30,flexWrap:'wrap'}}>
                                        <div style={{display:'flex', flexDirection: 'column'}}>
                                            <p>Flush Mount Ceiling Speaker</p>
                                            <p>Coaxial Ceiling Speaker</p>
                                            <p>Two-Way Ceiling Speaker</p>
                                            <p>Fireproof Ceiling Speaker</p>
                                            <p>EN54 Ceiling Speaker</p>
                                            <p>Surface Mount Ceiling Speaker</p>
                                        </div>
                                        <div style={{display:'flex', flexDirection: 'column'}}>
                                            <p>Mini Smart Music Host</p>
                                            <p>Network Smart Music Sys</p>
                                            <p>Smart Central Music Sys</p>
                                            <p>Economic Music Sys</p>
                                            <p>Speaker</p>
                                        </div>
                                    </div>
                                </div>
                                )}
                                {!isMobile && (<div  className='products-right' style={{display:'flex', flexDirection: 'column', padding: 0,borderRadius: 25}}>
                                   <img src={Right}  alt=""/>
                                </div>)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}