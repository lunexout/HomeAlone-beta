import React from 'react'
import './Departments.css'

import IMG1 from './department_images/241261132_1863637503809892_4035385193378907772_n.jpg'
import IMG2 from './department_images/240389366_5031814000178606_5407943068340778411_n.jpg'
import IMG3 from './department_images/18423189_1455984187778771_3259540577915865490_o.jpg'
import IMG4 from './department_images/245051853_4013007205471453_3028106217623954854_n.jpg'
import IMG5 from './department_images/109803647_3404564399587947_6244733945744512342_n.jpg'
import IMG6 from './department_images/264083702_2174636466051423_5454546767082989622_n.jpg'
import IMG7 from './department_images/74226527_2893185477372846_2201737228206473216_n.jpg'
import IMG8 from './department_images/88c41e34-960c-46dc-a9be-3f82c698ba8c.jfif'

import { useTranslation } from 'react-i18next';

const Departments = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="single-div" style={{ marginTop: 40 }}>
                <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                {t('CEO')}
                </h1>
            </div>

             <div className="cardsdep">
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG1} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Jovani Ghoghoberidze')}</h2>
                                 <div className="quote">
                                     <h3>{t('CEO And Co-founde')}r</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG2} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Zurab Meskhidze')}</h2>
                                 <div className="quote">
                                     <h3>{t('CEO And Co-founde')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="single-div" style={{ marginTop: 40 }}>
                 <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                 {t('Marketing')}
                 </h1>
             </div>

             <div className="cardsdep">
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG3} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Giorgi Kalandadze')}</h2>
                                 <div className="quote">
                                     <h3>{t('Marketing Manager')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG4} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Kakhi Kakhidze')}</h2>
                                 <div className="quote">
                                     <h3>{t('Social Media Manager')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG5} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Khvicha Tebidze')}</h2>
                                 <div className="quote">
                                     <h3>{t('Video Editor')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>


             </div>

             <div className="single-div" style={{ marginTop: 40 }}>
                 <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                 {t('Sales')}
                 </h1>
             </div>

             <div className="cardsdep">
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG6} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Naniko Mazanishvili')}</h2>
                                 <div className="quote">
                                     <h3>{t('Sales Manager')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>


             </div>

             <div className="single-div" style={{ marginTop: 40 }}>
                 <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                 {t('Technical And Supply Manager')}
                 </h1>
             </div>

             <div className="cardsdep">
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG7} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Mikheil donadze')}</h2>
                                 <div className="quote">
                                     <h3>{t('Technical Manager')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="carddep">
                     <div className="container">
                         <div className="carddep">
                             <div className="imgBx">
                                 <img src={IMG8} alt="dennis-ritchie" border={0} />
                             </div>
                             <div className="contentBx">
                                 <h2>{t('Ianis Ambelidi')}</h2>
                                 <div className="quote">
                                     <h3>{t('Supply manager')}</h3>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>

             </div>

         </div>
    )
}

export default Departments
