import React from 'react'
import {Link} from "react-router-dom";
import Mainborder from './Mainborder';
import './Mainborder.css'
import './placecontainer.css'
import arrowback from '../images/arrowback.PNG';
import home from '../images/home.PNG';
const Liveplace3 = () => {
  return (
    <div className="fullscreen">
      <Mainborder>
        <div className="header">
          <div className="header-left"><Link to="/live" className="header-logo-link"> <img src={arrowback} alt="arrowback" className="header-logo" /></Link></div>
          <div className="header-center"><span className="material-symbols-outlined">menu_book</span></div>
          <div className="header-right"><Link to="/" className="header-logo-link"> <img src={home} alt="home" className="header-logo" /></Link></div>
        </div>
        <div className="place-container3">
          <div className="textinfoma">
            <div className="textinfo">
              <h1 className="Textinfo">설명서(실시간 좌석 정보)</h1>
              <span className="ctextt">해당 장소의 실시간 좌석 여부와 추가적인 정보를 제공합니다</span>
              <br/>
              <span className="cText">➰ 실시간 좌석 여부</span>
              <span className="ctext">① 가용 테이블은 노란색, 불가용 테이블은 빨간색으로 표시</span>
              <span className="ctext">② 테이블 위의 정보 = (불가용 좌석 수) / (전체 좌석 수)</span>
              <span className="ctext">💡좌석 여부가 바뀌는데 20초정도 딜레이가 생길 수 있습니다</span>
              <span className="ctext">💡새로고침(F5)을 하면 3초정도 후에 정보가 업데이트 됩니다 :)</span>
              <br/>
              <span className="cText">➰ 추가 제공 정보</span>
              <span className="ctext">① 이용 가능 시간</span>
              <span className="ctext">② 토론 가능 여부</span>
              <span className="ctext">③ 콘센트 위치</span>
              <span className="ctext">④ 실시간 전체 포화도 = (불가용 책상 수) / (전체 책상 수)</span>
              <br/>
              <span className="cText">🚨 좌석 가용 여부 참고사항</span>
              <span className="ctext">객체 탐지 기술로 분석한 좌석 가용 여부를 화면에 표시합니다</span>
              <span className="ctext">영상 촬영이 아닌, 순간 프레임을 통해 객체를 탐지하는데</span>
              <span className="ctext">순간 프레임은 저장되지 않으니 걱정하지 않으셔도 됩니다!</span>
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
export default Liveplace3