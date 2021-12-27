
import React from 'react'
import './Partners.css'
import './Partners.scss'

import { Link, NavLink } from "react-router-dom";


import IMG14 from './images/7th heaven.jpg'
import IMG2 from './images/Alley palace.jpg'
import IMG1 from './images/al mare batumi.jpg'
import { useTranslation } from 'react-i18next';



export const Partnersfor = () => {
  const { t } = useTranslation();

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    button {
                        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'/%3E%3C/svg%3E");
                        background-repeat: no-repeat;
                        background-position: 140px 5px;
                        width: 150px;
                        height: 40px;
                        font-size: 16px;
                        padding: 1px 7px 1px 7px;
                      }
                      
                      button:hover {
                        transition: background-position 0.5s ease, padding-left 0.5s ease;
                        background-position: 113px 5px;
                        padding-left: 0;
                      }
                    .card1 {
                        color: white;
                        height: 200px;
                        line-height: 200px;
                        vertical-align:middle;
                      }
                      
                      .cards1 {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-gap: 1rem;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                      }
                    }      
                    .buttons-coll {
                      width: 90%;
                      margin: 50px auto;
                      text-align: center;
                    }
                    
                    .custom-btn {
                      padding: 10px 25px;
                      font-family: "Roboto", sans-serif;
                      font-weight: 500;
                      background: transparent;
                      outline: none !important;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      position: relative;
                      display: inline-block;
                      color:#04846a;
                    }
                    
                    
                    /**** BTN No. 4 ****/
                    .btn-4 {
                      width: 130px;
                      height: 40px;
                      line-height: 42px;
                      padding: 0;
                      border: none;
                    }
                    .btn-4 span {
                      position: relative;
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                    .btn-4:before,
                    .btn-4:after {
                      position: absolute;
                      content: "";
                      right: 0;
                      top: 0;
                      background: #04846a;
                      transition: all 0.3s ease;
                    }
                    .btn-4:before {
                      height: 50%;
                      width: 2px;
                    }
                    .btn-4:after {
                      width: 20%;
                      height: 2px;
                    }
                    .btn-4:hover:before {
                      height: 100%;
                    }
                    .btn-4:hover:after {
                      width: 100%;
                    }
                    .btn-4 span:before,
                    .btn-4 span:after {
                      position: absolute;
                      content: "";
                      left: 0;
                      bottom: 0;
                      background: #04846a;
                      transition: all 0.3s ease;
                    }
                    .btn-4 span:before {
                      width: 2px;
                      height: 50%;
                    }
                    .btn-4 span:after {
                      width: 20%;
                      height: 2px;
                    }
                    .btn-4 span:hover:before {
                      height: 100%;
                    }
                    .btn-4 span:hover:after {
                      width: 100%;
                    }
` 
        }} 
      />
      <h1 className="abouttitlewidth2 marginizer font-bold leading-tight text-center colorizer">
        {t('Partners')}
      </h1>

        <div class="grid-container23">
  <div>

  <div class="container">
            </div>
            <div class="card1"><Link to={`/about/partners/0`}><img alt="home alone" src={IMG2} /></Link></div>

  </div>
  <div>



  <div class="container">
           </div>
           <div class="card1"><Link to={`/about/partners/1`}><img alt="home alone" src={IMG1} /></Link></div>

  </div>
  <div>
      
      
  <div class="container">
  <div class="card1"><Link to={`/about/partners/13`}><img alt="home alone" src={IMG14} /></Link></div>

           </div>
      </div>  
  <div>
  <div class="container">
  <div class="card1">

<NavLink to='/about/partners'>

  <div class="buttons-coll">
    <button class="custom-btn btn-4"><span>Read More</span></button>
  </div>

</NavLink>

</div>
        </div>
  </div>
</div>
{/* 
      <div class="cards1">
        <div class="card1"><Link to={`/about/partners/0`}><img alt="home alone" src={IMG2} /></Link></div>
        <div class="card1"><Link to={`/about/partners/1`}><img alt="home alone" src={IMG1} /></Link></div>
        <div class="card1"><Link to={`/about/partners/13`}><img alt="home alone" src={IMG14} /></Link></div>
        <div class="card1">

          <NavLink to='/about/partners'>

            <div class="buttons-coll">
              <button class="custom-btn btn-4"><span>Read More</span></button>
            </div>

          </NavLink>

        </div>
      </div> */}



      <div style={{ marginTop: 40 }}></div>
    </>
  )
}

