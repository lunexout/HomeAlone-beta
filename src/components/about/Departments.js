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


const Departments = () => {
    return (
        <div>
            <div className="single-div" style={{ marginTop: 40 }}>
                <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                    CEO
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
                                <h2>Jovani Ghoghoberidze</h2>
                                <div className="quote">
                                    <h3>CEO And Co-founder</h3>
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
                                <h2>Zurab<br /> Meskhidze</h2>
                                <div className="quote">
                                    <h3>CEO And Co-founder</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-div" style={{ marginTop: 40 }}>
                <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                    Marketing
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
                                <h2>Giorgi Kalandadze</h2>
                                <div className="quote">
                                    <h3>Marketing Manager</h3>
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
                                <h2>Kakhi Kakhidze</h2>
                                <div className="quote">
                                    <h3>Social Media Manager</h3>
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
                                <h2>Khvicha Tebidze</h2>
                                <div className="quote">
                                    <h3>Video Editor</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="single-div" style={{ marginTop: 40 }}>
                <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                    Sales
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
                                <h2>Naniko Mazanishvili</h2>
                                <div className="quote">
                                    <h3>Sales Manager</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="single-div" style={{ marginTop: 40 }}>
                <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
                    Technical And Supply Manager
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
                                <h2>Mikheil donadze</h2>
                                <div className="quote">
                                    <h3>Technical Manager</h3>
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
                                <h2>Ianis Ambelidi</h2>
                                <div className="quote">
                                    <h3>Supply manager</h3>
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
