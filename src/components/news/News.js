import React from 'react'
import IMG1 from './images/c897f8bdec804c6ba862a27d479b73fe.jpg';
import IMG2 from './images/da9004a31c039c127c5cc9ceed466333.jpg';
import IMG3 from './images/543c1ca41ba5d54d30af221391ab45c3.jpg';
import IMG4 from './images/ca86e55b8d68227620a8508a3ee468cd.jpg';
import IMG5 from './images/49855146b7a994ccaa748904063a8c66.jpg';
import IMG6 from './images/f5e409b121d7aed1ae63b1ed65b84dc8.jpg';
import IMG7 from './images/2c0b7003c0c82dfe9ea10981e831bc54.jpg';
import IMG8 from './images/ba062de88f3188a9979f16f673adc397.jpg';
import IMG9 from './images/646395786aecf08bb6351703d65a74d9.jpg';


import './News.css';
import { Footer } from '../footer/Footer';

import { useTranslation } from 'react-i18next';
import Testermania from '../testpages/Testermania';

export const News = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div>
        <section className="u-clearfix u-section-1" id="carousel_cceb">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div className="u-size-26">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                        <div className="u-container-layout u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1" style={{ backgroundColor: '#009073 !important' }}>
                          <div className="u-border-9 u-border-palette-1-base u-line u-line-vertical u-line-1" />
                          <h1 className="u-align-left-md u-text u-title u-text-1" style={{ fontFamily: "Gowun Dodum", fontWeight: 'bold' }}>{t('NewsName1')}
                          </h1>
                          <p className="u-align-left-md u-large-text u-text u-text-variant u-text-2" style={{ fontFamily: "Gowun Dodum" }}>{t('NewsText1')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-34">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-2">
                        <div className="u-container-layout">
                          <img src={IMG1} alt="Myimage" className="u-image u-image-default u-image-1" />
                        </div>
                      </div>
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                        <div className="u-container-layout">
                          <img src={IMG2} alt="Myimage" className="u-image u-image-default u-image-2" />
                        </div>
                      </div>
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-4">
                        <div className="u-container-layout">
                          <img src={IMG3} alt="Myimage" className="u-expanded-height-lg u-expanded-height-md u-expanded-height-xl u-expanded-height-xs u-image u-image-default u-image-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-clearfix u-section-2" id="carousel_43dc">
          <div className="u-clearfix u-sheet u-sheet-1">
            <img src={IMG4} alt="Myimage" className="u-align-left u-image u-image-1" />
            <img src={IMG5} alt="Myimage" className="u-align-left u-image u-image-2" />
            <div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1">
              <div className="u-container-layout u-valign-middle-sm u-container-layout-1" style={{ backgroundColor: '#fff' }}>
                <h2 className="u-text u-text-1" style={{ fontFamily: "Gowun Dodum", fontWeight: 'bold' }}>{t('NewsName2')}</h2>
                <p className="u-text u-text-2" style={{ fontFamily: "Gowun Dodum" }}>
                  {t('NewsText2')}


                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="u-clearfix u-section-4" id="carousel_207b">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-opacity u-opacity-25 u-palette-2-light-1 u-shape u-shape-rectangle u-shape-1" />
            <div className="u-align-left u-left-0 u-palette-1-base u-shape u-shape-2" />
            <img src={IMG6} alt="Myimage" className="u-align-left u-image u-image-1" />
            <div className="u-align-left u-container-style u-expanded-width-sm u-group u-right-0 u-group-1">
              <div className="u-container-layout u-container-layout-1">
                <h2 className="u-align-left-md u-text u-text-1" style={{ fontFamily: "Gowun Dodum", fontWeight: 'bold' }}>{t('NewsName3')}</h2>
                <p className="u-align-left-md u-text u-text-2">
                  {t('NewsText3')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="u-clearfix u-section-5" id="carousel_af72">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-size-20 u-size-30-md">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-36 u-layout-cell-1">
                        <div className="u-container-layout">
                          <div className="u-align-left u-expanded-width-md u-palette-1-light-2 u-shape u-shape-1" />
                          <img src={IMG7} alt="Myimage" className="u-align-left u-image u-image-1" />
                        </div>
                      </div>
                      <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-24 u-layout-cell-2">
                        <div className="u-container-layout u-container-layout-2">
                          <h4 className="u-custom-font u-heading-font u-text u-text-1">{t('RGB LIGHT system')}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-20 u-size-30-md">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
                        <div className="u-container-layout u-container-layout-3">
                          <h4 className="u-custom-font u-heading-font u-text u-text-2">{t('Modern House Analogy')}</h4>
                        </div>
                      </div>
                      <div className="u-align-left u-container-style u-layout-cell u-size-36 u-layout-cell-4">
                        <div className="u-container-layout">
                          <div className="u-align-left u-palette-1-light-2 u-shape u-shape-2" />
                          <img src={IMG8} alt="Myimage" className="u-align-left u-image u-image-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-20 u-size-60-md">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-36 u-layout-cell-5">
                        <div className="u-container-layout u-container-layout-5">
                          <div className="u-align-left u-palette-1-light-2 u-shape u-shape-3" />
                          <img src={IMG9} alt="Myimage" className="u-align-left u-image u-image-3" />
                        </div>
                      </div>
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-24 u-layout-cell-6">
                        <div className="u-container-layout u-container-layout-6">
                          <h4 className="u-custom-font u-heading-font u-text u-text-3">{t('Journal & OK About US')}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Testermania />
      <Footer />
    </>
  )
}

