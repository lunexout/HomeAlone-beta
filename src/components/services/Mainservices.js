import React from 'react'
import { NavLink } from "react-router-dom";

import image1 from './hotel.png';
import image2 from './office.png';
import image3 from './house.png';
import { useTranslation } from 'react-i18next';



export const Mainservices = () => {
    const { t } = useTranslation();
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .grid-container {
                        display: grid;
                        grid-template-columns: auto auto auto;
                        gap: 10px;
                    }
            
                    .grid-container>div {
                        text-align: center;
                    }
            
                    .imageContainer1,
                    .imageContainer2,
                    .imageContainer3 {
                        height: 300px;
                        font-weight: 800;
                        color: #fff;
                        vertical-align: bottom;
                    }
            
                  
            
            
            
            
                    .vcenter {
                        display: flex;
                        align-items: center;
                        height: 300px;
                        justify-content: center;
                        background-position: center; 

                    }
            
                    .anim {
                        color: #fff;
                        text-decoration: none;
            
                        display: inline-block;
                        padding: 15px 20px;
                        position: relative;
                    }
            
                    .anim:after {
                        background: none repeat scroll 0 0 transparent;
                        bottom: 0;
                        content: "";
                        display: block;
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        background: #fff;
                        transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        width: 0;
                    }
            
                    .anim:hover:after {
                        width: 100%;
                        left: 0;
                    }      
                    
                    @media  only screen and (max-width: 500px) {
                        .grid-container{
                            grid-template-columns: auto auto;
                        }
                        
                        .imageContainer1,
                    .imageContainer2,
                    .imageContainer3 {
                        width:100%;
                        font-weight: 800;
                        color: #fff;
                        vertical-align: bottom;

                    }
                      }
                    
                    
                    `
                }}
            />



            <div className="grid-container">
                <div>
                    <div className="column imageContainer3 vcenter" style={{ backgroundColor: '#fff', backgroundSize:"500px",backgroundImage: `url(${image3})`, backgroundRepeat: 'no-repeat', margin: 'auto' , width:'500px'}}>
                        <div>
                            <div className="anim"> <NavLink to='/services/smarthome' style={{ textDecoration: 'none', color: 'white' }}>{t('Smart Home System')}</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="column imageContainer1 vcenter" style={{ backgroundColor: '#fff', backgroundImage: `url(${image1})`, backgroundRepeat: 'no-repeat'  }}>
                    <div>
                        <div className="anim"> <NavLink to='/services/smarthotel' style={{ textDecoration: 'none', color: 'white' }}>{t('Smart Hotel System')}</NavLink></div>
                    </div>
                </div>
                <div>
                    <div className="column imageContainer2 vcenter" style={{ backgroundColor: '#fff', backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat'  }}>
                        <div>
                            <div className="anim"> <NavLink to='/services/smartoffice' style={{ textDecoration: 'none', color: 'white' }}>{t('Smart Office System')}</NavLink></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}





