import React from 'react'
import { Footer } from './../footer/Footer'
import './contact.css'
import { MdLocationPin } from "react-icons/md";
import { MdMarkunreadMailbox } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import './constacts.scss'
export const Contact = () => {
    const { t } = useTranslation();






    return (
        <>
            <div>
                <header>
                    <div style={{marginTop:"10px"}}>
                        <div className="page-banner">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-md-6">
                                    <h1 className="text-center">{t('ContactUs')}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="page-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 py-3">
                                    <h2 className="title-section"> {t('GetinTouch')}</h2>
                                    <div className="divider" />
                                    <br /><br />
                                    <div className="social-icons">
                                        <a className="social-icon social-icon--instagram" href="https://www.instagram.com/ltdhome.alone/">
                                            <FaInstagram fontSize="20px" />
                                            <div className="tooltip">{t('Instagram')}</div>
                                        </a>
                                        <a className="social-icon social-icon--facebook" href="https://www.facebook.com/homealoneltd">
                                            <FaFacebookF fontSize="20px" />
                                            <div className="tooltip">{t('Facebook')}</div>
                                        </a>
                                    </div><br /><br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Laborum ratione autem quidem veritatis!</p>
                                    <ul className="contact-list">
                                        <li>
                                            <MdLocationPin fontSize="30px" />
                                            <div className="content">{t('addressline')}</div>
                                        </li>
                                        <li>
                                            <MdMarkunreadMailbox fontSize="30px" />
                                            <div className="content">info@homealone.ge</div>
                                        </li>
                                        <li>
                                            <MdPermPhoneMsg fontSize="30px" />
                                            <div className="content">+995 577 410 510</div>
                                        </li>
                                    </ul>



                                </div>
                                <div className="col-lg-6 py-3">
                                    <h2 className="title-section">{t('mapsline')}</h2>
                                    <div className="divider" />
                                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.779890917539!2d41.614655820316976!3d41.64027186772413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067860ad78297a3%3A0x34459cc7869cc754!2zNDHCsDM4JzE4LjEiTiA0McKwMzcnMDAuMSJF!5e0!3m2!1ska!2sge!4v1637671754634!5m2!1ska!2sge" width={570} height={525} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                </div>
                            </div>
                        </div> {/* .container */}
                    </div> {/* .page-section */}
                </main>
            </div>
            <Footer />
        </>
    )
}