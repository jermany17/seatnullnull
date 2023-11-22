import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Home.css'
import './Mainborder.css'
import main from '../images/main.PNG';
import folder from '../images/folder.PNG';

import ReactGA from 'react-ga';

const Home = () => {

  useEffect(() => {
    // 초기화
    ReactGA.initialize('G-G2T92F45SY');
    // 페이지 로드마다 이벤트 전송
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []); // 빈 배열은 컴포넌트 마운트 시 한 번만 실행하도록 함

  return (
    <div className="fullscreen">
      <Mainborder>
        <img src={main} alt="main" className="image-container"/>
        <div className="two-link">
          <Link to="/live" className="image-link">
              <img src={folder} alt="folder" className="image-container2" />
              <div className='image-overlay'>
                <span className="material-symbols-outlined liveseat">airline_seat_legroom_extra</span>
                <span className='font-style'>실시간 좌석 여부</span>
              </div>
          </Link>
          <Link to="/data" className="image-link">
              <img src={folder} alt="folder" className="image-container2" />
              <div className='image-overlay'>
                <span className="material-symbols-outlined seatdata">bar_chart_4_bars</span>
                <span className='font-style'>장소별 좌석 포화도</span>
              </div>
          </Link>
        </div>
        <div className="copyright2">
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
export default Home