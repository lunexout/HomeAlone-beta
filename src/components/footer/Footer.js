import React from "react";
import "./Footer.css";
import logo from "./../../assets/logo.png";
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';



export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container1">
            <div className="row">
              <div className="col-lg-4 col-md-12 m-md-auto align-self-center">
                <div className="block">
                  <p >
                    <img
                      src={logo}
                      alt="footer-logo"
                      style={{ width: "150px" }}
                    />
                  </p>
                  <ul className="social-icon list-inline">
                    <li className="list-inline-item">
                    <a href="tel:577410510">
                      <img
                        alt="phone"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/accept-call.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      />
                      </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="mailto:info@homealone.ge">
                      <img
                        alt="Mail"
                        src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      /></a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://www.facebook.com/Ltd-Home-Alone-112617230247518">
                      <img
                        alt="Facebook"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div className="block-2">
                  <h6 style={{textTransform:'lowercase'}}>{t('Company')}</h6>
                  <ul>
                    <li>
                    <NavLink className='insidemenu-nav-item'  activeClassName="nav-active" exact to='/' style={{textTransform:'lowercase'}}>
                       <p >{t('HOME')}</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/services' style={{textTransform:'lowercase'}}>
                       <p >{t('SERVICES')}</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/products' style={{textTransform:'lowercase'}}>
                       <p >{t('PRODUCTS')}</p>
                    </NavLink>
                    </li>

                  </ul>
                </div>
                
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6 style={{textTransform:'lowercase'}}>{t('ABOUT')}</h6>
                  <ul>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/partners' style={{textTransform:'lowercase'}}>
                       <p >{t('Partners')}</p>
                       </NavLink>
                    </li>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/showroom' style={{textTransform:'lowercase'}}>
                       <p >{t('Showroom')}</p>
                       </NavLink>
                    </li>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/gallery' style={{textTransform:'lowercase'}}>
                       <p >{t('Gallery')}</p>
                       </NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div className="block-2">
                  <h6 style={{textTransform:'lowercase'}}>{t('FeedBack')}</h6>
                  <ul>
                    <li>
                    <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/contact'>
                       <p  style={{textTransform:'lowercase'}}>{t('CONTACT')}</p>
                       </NavLink>
                    </li>
                    {/* <li>
                      <p >Smart Hotel Solutions</p>
                    </li>
                    <li>
                       <p >Smart Home Solutions</p>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6 style={{textTransform:'lowercase'}}>{t('SERVICES')}</h6>
                  <ul>
                    <li>
                    <NavLink to='/services/smarthome'   className='insidemenu-nav-item' activeClassName="nav-active"  style={{textTransform:'lowercase'}}><p>{t('Smart Home System')}</p></NavLink>
                    </li>
                    <li>
                    <NavLink to='/services/smarthotel'  className='insidemenu-nav-item' activeClassName="nav-active"  style={{textTransform:'lowercase'}}><p>{t('Smart Hotel System')}</p></NavLink>
                    </li>
                    <li>
                    <NavLink to='/services/smartoffice'   className='insidemenu-nav-item' activeClassName="nav-active"  style={{textTransform:'lowercase'}}><p>{t('Smart Office System')}</p></NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-dark py-4">
          <small className="text-secondary">
            © Copyright - All Rights Reserved | Powered by Cyber Solution LTD
          </small>
        </div>
      </footer>
    </>
  );
};
