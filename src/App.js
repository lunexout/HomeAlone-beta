import './App.css';
// import './App.scss'
import {Header} from './components/header/Header'
import {Home} from './components/home/Home'
import { Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import {useState} from 'react'

import {MobileHeader} from './components/header/MobileHeader'
import {Contact} from './components/contact/Contact'
import { Products } from './components/products/Products';
import { TestYourHome } from './components/testing/TestYourHome';
import { News } from './components/news/News';
import { about } from './components/about/About';
import { Services } from './components/services/Services';
import Partners from './components/partners/Partners';
import { RightTestSysytem } from './components/righttesting/RightTestSystem';
import { SingleProduct } from './components/products/singleProduct/SingleProduct';
import { Groups } from './components/products/groups/Groups';
import { Gallery } from './components/gallery/Gallery';

function App() {
  const [isMobile, setMobile] = useState(false);
  let width = 0;

  const handleResize = () => {
      width = window.innerWidth;
      if (width < 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })
    
    document.addEventListener('click', () => {
        cursor.classList.add("expand");
    
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <>
    <div className="App">
      {!isMobile ? <Header/> : <MobileHeader/>}
      <RightTestSysytem/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/products/group/:group_id" component={Groups} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={about} />
          <Route exact path="/news" component={News} />
          <Route exact path="/about/partners" component={Partners} />
          <Route exact path="/about/gallery" component={Gallery} />
          <Route exact path="/test-system" component={TestYourHome} />
      </Switch>
    </div>
    </>
  );
}

export default App;
