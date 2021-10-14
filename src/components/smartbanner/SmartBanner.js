import React from 'react'
import { NavLink } from 'react-router-dom'

import NEXT from './../../assets/next.png'

export const SmartBanner = () => {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
.blobs-container {
  display: flex;
}

.blob {
  background: #009174;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 145, 116, 1); 
  margin: 10px;
  width: 70px;
  height: 70px;
  transform: scale(20);
  animation: pulse-black 1.5s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 145, 116, 1);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
       `
                }}
            />

            <div className='smart-home-banner'>
                <NavLink className='test-btn' to='/test-system'>
                    <img className="blob" src={NEXT} alt='testing' />
                </NavLink>
            </div>
        </>
    )
}