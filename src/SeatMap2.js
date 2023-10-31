import React, { useState } from 'react';
import './SeatMap.css';
const SeatMap2 = () => {
  const [seats] = useState([
    { id: 0, pp: 1, st: 1 },
  ]);

  const madeseat21 = (a,c) => {  //(좌석 테이블 좌석 가로로) 
    const seat = seats.find((seat) => seat.id === a);
    const Positive = seat?.pp > 0 || seat?.st > 0;
    const tableBackgroundColor = Positive ? 'rgb(200, 2, 2)' : 'rgb(235, 216, 11)';
    return (
      <div className="made-seat21">
          <div  className="addcolumn-seat21">      
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
            <div className="seat21" style={{backgroundColor: tableBackgroundColor}}></div>
          </div>
          <div className="table21" style={{backgroundColor: tableBackgroundColor}}>{seat?.pp}/{c}</div>
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
        {madeseat21(0,4)}
      </div>
      <div className="electric">
        <span class="material-symbols-outlined power elec">electrical_services</span>
      </div>
    </div>
  </div>
);
};

export default SeatMap2;