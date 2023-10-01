import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  // CustomTooltip은 Recharts에서 제공하는 함수형 컴포넌트이다!!!!!!!!
  if (active && payload && payload.length) {
    // active 값이 ture이면 마우스를 올린 것
    // patload에는 데이터들이 들어간다
    // label은 그래프에서 x축으로 사용한 데이터를 의미
    return (
      <div className="custom-tooltip">
        <p>{`${label}시`}</p>
        <p className="custom-tooltip2">{`포화도 : ${payload[0].value}%`}</p>
      </div>
    );
  }
  // false인 경우 데이터를 보여주지 않는다
  return null;
};

const Test = () => {
  const [todaydata, settodayData] = useState(null); // 초기에는 data를 null로 초기화
  const [pastdata, setpastData] = useState(null); // 초기에는 data를 null로 초기화
  useEffect(() => {
    // 서버 주소 설정
    const serverUrl = 'http://www.seatnullnull.com/api/pre';
    const serverUrl2 = 'http://www.seatnullnull.com/api/past';
    var webSocket = new WebSocket("ws://seatnullnull.com/ws/data");

    webSocket.onmessage = function(message){
       console.log(message.data);
     };


    // Axios를 사용하여 GET 요청 보내기
    axios.get(serverUrl)
      .then(response => { // 서버 요청이 성공한 경우 실행된다 
        settodayData(response.data); // 반환된 데이터로 data를 바꾼다.
      })
      .catch(error => {   // 서버 요청이 실패한 경우 실행
        console.error('서버 요청 실패:', error); // 여기서 error는 서버 요청 실패에 관한 정보를 나타낸다.
      });

    axios.get(serverUrl2)
      .then(response => { // 서버 요청이 성공한 경우 실행된다 
        setpastData(response.data); // 반환된 데이터로 data를 바꾼다.
      })
      .catch(error => {   // 서버 요청이 실패한 경우 실행
        console.error('서버 요청 실패:', error); // 여기서 error는 서버 요청 실패에 관한 정보를 나타낸다.
      });


  }, []); // 여기서 []는 컴포넌트가 처음 로드될 때만 실행된다는 의미.
          // 쉽게 말하면 웹 페이지를 처음 열거나 F5키를 눌러 페이지를 세로 고칠 때를 의미. 
  
  // 현재 날짜를 가져오기 위해 Date 객체를 생성
  const currentDate = new Date("2023-09-06");
  // 날짜, 월, 연도, 시간 등을 추출할 수 있습니다.
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1 ; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = currentDate.getDate();
  
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="place-container2">
       <div className="map-scroll-con">
        {/* 받아온 데이터를 화면에 표시 */}
        <div>
          <h3>서버에서 받은 데이터:</h3>
          <p>오늘의 날짜: {formattedDate}</p>
          <pre>{JSON.stringify(todaydata, null, 1)}</pre>
          <pre>{JSON.stringify(pastdata, null, 1)}</pre>
          {/* 첫번째 인수는 데이터, 
              두번째 인수는 변형하거나 필터링 할 때 사용. 유지하려면 null
              세번째 인수는 들여쓰기 정도 */}
        </div>
        <ResponsiveContainer width="90%" height="30%">
            <BarChart data={todaydata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="todayTime" />
              <YAxis />
              <Tooltip content={<CustomTooltip />}/> 
              <Legend />
              <Bar dataKey="preSaturation" name="포화도" fill="rgb(235, 216, 11)" />
            </BarChart>
        </ResponsiveContainer>
        <label>
          <select name="selectedFruit">
            <option value="1Day">1일 전</option>
            <option value="2Day">2일 전</option>
            <option value="3Day">3일 전</option>
            <option value="4Day">4일 전</option>
            <option value="5Day">5일 전</option>
            <option value="6Day">6일 전</option>
            <option value="6Day">7일 전</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Test