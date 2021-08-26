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
                <div className="col-md-12">
                  {/*PRICE HEADING START*/}
                  
                  {/*//PRICE HEADING END*/}
                </div>
              </div>
            </div>
            <div className="container">
              {/*BLOCK ROW START*/}
              <div className="row">
                <div className="col-md-4">
                  {/*PRICE CONTENT START*/}
                  <div className="generic_content clearfix">
                    {/*HEAD PRICE DETAIL START*/}
                    <div className="generic_head_price clearfix">
                      {/*HEAD CONTENT START*/}
                      <div className="generic_head_content clearfix">
                        {/*HEAD START*/}
                        <div className="head_bg" />
                        <div className="head">
                          <span>Basic</span>
                        </div>
                        {/*//HEAD END*/}
                      </div>
                      {/*//HEAD CONTENT END*/}
                      {/*PRICE START*/}
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">99</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                      {/*//PRICE END*/}
                    </div>                            
                    {/*//HEAD PRICE DETAIL END*/}
                    {/*FEATURE LIST START*/}
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    {/*//FEATURE LIST END*/}
                    {/*BUTTON START*/}
                    <div className="generic_price_btn clearfix">
                      <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    {/*//BUTTON END*/}
                  </div>
                  {/*//PRICE CONTENT END*/}
                </div>
                <div className="col-md-4">
                  {/*PRICE CONTENT START*/}
                  <div className="generic_content active clearfix">
                    {/*HEAD PRICE DETAIL START*/}
                    <div className="generic_head_price clearfix">
                      {/*HEAD CONTENT START*/}
                      <div className="generic_head_content clearfix">
                        {/*HEAD START*/}
                        <div className="head_bg" />
                        <div className="head">
                          <span>Standard</span>
                        </div>
                        {/*//HEAD END*/}
                      </div>
                      {/*//HEAD CONTENT END*/}
                      {/*PRICE START*/}
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">199</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                      {/*//PRICE END*/}
                    </div>                            
                    {/*//HEAD PRICE DETAIL END*/}
                    {/*FEATURE LIST START*/}
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    {/*//FEATURE LIST END*/}
                    {/*BUTTON START*/}
                    <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    {/*//BUTTON END*/}
                  </div>
                  {/*//PRICE CONTENT END*/}
                </div>
                <div className="col-md-4">
                  {/*PRICE CONTENT START*/}
                  <div className="generic_content clearfix">
                    {/*HEAD PRICE DETAIL START*/}
                    <div className="generic_head_price clearfix">
                      {/*HEAD CONTENT START*/}
                      <div className="generic_head_content clearfix">
                        {/*HEAD START*/}
                        <div className="head_bg" />
                        <div className="head">
                          <span>Unlimited</span>
                        </div>
                        {/*//HEAD END*/}
                      </div>
                      {/*//HEAD CONTENT END*/}
                      {/*PRICE START*/}
                      <div className="generic_price_tag clearfix">  
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">299</span>
                          <span className="cent">.99</span>
                          <span className="month">/MON</span>
                        </span>
                      </div>
                      {/*//PRICE END*/}
                    </div>                            
                    {/*//HEAD PRICE DETAIL END*/}
                    {/*FEATURE LIST START*/}
                    <div className="generic_feature_list">
                      <ul>
                        <li><span>2GB</span> Bandwidth</li>
                        <li><span>150GB</span> Storage</li>
                        <li><span>12</span> Accounts</li>
                        <li><span>7</span> Host Domain</li>
                        <li><span>24/7</span> Support</li>
                      </ul>
                    </div>
                    {/*//FEATURE LIST END*/}
                    {/*BUTTON START*/}
                    <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    {/*//BUTTON END*/}
                  </div>
                  {/*//PRICE CONTENT END*/}
                </div>
              </div>  
              {/*//BLOCK ROW END*/}
            </div>
          </section>             
        </div>
     
      </div>
    )
}
export default Price

