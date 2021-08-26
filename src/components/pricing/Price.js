import React from 'react'
import { NavLink } from 'react-router-dom'
import './price.css'
export const Price = () => {
    return (
        <div>
        <div id="generic_price_table">   
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="generic_content clearfix">
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg" />
                        <div className="head">
                          <span>Basic</span>
                        </div>
                      </div>
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">99</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                    </div>                            
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    <div className="generic_price_btn clearfix">
                      <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="generic_content active clearfix">
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg" />
                        <div className="head">
                          <span>Standard</span>
                        </div>
                      </div>
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">199</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                    </div>                            
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="generic_content clearfix">
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg" />
                        <div className="head">
                          <span>Unlimited</span>
                        </div>
                      </div>
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">299</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                    </div>                            
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </section>             
        </div>
      </div>
    )
}
export default Price

