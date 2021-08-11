import React, { useState } from 'react'
import './mobile-header.css'

import logo from './../../assets/logo.png';
import menu from './../../assets/burger.png';
import close from './../../assets/close.svg'
import { NavLink, Router } from 'react-router-dom';

export const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isAudioOpen, setIsAudioOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const closeMenu = () => {
        document.getElementById('mob-menu').classList.remove('animate__fadeInRight');
        document.getElementById('mob-menu').classList.add('animate__fadeOutRight');
        isProductsOpen && closeProdMenu();
        isAudioOpen && closeAudioMenu();
        isServiceOpen && closeServiceMenu();
        isAboutOpen && closeAboutMenu();
        setTimeout(() => {
            setIsMenuOpen(false);
        },600)
    }

    const closeProdMenu = () => {
        document.getElementById('prodc-menu').classList.remove('animate__fadeInRight');
        document.getElementById('prodc-menu').classList.add('animate__fadeOutRight');
        setTimeout(() => {
            setIsProductsOpen(false);
        },600)
    }

    const closeAudioMenu = () => {
        document.getElementById('aud-menu').classList.remove('animate__fadeInRight');
        document.getElementById('aud-menu').classList.add('animate__fadeOutRight');
        setTimeout(() => {
            setIsAudioOpen(false);
        },600)
    } 

    const closeServiceMenu = () => {
        document.getElementById('serv-menu').classList.remove('animate__fadeInRight');
        document.getElementById('serv-menu').classList.add('animate__fadeOutRight');
        setTimeout(() => {
            setIsServiceOpen(false);
        },600)
    }

    const closeAboutMenu = () => {
        document.getElementById('about-menu').classList.remove('animate__fadeInRight');
        document.getElementById('about-menu').classList.add('animate__fadeOutRight');
        setTimeout(() => {
            setIsAboutOpen(false);
        },600)
    }
    return(
        <>
            <div className='mobile-header'>
                <div>
                    <NavLink to="/"><img src={logo} className="App-logo" style={{height: '18vmin'}} alt="logo"  /></NavLink>
                    
                </div>
                <div>
                    {!isMenuOpen ? 
                    <img src={menu} onClick={()=>setIsMenuOpen(true)} style={{height: '12vmin'}} alt='burgermenu' /> : 
                    <img src={close} onClick={()=> closeMenu()} style={{height: '11vmin'}} alt='burgermenu'/>
                    }
                </div>
            </div>

            {isMenuOpen && (
                <>
                    <div id='mob-menu' className='product-box animate__animated animate__fadeInRight'>
                        <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
                            <NavLink className='nav-item'  activeClassName="nav-active" exact to='/'>
                                <p>HOME</p>
                            </NavLink>
                            <NavLink onClick={() => setIsProductsOpen(true)} className='nav-item'  activeClassName="nav-active" to='/products'>
                                <p>PRODUCTS </p>
                            </NavLink>
                            <NavLink onClick={() => setIsServiceOpen(true)} className='nav-item'  activeClassName="nav-active" to='/services'>
                                <p>SERVICES </p>
                            </NavLink>
                            <NavLink className='nav-item'  activeClassName="nav-active" to='/news'>
                                <p>NEWS</p>
                            </NavLink>
                            <NavLink onClick={() => setIsAboutOpen(true)} className='nav-item'  activeClassName="nav-active" to='/about'>
                                <p>ABOUT</p>
                            </NavLink>
                            <NavLink className='nav-item'  activeClassName="nav-active" to='/contact'>
                                <p>CONTACT</p>
                            </NavLink>
                        </div>
                    </div>
                </>
            )}
            {
                isProductsOpen && (
                    <>
                        <div id='prodc-menu' className='product-box1 animate__animated animate__fadeInRight' >
                        <h5 style={{color: '#fff'}} onClick={() => closeProdMenu()}>Back</h5>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'flex-start', flexDirection: 'row', marginTop: 40,marginBottom: 40}}>
                                    <div style={{display:'flex',justifyContent:'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                                    <p onClick={() => setIsAudioOpen(true)}>Audio Products {`>`}</p>

                                    <p>Interaction Center</p>
                                    <p>Smart Lighting</p>
                                    <p>Home Security</p>
                                </div>
                                <div style={{display:'flex',justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                                <p>Smart HVAC</p>
                                    <p>Home Entertaiment</p>
                                    <p>Domestic Appliances</p>
                                    <p>Smart R+T</p>

                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                isAudioOpen && (
                    <>
                        <div id='aud-menu' className='product-box2 animate__animated animate__fadeInRight' >
                        <h5 style={{color: '#fff'}} onClick={() => closeAudioMenu()}>Back</h5>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'flex-start', flexDirection: 'row', marginTop: 40,marginBottom: 40}}>

                                <div style={{display:'flex',justifyContent:'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                                    <p>Flush Mount Ceiling Speaker</p>
                                            <p>Coaxial Ceiling Speaker</p>
                                            <p>Two-Way Ceiling Speaker</p>
                                            <p>Fireproof Ceiling Speaker</p>
                                            <p>EN54 Ceiling Speaker</p>
                                            <p>Surface Mount Ceiling Speaker</p>
                                </div>
                                <div style={{display:'flex',justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                                <p>Mini Smart Music Host</p>
                                            <p>Network Smart Music Sys</p>
                                            <p>Smart Central Music Sys</p>
                                            <p>Economic Music Sys</p>
                                            <p>Speaker</p>

                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                isServiceOpen && (
                    <>
                    <div id='serv-menu' className='product-box1 animate__animated animate__fadeInRight' >
                        <h5 style={{color: '#fff'}} onClick={() => closeServiceMenu()}>Back</h5>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'flex-start', flexDirection: 'row', marginTop: 40,marginBottom: 40}}>
                                <div style={{display:'flex',justifyContent:'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                                    <p>Installment</p>
                                    <p>Smart Home System</p>
                                    <p>Smart Hotel System</p>
                                    <p>Smart Office System</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                isAboutOpen && (
                    <>
                    <div id='about-menu' className='product-box1 animate__animated animate__fadeInRight' >
                        <h5 style={{color: '#fff'}} onClick={() => closeAboutMenu()}>Back</h5>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'flex-start', flexDirection: 'row', marginTop: 40,marginBottom: 40}}>
                                <div style={{display:'flex',justifyContent:'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                                    <p>Partners</p>
                                    <p>Showroom</p>
                                    <p>Gallery</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}