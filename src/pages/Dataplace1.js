import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';

const CustomTooltip = ({ active, payload, label }) => {
  // CustomTooltip은 Recharts에서 제공하는 함수형 컴포넌트이다
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

function calculateDateDifference(selectedDay, data) {
  const currentDate = new Date("2023-09-14"); // 나중에 현재 날짜 불러올 때는  Date()로.
  const currentmonth = currentDate.getMonth() + 1;   // 월은 0부터 시작하므로 무조건 1을 더해줍니다.
  const currentday = currentDate.getDate();

  // 선택한 날짜(selectedDay)를 정수로 파싱
  const selectedDayInt = parseInt(selectedDay);

  // 데이터 필터링
  const filteredData = data.filter((item) => {
    const pastDate = new Date(item.past_date);
    const pastMonth = pastDate.getMonth() + 1; 
    const pastDay = pastDate.getDate();
    
    const monthDiff = currentmonth - pastMonth;
    let dayDiff = currentday - pastDay;
    if (monthDiff === 1) {
      if (pastMonth === 9 || pastMonth === 11) { // 10월 12월로 넘어갔다는 의미. 전 달의 일수인 30을 더해줌.
        dayDiff += 30;
      } 
      else if (pastMonth === 10) {                // 11월로 넘어갔다는 의미. 전 달의 일수인 31을 더해줌. 
        dayDiff += 31;
      }
      else {
        dayDiff += 100;
      }
      return dayDiff === selectedDayInt;
    }

    // 현재 월이 이전 월과 같은 경우
    if (monthDiff === 0) {
      return dayDiff === selectedDayInt;
    }
    return false;
  });
  return filteredData;
}

const Dataplace1 = () => {
  const [todaydata, settodayData] = useState(null); // 초기에는 data를 null로 초기화
  const [pastdata, setpastData] = useState(null); // 초기에는 data를 null로 초기화
  useEffect(() => {
    // 서버 주소 설정
    const serverUrl = 'http://www.seatnullnull.com:8080/api/pre';
    const serverUrl2 = 'http://www.seatnullnull.com:8080/api/past';

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

  const [selectedDay, setSelectedDay] = useState('1'); // 선택된 요일 상태 // 즉, 기본 1일전으로 설정
  
  const getSubtitle = () => { 
    switch (selectedDay) {
      case '1':
        return '1일 전 시간별 평균 포화도';
      case '2':
        return '2일 전 시간별 평균 포화도';
      case '3':
        return '3일 전 시간별 평균 포화도';
      case '4':
        return '4일 전 시간별 평균 포화도';
      case '5':
        return '5일 전 시간별 평균 포화도';
      case '6':
        return '6일 전 시간별 평균 포화도';
      case '7':
        return '7일 전 시간별 평균 포화도';
      default:
        return '';
    }
  };
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDay(selectedValue);
  };

  const filteredpastdata = pastdata ? calculateDateDifference(selectedDay, pastdata) : [];
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/data" className="header-logo-link"><img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center">학술정보원 창의토론라운지(4층)</div>
          <div className="header-right"><Link to="/" className="header-logo-link"><img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container3">
          <div className="lastweek">
            <div className="lastweek-title">최근 7일 시간별 평균 포화도</div>
            <div className="lastweek-buttons">
              <label>
                  <select name="selected" value={selectedDay} onChange={handleSelectChange} className="select-style">
                    <option value="1">1일 전</option>
                    <option value="2">2일 전</option>
                    <option value="3">3일 전</option>
                    <option value="4">4일 전</option>
                    <option value="5">5일 전</option>
                    <option value="6">6일 전</option>
                    <option value="7">7일 전</option>
                  </select>
              </label>
            </div>
            <div className="lastweek-subtitle">{getSubtitle()}</div>
          </div>
          
          <ResponsiveContainer width="90%" height="30%">
            <BarChart data={filteredpastdata}>
              <CartesianGrid strokeDasharray="3 3" />  {/*그리드 라인 표시*/}
              <XAxis dataKey="past_time" />            {/*X축에 대한 설정*/}
              <YAxis domain={[0, 100]}/>               {/*Y축에 대한 설정 0에서 100으로 y값 고정*/}
              <Tooltip content={<CustomTooltip />}/>   {/*마우스를 올렸을 때, 모바일에서는 터치하면 정보 표시*/}
              <Legend />                               {/*기본적인 설정으로 범례가 표시*/}
              <Bar dataKey="saturation" name="포화도" fill="rgb(200, 2, 2)" />  {/*막대 그래프로 표시*/}
            </BarChart>
          </ResponsiveContainer>

          <div className="today">
            금일 예상 시간별 평균 포화도
          </div>
          <ResponsiveContainer width="90%" height="30%">
            <BarChart data={todaydata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="todayTime" />
              <YAxis domain={[0, 100]}/>
              <Tooltip content={<CustomTooltip />}/> 
              <Legend />
              <Bar dataKey="preSaturation" name="포화도" fill="rgb(235, 216, 11)" />
            </BarChart>
          </ResponsiveContainer>
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
export default Dataplace1