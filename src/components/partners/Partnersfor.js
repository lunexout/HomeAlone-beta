
import React from 'react'
import './Partners.css'
import './Partners.scss'

import { NavLink } from "react-router-dom";


import IMG14 from './images/7th heaven.jpg'
import IMG2 from './images/Alley palace.jpg'
import IMG1 from './images/al mare batumi.jpg'
import { useTranslation } from 'react-i18next';



export const Partnersfor = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
@import url(@import url(https://fonts.googleapis.com/css?family=Lato:400,300);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);
.stage {
padding:40px;
text-align:center;}

@import url(@import url(https://fonts.googleapis.com/css?family=Lato:400,300);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);
.stage {
padding:40px;
text-align:center;}
.newsp {
  line-height:1em;
  letter-spacing:0.06em;
  font-family: 'Lato', sans-serif;
  font-weight:normal;
  font-size:16px;
  text-decoration:none;
  color:#fff;
  background:#55a955;
  display:inline-block;
  padding:15px 12px 15px 15px;
  transition:background 200ms;
  border-radius:4px;
}
.newsp:hover {
  background:#26992b;
}
.newsp:after {
  font-family: 'FontAwesome', sans-serif;
  font-weight:300;
  content: "\f105";
  margin-left:20px;
  color:#cea052;
  font-size:18px;
  vertical-align:middle;
  transition:color 200ms;
}

.newsp:hover:after {
  color:#231f20;
}
`
        }}
      />
      <h1 className="abouttitlewidth2 marginizer font-bold leading-tight text-center colorizer">
        {t('Partners')}
      </h1>
      <div class="cards1">
        <div class="card1"><img alt="home alone" src={IMG2} /></div>
        <div class="card1"><img alt="home alone" src={IMG1} /></div>
        <div class="card1"><img alt="home alone" src={IMG14} /></div>
        <div class="card1">

          <NavLink to='/about/partners'>

            <div class="stage">
              <span class="newsp">{t('See More')}</span>
            </div>
          </NavLink>

        </div>
      </div>



      <div style={{ marginTop: 40 }}></div>
    </>
  )
}

