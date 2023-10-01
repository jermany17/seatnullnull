import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
import Test from '../Test';
const Dataplace2 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/data" className="header-logo-link"><img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">장소2!!!!!</div>
          <div className="header-right"><Link to="/" className="header-logo-link"><img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <Test></Test>
        <div className="copyright">ⓒseom-j</div>
      </Mainborder>
    </div>
  )
}

export default Dataplace2