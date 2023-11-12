import React from 'react'
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
                <span class="material-symbols-outlined liveseat">airline_seat_legroom_extra</span>
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
            <span class="material-symbols-outlined beta">all_inclusive</span>
            <span class="beta2">Beta</span>
          </div>
        </div>  
      </Mainborder>
    </div>
  )
}
export default Home