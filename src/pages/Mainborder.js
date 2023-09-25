import { useMediaQuery } from 'react-responsive';

const Mainborder = ({children}) => {
  // 가로 최대크기가 500px 이하인지 확인
  const isMobile = useMediaQuery({ maxWidth: 500 }); 
  const isMobileHeight = isMobile;
  
  const borderStyle = {
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.283)',
    height: isMobileHeight ? '100vh' : '630px',
    width: '500px',
    margin: 'auto',  // 상하좌우 여백을 자동으로 설정 
    display: 'flex', // 유연하게 배치하기 위해 Flexbox 컨테이너로 지정
    position: 'relative',
    justifyContent: 'center', // 가로 방향 가운데 정렬
    alignItems: 'center',     // 세로 방향 가운데 정렬
    flexDirection: 'column',  // 내부 요소 세로 정렬
  };
  if (isMobile) {
    borderStyle.width = '100%'; //가로는 화면에 맞게 채우기
  }
  // 가로 세로를 제외한 나머지 속성을 그대로 반환
  return <div style={borderStyle}>{children}</div>; 
};

export default Mainborder;