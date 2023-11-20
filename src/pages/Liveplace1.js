import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
import SeatMap from '../SeatMap';
const Liveplace1 = () => {
  const [socket, setSocket] = useState(null);
  const [seats, setSeats] = useState([
    { id: 0, pp: 0, st: 0, where: 0 },
    { id: 1, pp: 0, st: 0, where: 0 },
    { id: 2, pp: 0, st: 0, where: 0 },
    { id: 3, pp: 0, st: 0, where: 0 },
    { id: 4, pp: 0, st: 0, where: 0 },
    { id: 5, pp: 0, st: 0, where: 0 },
    { id: 6, pp: 0, st: 0, where: 0 },
    { id: 7, pp: 0, st: 0, where: 1 },
    { id: 8, pp: 0, st: 0, where: 1 },
    { id: 9, pp: 0, st: 0, where: 1 },
    { id: 10, pp: 0, st: 0, where: 1 },
    { id: 11, pp: 0, st: 0, where: 1 },
    { id: 12, pp: 0, st: 0, where: 1 },
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
      console.log("data:", data);
      setSeats(prevSeats => {
        const updatedSeats = prevSeats.map(one => {
          const newSeat = data.find(news => news.id === one.id);
          return newSeat || one;
        });
        console.log("updatedSeats:", updatedSeats);
        // setSeats(updatedSeats);
        return updatedSeats;
      });
    };
  }, []);

  const positiveValues = [];

  for (let i = 1; i <= 12; i++) {
    const seat = seats.find((seat) => seat.id === i);
    const positive = (seat?.pp > 0 || seat?.st > 0) ? 1 : 0;
    positiveValues.push(positive);
  }
  const totalPositive = positiveValues.reduce((total, value) => total + value, 0);

  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/live" className="header-logo-link"> <img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">학술정보원 창의토론라운지(4층)</div>
          <div className="header-right"><Link to="/" className="header-logo-link"> <img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container2">
          <div className="map-scroll-con">
            <SeatMap/>
          </div>
        </div>
        <div className="footer">
           <div className="liveinfo1">
            <span>시간 : 9:00 ~ 22:00</span>
            <span className="seat-whe1">토론 가능 여부 :<span className="material-symbols-outlined talking">circle</span></span>
            <span className="seat-whe1">콘센트 위치 :<span className="material-symbols-outlined power">electrical_services</span></span>
           </div>
           <div className="liveinfo2">
            <span className="seat-whe1"><div className="seat-whe2"></div>가용 테이블</span>
            <span className="seat-whe1"><div className="seat-whe3"></div>불가용 테이블</span>
            <span className="seat-whe1">실시간 전체 포화도 : {totalPositive}/12</span>
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
export default Liveplace1