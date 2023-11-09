import React, { useEffect, useState } from 'react';
import './SeatMap.css';
const SeatMap2 = () => {
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

  const madeseat21 = (a,c) => {  //(좌석 테이블 좌석 가로로) 
    const seat = seats.find((seat) => seat.id === a);
    const Positive = seat?.pp > 0 || seat?.st > 0;
    const tableBackgroundColor = Positive ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)';
    return (
      <div className="made-seat21">
          <div  className="addcolumn-seat21">      
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
          </div>
          <div className="table21" style={{backgroundColor: tableBackgroundColor}}>
            {seat?.pp}/{c}    
            <div className="electric">
              <span class="material-symbols-outlined power elec">electrical_services</span>
            </div>
          </div>
          <div  className="addcolumn-seat21">  
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
          </div>
      </div>
    );
  };

  
return (
  <div>
    <div className="seat-container">
      <div className="seat-container-row21">
        {madeseat21(0,8)}
      </div>
    </div>
  </div>
);
};

export default SeatMap2;