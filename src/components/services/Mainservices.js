import React from 'react'
import { NavLink } from "react-router-dom";

import image1 from './hotel.png';
import image2 from './office.png';
import image3 from './house.png';



export const Mainservices = () => {
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
                        font-size: 1.8rem;
                    }
            
                  
            
            
            
            
                    .vcenter {
                        display: flex;
                        align-items: center;
                        height: 300px;
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
                    }       `
                }}
            />



            <div className="grid-container">
                <div className="column imageContainer1 vcenter" style={{ backgroundColor: '#fff', backgroundImage: `url(${image1})` }}>
                    <div>
                        <div className="anim"> <NavLink to='/services/smarthotel' style={{ textDecoration: 'none', color: 'white' }}>Smart Hotel solution</NavLink></div>
                    </div>
                </div>
                <div>
                    <div className="column imageContainer2 vcenter" style={{ backgroundColor: '#fff', backgroundImage: `url(${image2})` }}>
                        <div>
                            <div className="anim"> <NavLink to='/services/smartoffice' style={{ textDecoration: 'none', color: 'white' }}>Smart Office solution</NavLink></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="column imageContainer3 vcenter" style={{ backgroundColor: '#fff', backgroundImage: `url(${image3})` }}>
                        <div>
                            <div className="anim"> <NavLink to='/services/smarthome' style={{ textDecoration: 'none', color: 'white' }}>Smart Home solution</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

