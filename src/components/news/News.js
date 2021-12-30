import React from 'react'

import { BrowserView, MobileView } from "react-device-detect";


import './News.css';
import { Footer } from '../footer/Footer';

import Testermania from '../testpages/Testermania';
import { Testnews } from '../testpages/Testnews';

export const News = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <MobileView>
        <Testnews />
      </MobileView>
      <BrowserView><Testermania /></BrowserView>
     
      <Footer />
    </>
  )
}

