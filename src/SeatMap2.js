import React, { useEffect, useState } from 'react';
import './SeatMap.css';
const SeatMap2 = () => {
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

  const madeseat21 = (a,c) => {  //(좌석 테이블 좌석 가로로) 
    const seat = seats.find((seat) => seat.id === a);
    const Positive = seat?.pp > 0; // 원래 seat?.pp > 0 || seat?.st > 0
    const tableBackgroundColor = Positive ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)';
    return (
      <div className="made-seat21">
          <div  className="addcolumn-seat21">      
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
          </div>
          <div className="table21" style={{backgroundColor: tableBackgroundColor}}>
            {seat?.pp}/{c}    
            <div className="electric2">
              <span className="material-symbols-outlined power elec2">electrical_services</span>
            </div>
          </div>
          <div  className="addcolumn-seat21">  
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