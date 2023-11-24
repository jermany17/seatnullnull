import React, { useEffect, useState } from 'react';
import './SeatMap.css';
const SeatMap = () => {
  const [socket, setSocket] = useState(null);
  const [seats, setSeats] = useState([
    { id: 0, pp: 0, st: 0, where: 0 },
    { id: 1, pp: 0, st: 0, where: 0 },
    { id: 2, pp: 0, st: 0, where: 0 },
    { id: 3, pp: 0, st: 0, where: 0 },
    { id: 4, pp: 0, st: 0, where: 0 },
    { id: 5, pp: 0, st: 0, where: 0 },
    { id: 6, pp: 0, st: 0, where: 1 },
    { id: 7, pp: 0, st: 0, where: 1 },
    { id: 8, pp: 0, st: 0, where: 1 },
    { id: 9, pp: 0, st: 0, where: 1 },
    { id: 10, pp: 0, st: 0, where: 1 },
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
      //console.log("Data:", event.data);
      const data = JSON.parse(event.data);
      //console.log("data:", data);
      setSeats(prevSeats => {
        const updatedSeats = prevSeats.map(one => {
          const newSeat = data.find(news => news.id === one.id);
          return newSeat || one;
        });
        //console.log("updatedSeats:", updatedSeats);
        // setSeats(updatedSeats);
        return updatedSeats;
      });
    };
  }, []);

  const madeseat1 = (a, c) => {  //(좌석 테이블 좌석 가로로) 
    const seat = seats.find((seat) => seat.id === a);
    const Positive = seat?.pp > 0 || seat?.st > 0;
    const tableBackgroundColor = Positive ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)';

    const displayValue = seat?.pp > c ? c : seat?.pp;

    return (
      <div className="made-seat1">
          <div  className="addcolumn-seat">      
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
          </div>
          <div className="table1" style={{backgroundColor: tableBackgroundColor }}>
            {displayValue}/{c}
            <div className="electric2">
              <span className="material-symbols-outlined power elec2">electrical_services</span>
            </div> 
          </div>
          <div  className="addcolumn-seat">  
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
          </div>
      </div>
    );
  };
  const madeseat2 = (a, c) => {  //(좌석 테이블 좌석 세로로) 
    const seat = seats.find((seat) => seat.id === a);
    const Positive = seat?.pp > 0 || seat?.st > 0;
    const tableBackgroundColor = Positive ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)';
    
    const displayValue = seat?.pp > c ? c : seat?.pp;

    return (
       <div className="made-seat2">
          <div  className="addrow-seat">      
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
          </div>
          <div className="table2" style={{backgroundColor: tableBackgroundColor }}>
            {displayValue}/{c}
            <div className="electric2">
              <span className="material-symbols-outlined power elec2">electrical_services</span>
            </div> 
          </div>
          <div  className="addrow-seat">  
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
            <div className="seat" style={{backgroundColor: tableBackgroundColor }}></div>
          </div>
       </div>
    );
  };
   /*
  const madeseat3 = (a,b,c) => {  // 왼쪽 벽 좌석
    return (
      <div className="made-seat3">
        <div className="table3" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
        <div  className="addcolumn-seat">  
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
        </div>
      </div>
    );
  };
   */
   /*
  const madeseat4 = (a,b,c) => {  // 오른쪽 벽 좌석 
    return (
    <div className="made-seat4">
        <div  className="addcolumn-seat">  
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
        </div>
        <div className="table4" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
      </div>
    );
  };
  */
 /*
  const madeseat5 = (a,b,c) => {  // 아래 벽 좌석
    return (
      <div className="made-seat5">
        <div  className="addrow-seat">      
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
        </div>
        <div className="table5" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
      </div>
    );
  };
  */
  /*
  const madeseat6 = (a,b,c) => {  // 위 벽 좌석
    return (
      <div className="made-seat6">
        <div className="table6" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
        <div  className="addrow-seat">      
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
        </div>
      </div>
    );
  };
  */

  
return (
  <div>
    <div className="seat-container">
      <div className="seat-container-row">
        <div className="white_nextto12"></div>
        <div className="gray_nextto12"><div className="g_n_12"></div><div className="g_n_12_2"></div></div>
        <div className="white_nextto12_2"></div>
        {madeseat2(10,12)}
        <div className="white_nextto12_2"></div>
        <div className="rightlongseat"></div>
      </div>
      <div className="seat-container-row">
        {madeseat1(6,4)}
        {madeseat1(7,4)}
        {madeseat1(8,4)}
        {madeseat1(9,4)}
        <div className="rightlongseat"></div>
      </div>
      <div className="seat-container-gray">
        <div className="all-space"><span>공용 공간</span></div>
        <div className="rightlongseat"></div>
      </div>
      {/*내부 수리중 
      <div className="seat-container-row">
        <div className="all-space2"><span className="material-symbols-outlined">construction</span><span>내부 수리중</span><span className="material-symbols-outlined">construction</span></div>
        <div className="rightlongseat"></div>
      </div>
      */} 
      <div className="seat-container-row">
        {madeseat1(1,4)}
        {madeseat1(2,4)}
        {madeseat1(3,4)}
        {madeseat1(4,4)}
        <div className="rightlongseat"></div>
      </div>
      <div className="seat-container-row">
        <div className="white_nextto12"></div>
        <div className="gray_nextto12"><div className="g_n_12"></div><div className="g_n_12_2"></div></div>
        <div className="white_nextto12_2"></div>
        {madeseat2(5,12)}
        <div className="white_nextto12_2"></div>
        <div className="rightlongseat"></div>
      </div>
      <div className="bottom-gray"></div>
    </div>
  </div>
);
};

export default SeatMap;