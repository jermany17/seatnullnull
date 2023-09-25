import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
const Liveplace3 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/live" className="header-logo-link"> <img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">장소3</div>
          <div className="header-right"><Link to="/" className="header-logo-link"> <img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container2">
          <h1>장소3 좌석 여부</h1>
        </div>
        <div className="footer">
          다른 정보들(토론 가능 여부, 가용 좌석 표시, 불가용 좌석 표시)
        </div>
        <div className="copyright">ⓒseom-j</div>
      </Mainborder>
    </div>
  )
}
export default Liveplace3