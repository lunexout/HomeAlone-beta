import React from 'react'



import './News.css';
import { Footer } from '../footer/Footer';

import Testermania from '../testpages/Testermania';

export const News = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <Testermania />
      <Footer />
    </>
  )
}

