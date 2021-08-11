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

function App() {
  const [isMobile, setMobile] = useState(false);
  let width = 0;

  const handleResize = () => {
      width = window.innerWidth;
      console.log(width);
      if (width < 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <>
    <div className="App">
      {!isMobile ? <Header/> : <MobileHeader/>}
      {/* <Header/> */}
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/test-system" component={TestYourHome} />
      </Switch>
    </div>
    </>
  );
}

export default App;
