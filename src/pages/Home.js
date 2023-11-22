import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Home.css'
import './Mainborder.css'
import main from '../images/main.PNG';
import folder from '../images/folder.PNG';

const Home = () => {
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
          <div className="cpr21"> 
            <span>ⓒseat-nullnull</span>
            <div className="Beta">
              <span className="material-symbols-outlined beta">all_inclusive</span>
              <span className="beta2">Beta</span>
            </div>
          </div>
          <div className="cpr22">
            <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fseatnullnull.com%3A3000&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
          </div>
        </div>  
      </Mainborder>
    </div>
  )
}
export default Home