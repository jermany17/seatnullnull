import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
import SeatMap from '../SeatMap';
const Liveplace1 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/live" className="header-logo-link"> <img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">장소1</div>
          <div className="header-right"><Link to="/" className="header-logo-link"> <img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container2">
          <div className="map-scroll-con">
            <div className="window">창문<span class="material-symbols-outlined window-door-icon">cards</span></div>
            <SeatMap/>
            <div className="door"><div className="door2">입구<span class="material-symbols-outlined window-door-icon">door_sliding</span></div></div>
          </div>
        </div>
        <div className="footer">
           <div className="liveinfo1">
            <span>시간 : 10:00 ~ 21:00</span>
            <span className="seat-whe1">토론 가능 여부 :<span class="material-symbols-outlined talking">circle</span></span>
            <span className="seat-whe1">콘센트 위치 :<span class="material-symbols-outlined power">electrical_services</span></span>
           </div>
           <div className="liveinfo2">
            <span className="seat-whe1"><div className="seat-whe2"></div>가용 테이블</span>
            <span className="seat-whe1"><div className="seat-whe3"></div>불가용 테이블</span>
            <span className="seat-whe1">실시간 전체 포화도 : 6/12</span>
           </div>
        </div>
        <div className="copyright">ⓒseat-nullnull</div>
      </Mainborder>
    </div>
  )
}
export default Liveplace1