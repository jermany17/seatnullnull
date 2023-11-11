import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
// import Test from '../Test';

const Dataplace3 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/data" className="header-logo-link"><img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center"><span class="material-symbols-outlined">menu_book</span></div>
          <div className="header-right"><Link to="/" className="header-logo-link"><img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container3">
          <div className="textinfoma">
            <div className="textinfo">
              <h1 className="Textinfo">설명서(좌석 포화도 정보)</h1>
              <span>aaaaaaa</span>
              <span>bbbbbbbbb</span>
              <span>ccccccccccc</span>
              <span>ddddddddddddd</span>
              <span>eeeeeeeeeeeeeee</span>
            </div>
          </div>
        </div>
        <div className="copyright">ⓒseat-nullnull</div>
      </Mainborder>
    </div>
  )
}
/*
<div className="place-container3">
 <h1 className="lastweek">Comming Soon : D</h1>
 <Test></Test>
</div>
*/
export default Dataplace3