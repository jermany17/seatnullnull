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
    { id: 10, isOccupied: 1 },
    { id: 11, isOccupied: 1 },
    { id: 12, isOccupied: 0 },
    // 추가적인 좌석 정보...
  ]);

  const madeseat1 = (a,b,c) => {  //(좌석 테이블 좌석 가로로) 
    return (
      <div className="made-seat1">
          <div  className="addcolumn-seat">      
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
            <div className="seat" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}></div>
          </div>
          <div className="table1" style={{backgroundColor: seats.find((seat) => seat.id === a)?.isOccupied ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)',}}>{b}/{c}</div>
          <div  className="addcolumn-seat">  
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
        {madeseat2(9,0,12)}
        {madeseat2(10,6,12)}
        <div className="white_nextto12_2"></div>
        <div className="rightlongseat"></div>
      </div>
      <div className="electric">
        <span class="material-symbols-outlined power elec">electrical_services</span>
        <div className="rightlongseat"></div>
      </div>
      <div className="seat-container-row">
        {madeseat1(1,0,6)}
        {madeseat1(2,1,6)}
        {madeseat1(3,2,6)}
        {madeseat1(4,0,6)}
        <div className="rightlongseat"></div>
      </div>
      <div className="gray_center">
        <div className="gray_center_left"></div>
        <div className="gray_center_right"></div>
      </div>
      <div className="seat-container-row">
        {madeseat1(5,3,6)}
        {madeseat1(6,0,6)}
        {madeseat1(7,4,6)}
        {madeseat1(8,5,6)}
        <div className="rightlongseat"></div>
      </div>
      <div className="electric">
        <span class="material-symbols-outlined power elec">electrical_services</span>
        <div className="rightlongseat"></div>
      </div>
      <div className="seat-container-row">
        <div className="white_nextto12"></div>
        <div className="gray_nextto12"><div className="g_n_12"></div><div className="g_n_12_2"></div></div>
        <div className="white_nextto12_2"></div>
        {madeseat2(11,4,12)}
        {madeseat2(12,0,12)}
        <div className="white_nextto12_2"></div>
        <div className="rightlongseat"></div>
      </div>
    </div>
  </div>
);
};

export default SeatMap;