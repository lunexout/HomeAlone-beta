import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';



export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .foot .content {
            max-width: 1760px;
            min-width: 1280px;
            box-sizing: border-box
        }

        

        

        .foot {
            width: 100%;
            background-color: #000;
            padding: 49px 0 0;
            font-family: OPPOSans-Medium, 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial
        }

        .foot .content {
            padding: 0 288.5px;
            margin: 0 auto
        }

        @media screen and (max-width:1440px) {
            .foot .content {
                padding: 40px;
                max-width: 1280px !important
            }
        }

        .foot .foot_top {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 38px
        }

        .foot .link_list>ul>li {
            margin-bottom: 10px;
            line-height: 20px;
            font-size: 14px;
            color: rgba(255, 255, 255, .6)
        }

        .foot .link_list>ul>li:hover {
            color: #fff
        }

        .foot .link_list>ul>li>a {
            font-size: 14px;
            color: rgba(255, 255, 255, .6);
            font-weight: 500
        }

        .foot .link_list>ul>li>a:hover {
            color: #fff
        }

        .foot .link_list .first_li {
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 20px
        }

        .foot .foot_middle {
            position: relative;
            padding-bottom: 21px;
            border-bottom: 1px solid rgba(255, 255, 255, .16)
        }

        .foot .foot_middle .contactus {
            font-size: 16px;
            line-height: 22px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 10px
        }

        .foot .foot_middle .service {
            line-height: 40px;
            text-align: center;
            display: block;
            font-size: 14px;
            width: 156px;
            height: 40px;
            background: 0 0;
            border: 1px solid rgba(255, 255, 255, .6);
            border-radius: 2px;
            position: relative
        }

        .foot .foot_middle .service:hover .img {
            background: url(online_service_active-4780add6bf.png) center no-repeat
        }

        .foot .foot_middle .service:hover span {
            color: #111
        }

        .foot .foot_middle .service:hover:before {
            transition: all .3s;
            width: 100%
        }

        .foot .foot_middle .service .img {
            position: relative;
            z-index: 1;
            vertical-align: middle;
            display: inline-block;
            margin-right: 5px;
            width: 19px;
            height: 16px;
            background: url(online_service-c8e92ccade.png) center no-repeat;
            background-size: cover
        }

        .foot .foot_middle .service span {
            position: relative;
            z-index: 1;
            color: rgba(255, 255, 255, .6);
            transition: all .3s
        }

        .foot .copyright,
        .foot .copyright a {
            color: rgba(255, 255, 255, .5)
        }

        .foot .foot_middle .service:before {
            content: '';
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 2px;
            background: #fff;
            transition: all .3s;
            width: 0
        }

        .foot .foot_middle .contact {
            position: absolute;
            right: 0;
            bottom: 21px;
            display: flex;
            align-items: center
        }

        
        .foot .copyright {
            padding: 20px 0 60px;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            justify-content: center
        }

        .foot .lan {
            display: flex
        }

        .foot .lan a {
            display: block;
            color: #fff;
            font-size: 14px;
            line-height: 20px
        }

        .foot .lan a:nth-child(1) {
            color: rgba(255, 255, 255, .6);
            padding: 0 17px
        }

        .foot .lan a:nth-child(1):hover {
            color: #fff
        }

        .foot .lan a:nth-child(2) {
            color: rgba(255, 255, 255, .6);
            padding-left: 16px
        }

        .foot .lan a:nth-child(2):hover {
            color: #fff
        }

        

       

        @media screen and (min-width:1920px) {
            html {
                font-size: calc(83.34vw / 16)
            }
        }

        

        li,
        ul {
            list-style: none
        }     `
        }}
      />
      <footer className="foot">
        <div className="content">
          <div className="foot_top">
            <div className="link_list">
              <ul>
                <li className="first_li">{t('ABOUT')}</li>


                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/showroom' style={{ textTransform: 'lowercase' }}>
                  <p>{t('Showroom')}</p></NavLink></li>
                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/gallery' style={{ textTransform: 'lowercase' }}>
                  <p >{t('Gallery')}</p>
                </NavLink></li>

              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{t('PRODUCTS')}</li>
                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" exact to='/' style={{ textTransform: 'lowercase' }}>
                  <p >{t('HOME')}</p>
                </NavLink></li>
                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/services' style={{ textTransform: 'lowercase' }}>
                  <p >{t('SERVICES')}</p>
                </NavLink></li>
                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/products' style={{ textTransform: 'lowercase' }}>
                  <p>{t('PRODUCTS')}</p>
                </NavLink></li>
              </ul>
            </div>
            <div className="link_list">
              <ul>
                <li className="first_li">{t('coop')}</li>
                <li>
                  <NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/about/partners' style={{ textTransform: 'lowercase' }}>
                    <p >{t('Partners')}</p>
                  </NavLink></li>
              </ul>
            </div>
            <div className="link_list">
              <ul className="followus">
                <li className="first_li">{t('Solutions')}</li>
                <li>
                  <NavLink to='/services/smarthome' className='insidemenu-nav-item' activeClassName="nav-active" ><p>{t('Smart Home System')}</p></NavLink>
                </li>
                <li>
                  <NavLink to='/services/smarthotel' className='insidemenu-nav-item' activeClassName="nav-active" ><p>{t('Smart Hotel System')}</p></NavLink>
                </li>
                <li>
                  <NavLink to='/services/smartoffice' className='insidemenu-nav-item' activeClassName="nav-active" ><p>{t('Smart Office System')}</p></NavLink>
                </li>
              </ul>
            </div>
            <div className="link_list">
              <ul className="messageus">
                <li className="first_li">{t('FeedBack')}</li>
                <li><NavLink className='insidemenu-nav-item' activeClassName="nav-active" to='/contact'>
                  <p style={{ textTransform: 'lowercase' }}>{t('CONTACT')}</p>
                </NavLink></li>
              </ul>
            </div>
          </div>
          <div className="foot_middle">
            <div>
              <p className="contactus">{t('becpart')}</p><span className="img" />
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright - All Rights Reserved | Powered by Cyber Solution LTD</p>
          </div>
        </div>
      </footer>
    </>
  );
};
