import React, { useState } from 'react';
import './SeatMap.css';
const SeatMap = () => {
  const [seats] = useState([
    { id: 1, isOccupied: 0 },
    { id: 2, isOccupied: 1 },
    { id: 3, isOccupied: 1 },
    { id: 4, isOccupied: 0 },
    { id: 5, isOccupied: 1 },
    { id: 6, isOccupied: 0 },
    { id: 7, isOccupied: 1 },
    { id: 8, isOccupied: 1 },
    { id: 9, isOccupied: 0 },
    { id: 10, isOccupied: 0 },
    { id: 11, isOccupied: 0 },
    { id: 12, isOccupied: 0 },
    // 추가적인 좌석 정보...
  ]);

  const madeseat1 = (a,b,c) => {  //(좌석 테이블 좌석 가로로) 
    return (
      <div className="made-seat1">
          <div  className="addcolumn-seat">      
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          </div>
          <div className="table1" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
          <div  className="addcolumn-seat">  
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          </div>
      </div>
    );
  };
  const madeseat2 = (a,b,c) => {  //(좌석 테이블 좌석 세로로) 
    return (
       <div className="made-seat2">
          <div  className="addrow-seat">      
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          </div>
          <div className="table2" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
          <div  className="addrow-seat">  
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          </div>
       </div>
    );
  };
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
  const madeseat6 = (a,b,c) => { 
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

  
return (
  <div>
    <div className="seat-container">
      <div className="seat-container-row">
        {madeseat6(1,0,0)}
        {madeseat6(2,2,3)}
        {madeseat6(3,1,3)}
      </div>
      <div className="electric">
        <span class="material-symbols-outlined power elec">electrical_services</span>
        <span class="material-symbols-outlined power elec">electrical_services</span>
      </div>
      <div className="seat-container-row">
        {madeseat1(4,0,6)}
        {madeseat1(5,0,6)}
        {madeseat1(6,0,6)}
      </div>
      <div className="electric">
        <span class="material-symbols-outlined power elec">electrical_services</span>
        <span class="material-symbols-outlined power elec">electrical_services</span>
      </div>
      <div className="seat-container-row">
        {madeseat3(7,3,3)}
        {madeseat2(8,4,6)}
        {madeseat4(9,0,6)}
      </div>
      <div className="seat-container-row">
        {madeseat5(10,0,0)}
        {madeseat5(11,0,0)}
        {madeseat5(12,0,0)}
      </div>
    </div>
  </div>
);
};

export default SeatMap;