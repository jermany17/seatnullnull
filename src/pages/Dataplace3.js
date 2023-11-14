import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
// import Test from '../Test';

const Dataplace3 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/data" className="header-logo-link"><img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center"><span className="material-symbols-outlined">menu_book</span></div>
          <div className="header-right"><Link to="/" className="header-logo-link"><img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container3">
          <div className="textinfoma">
            <div className="textinfo">
              <h1 className="Textinfo">설명서(좌석 포화도 정보)</h1>
              <span className="ctextt">해당 장소의 포화도 정보를 그래프 형식으로 제공합니다</span>
              <br/>
              <span className="cText">➰ 최근 7일 시간별 평균 포화도</span>
              <span className="ctext">금일(현재 날짜)을 기준으로 최대 7일 전에 해당하는 날짜의</span>
              <span className="ctext">각 시간별 평균 포화도를 표시한 그래프입니다</span>
              <span className="ctext">💡 1일 전 ~ 7일 전 중 원하는 날짜를 선택하면</span>
              <span className="ctext">💡 해당 날짜의 각 시간별 평균 포화도가 어땠는지 확인할 수 있습니다</span>
              <br/>
              <span className="cText">➰ 금일 예상 시간별 평균 포화도</span>
              <span className="ctext">과거 데이터를 이용해 ❗예측❗한</span>
              <span className="ctext">금일(현재 날짜) 시간별 평균 포화도를 표시한 그래프입니다</span>
              <br/>
              <span className="cText">🚨 좌석 포화도 정보 주의사항</span>
              <span className="ctext">현재 표시되는 데이터는 임의의 값으로</span>
              <span className="ctext">계속해서 예측에 필요한 데이터를 모으는 중입니다 !</span>
              <span className="ctext">데이터가 모이는대로 빠르게 실제 포화도 정보를 제공해드리겠습니다 :)</span>
              <span className="ctext">(코로나 19 체온 탐지와 유사)</span>
            </div>
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
/*
<div className="place-container3">
 <h1 className="lastweek">Comming Soon : D</h1>
 <Test></Test>
</div>
*/
export default Dataplace3