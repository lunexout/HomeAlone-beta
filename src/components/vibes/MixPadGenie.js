import React from 'react'
import './MixPadGenie.css'

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
                <div className="elf__banner s__bg"><video id="banner-video" className="banner__video" src="img/mixpad_elf_banner.mp4" autoPlay preload muted />
                    <div id="banner-info" className="banner__info">
                        <div className="banner__title"><span className="title_big">MixPad</span> <span className="title_big">Genie</span></div>
                        <div className="banner__slogan">Smart Panel Funny Life</div>
                    </div>
                    <div id="banner-prd" className="elf__product s__bg" />
                </div>
                <div className="sec1">
                    <div className="sec1__img s__bg lazy" style={{ backgroundImage: 'url("img/sec1-ab76cedaea.png")' }}>
                    </div>
                </div>
                <div className="sec2 video-box"><video className="bg__video" width="100%" height="100%" src="img/mixpad_elf_top.mp4" loop autoPlay preload muted />
                    <div className="video__mask">
                        <div className="video__watch" data-list={0}>Watch the video</div>
                    </div>
                </div>
                <div className="sec3">
                    <div className="fadeInUp sec__title show">Newly Upgraded 3 Ways of Interaction</div>
                    <div className="sec3__list">
                        <div className="sec3__item s__bg lazy" style={{ backgroundImage: 'url("img/sec3_1-4479d1f854.png")' }}>
                            <div className="fadeInUp item__content show" style={{ color: '#5A4505' }}>
                                <div className="item__title">Button</div>
                                <div className="item__desc">
                                    <p>Custom scene button</p>
                                    <p>Turn off the lights of the whole house with one</p>
                                    <p>button when you go out</p>
                                </div>
                            </div>
                        </div>
                        <div className="sec3__item s__bg lazy" style={{ backgroundImage: 'url("img/sec3_2-3294f57114.png")' }}>
                            <div className="fadeInUp item__content show" style={{ color: '#FBF8EF' }}>
                                <div className="item__title">Touch Screen</div>
                                <div className="item__desc">
                                    <p>Accurate control of air conditioning</p>
                                    <p>How many degrees do you want to adjust</p>
                                </div>
                            </div>
                        </div>
                        <div className="sec3__item s__bg lazy" style={{ backgroundImage: 'url(img/sec3_3-5fae5cd6b7.png)' }}>
                            <div className="fadeInUp item__content show" style={{ color: '#5A4505' }}>
                                <div className="item__title">App</div>
                                <div className="item__desc">
                                    <p>If you forget to pull the curtains at work</p>
                                    <p>you can turn off your phone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec4">
                    <div className="fadeInUp sec__title show">Multi-modal Four-dimensional Interaction<br />Used By the Ehole Family</div>
                    <div className="sec4__img lazy s__bg" style={{ backgroundImage: 'url("img/sec4-3ccc82047c.png")' }}>
                    </div>
                </div>
                <div className="sec5">
                    <div className="sec__title fadeInUp show">New Installation-free Design<br />Install Whatever You Want</div>
                    <div className="sec5__prd">
                        <div className="prd__item1 s__bg lazy fadeInUp show" style={{ backgroundImage: 'url("img/sec6_1-568eadad1c.png")' }}>
                        </div>
                        <div className="prd__item2 s__bg lazy fadeInUp show" style={{ backgroundImage: 'url("img/sec6_2-a4bbb47a1f.png")' }}>
                        </div>
                        <div className="prd__item3 s__bg lazy fadeInUp show" style={{ backgroundImage: 'url("img/sec6_3-223014e9b7.png")' }}>
                        </div>
                        <div className="prd__item4 s__bg lazy fadeInUp show" style={{ backgroundImage: 'url("img/sec6_4-d89d46655a.png")' }}>
                        </div>
                    </div><img alt="Home Alone" className="sec5__img fadeInUp show" src="img/sec6_5-fdaf076235.png" />
                </div>
                <div className="sec6">
                    <div className="fadeInUp show">
                        <div className="sec__title">The colorful collision between the painting<br />screenand the panel</div>
                        <div className="sec__desc">The dynamic super screen that changes automatically every day,<br />it collides with the
                            wall color and panel color fiercely, refreshing your home every day.</div>
                    </div><video className="bg__video" width="100%" height="100%" src="img/mixpad_elf_color.mp4" loop autoPlay preload muted />
                    <div className="sec6__remind">*Red, orange, blue, green and yellow will be available soon!</div>
                </div>
                <div className="sec7 video-box"><video className="bg__video" width="100%" height="100%" src="img/mixpad_elf_footer.mp4" loop autoPlay preload muted />
                    <div className="video__mask">
                        <div className="sec__title">Born to be Cool, Super FUN and Colorful</div>
                        <div className="video__watch" data-list={1}>Watch the video</div>
                    </div>
                </div>
                <div className="sec8">
                    <div className="fadeInUp show">
                        <div className="sec__title">Multiple Protocol Connections<br />Make Traditional Home Appliances Smart</div>
                        <div className="sec__desc">A variety of communication protocols, which can be connected to a variety of home
                            appliances such as air<br />conditioners, washing machines, TVs, clothes dryers, etc. Traditional home
                            appliances become smart in<br />seconds, and you can experience smart life.</div>
                    </div>
                    <div className="sec8__bg s__bg lazy" style={{ backgroundImage: 'url("img/sec8-835815b895.png")' }}>
                    </div>
                </div>
                <div className="sec9 s__bg lazy" style={{ backgroundImage: 'url("img/sec9-047d179400.png")' }}>
                    <div className="sec9__content">
                        <div className="sec__title">
                            <p>There are Hidden Skill</p>
                            <p>PointsCan Recharge</p>
                            <p>Your Phone</p>
                        </div>
                        <div className="sec__desc">Like a power bank, it has a Type-C interface,<br />which can charge your mobile phone</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
