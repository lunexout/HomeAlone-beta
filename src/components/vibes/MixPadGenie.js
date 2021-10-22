import React from 'react'
import './MixPadGenie.css'
import cid1 from './img/mixpad_elf_banner.mp4'


import cid2 from './img/sec8-835815b895.png'


import cid3 from './img/sec6_1-568eadad1c.png'
import cid4 from './img/sec6_2-a4bbb47a1f.png'
import cid5 from './img/sec6_3-223014e9b7.png'
import cid6 from './img/sec6_4-d89d46655a.png'
import cid7 from './img/sec6_5-fdaf076235.png'

import cid8 from './img/sec4-3ccc82047c.png'

import cid10 from './img/sec1-ab76cedaea.png'
import cid11 from './img/mixpad_elf_top.mp4'
import cid12 from './img/mixpad_elf_color.mp4'
import cid13 from './img/mixpad_elf_footer.mp4'

import { Footer } from './../footer/Footer'


export const MixPadGenie = () => {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    @media screen and (min-width:1760px) {
                        html {
                            font-size: 100px
                        }
                    }
                    
                    @media (min-width:1360px) and (max-width:1760px) {
                        html {
                            font-size: calc((100vw - 160px)/ 16)
                        }
                    }
                    
                    @media screen and (max-width:1360px) {
                        html {
                            font-size: 75px
                        }
                    }
                    
                    @media screen and (min-width:1920px) {
                        html{
                            font-size: calc(83.34vw / 16)
                        }
                    }        `
                }}
            />
            <div className="elf">
                <div className="elf__banner s__bg"><video id="banner-video" className="banner__video" src={cid1} autoPlay preload muted />
                    <div id="banner-info" className="banner__info">
                        <div className="banner__title"><span className="title_big">MixPad</span> <span className="title_big">Genie</span></div>
                        <div className="banner__slogan">Smart Panel Funny Life</div>
                    </div>
                    <div id="banner-prd" className="elf__product s__bg" />
                </div>
                <div className="secginie1">
                    <img alt="Home Alone" className="secginie1__img s__bg lazy" src={cid10}>
                    </img>
                </div>
                <div className="secginie2 video-box"><video className="bg__video" width="100%" height="100%" src={cid11} loop autoPlay preload muted />
                    <div className="video__mask">
                        <div className="video__watch" data-list={0}>Watch the video</div>
                    </div>
                </div>

                <div className="secginie4">
                    <div className="fadeInUp secginie__title show">Multi-modal Four-dimensional Interaction<br />Used By the Ehole Family</div>
                    <img alt="Home Alone" className="secginie4__img lazy s__bg" src={cid8} >
                    </img>
                </div>
                <div className="secginie5">
                    <div className="secginie__title ">New Installation-free Design<br />Install Whatever You Want</div>
                    <div className="secginie5__prd">
                        <img alt="Home Alone" className="prd__item1 s__bg lazy " src={cid3}>
                        </img>
                        <img alt="Home Alone" className="prd__item2 s__bg lazy " src={cid4}>
                        </img>
                        <img alt="Home Alone" className="prd__item3 s__bg lazy " src={cid5}>
                        </img>
                        <img alt="Home Alone" className="prd__item4 s__bg lazy " src={cid6}>
                        </img>
                    </div><img alt="Home Alone" className="secginie5__img " src={cid7} />
                </div>
                <div className="secginie6">
                    <div className="">
                        <div className="secginie__title">The colorful collision between the painting<br />screenand the panel</div>
                        <div className="secginie__desc">The dynamic super screen that changes automatically every day,<br />it collides with the
                            wall color and panel color fiercely, refreshing your home every day.</div>
                    </div><video className="bg__video" width="100%" height="100%" src={cid12} loop autoPlay preload muted />
                    <div className="secginie6__remind">*Red, orange, blue, green and yellow will be available soon!</div>
                </div>
                <div className="secginie7 video-box"><video className="bg__video" width="100%" height="100%" src={cid13} loop autoPlay preload muted />
                    <div className="video__mask">
                        <div className="secginie__title">Born to be Cool, Super FUN and Colorful</div>
                        <div className="video__watch" data-list={1}>Watch the video</div>
                    </div>
                </div>
                <div className="secginie8">
                    <div className="">
                        <div className="secginie__title">Multiple Protocol Connections<br />Make Traditional Home Appliances Smart</div>
                        <div className="secginie__desc">A variety of communication protocols, which can be connected to a variety of home
                            appliances such as air<br />conditioners, washing machines, TVs, clothes dryers, etc. Traditional home
                            appliances become smart in<br />seconds, and you can experience smart life.</div>
                    </div>
                    <img alt="Home Alone" className="secginie8__bg s__bg lazy" src={cid2}>
                    </img>
                </div>

            </div>
            <Footer />

        </div >
    )
}
