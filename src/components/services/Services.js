import React from 'react'

import { Footer } from './../footer/Footer'
// import { NavLink } from "react-router-dom";

// import { useTranslation } from 'react-i18next';
import Servi from './servi'
export const Services = () => {
  /*const { t } = useTranslation();  */

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Servi />
      <Footer />
    </>
  )
}

export default Services
