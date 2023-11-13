import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import yellowfolder from '../images/yellowfolder.PNG';
import arrowback from '../images/arrowback.PNG';
import bar from '../images/bar.PNG';
import home from '../images/home.PNG';
const Data = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left">
            <Link to="/" className="header-logo-link">
              <img src={arrowback} alt="arrowback" className="header-logo" />
            </Link>
          </div>
          <div className="header-center"><img src={bar} alt="bar" className="header-logo"/></div>
          <div className="header-right">
            <Link to="/" className="header-logo-link">
              <img src={home} alt="home" className="header-logo" />
            </Link>
          </div>
        </div>
        <div className="place-container">
          <div className="place-scroll-con">
            <Link to="/data-place1" className="live-data-place">
              <img src={yellowfolder} alt="yellowfolder" className="image-container-place" />
              <div className='image-overlay'>
               <span>학술정보원 창의토론라운지(4층)</span>
              </div>
            </Link>
            <Link to="/data-place2" className="live-data-place">
              <img src={yellowfolder} alt="yellowfolder" className="image-container-place" />
              <div className='image-overlay'>
               <span>SAI 동아리방</span>
              </div>
            </Link>
            <Link to="/data-place3" className="live-data-place">
              <img src={yellowfolder} alt="yellowfolder" className="image-container-place" />
              <div className='image-overlay'>
                <span className="material-symbols-outlined">menu_book</span>
                <span>설명서(좌석 포화도 정보)</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="copyright">
          <span>ⓒseat-nullnull</span>
          <div className="Beta">
            <span className="material-symbols-outlined beta">all_inclusive</span>
            <span className="beta2">Beta</span>
          </div>
        </div>  
      </Mainborder>
    </div>
  )
}
export default Data