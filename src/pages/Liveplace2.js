import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
import SeatMap2 from '../SeatMap2';
const Liveplace2 = () => {
  const [socket, setSocket] = useState(null);
  const [seats, setSeats] = useState([
    { id: 0, pp: 0, st: 0 },
  ]);

  useEffect(() => {
    
    // 컴포넌트가 마운트될 때 WebSocket 연결을 엽니다.
    const newSocket = new WebSocket("ws://seatnullnull.com:8080/ws/data");
    setSocket(newSocket);
    newSocket.onopen = () => {
      console.log("connected");
    };
    newSocket.onclose = (error) => {
      console.log("disconnect");
      console.log(error);
    };
    newSocket.onerror = (error) => {
      console.log("connection error");
      console.log(error);
    };
    newSocket.onmessage = (event) => {
      console.log("Data:", event.data);
      const data = JSON.parse(event.data);
      console.log("data:",data[0]);
      setSeats([data[0]]);
    };
  }, []);

  const seat = seats.find((seat) => seat.id === 0);
  const Positive = (seat?.pp > 0 || seat?.st > 0) ? 1 : 0;

  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/live" className="header-logo-link"> <img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">SAI 동아리방</div>
          <div className="header-right"><Link to="/" className="header-logo-link"> <img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container2">
          <div className="map-scroll-con">
            <SeatMap2/>
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
            <span className="seat-whe1">실시간 전체 포화도 : {Positive}/1</span>
           </div>
        </div>
        <div className="copyright">
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
export default Liveplace2