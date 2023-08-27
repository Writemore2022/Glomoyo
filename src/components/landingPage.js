// 랜딩페이지
import "../css/landingPage.css"
import Logo from "../assets/images/logo2.png"
import SelectPage from "../components/select.js";

function Landing() {
    return (
      <div className="landing-wrap">
        <div id="bubble-area" className="landing-area"> 
        {/* 말풍선 영역 */}
            <div id="bubble-cont1" className="bubble">
            '글'이라는 단어에 괜히 한 번 눈길이 멈춘
            </div>
            <div id="bubble-cont2" className="bubble">
            기껏 신청해놓은 모임이 생각과 달랐던
            </div>
        </div>
        <div id="contents-area" className="landing-area">
        {/* 내용 영역 */}
            <div id="cont1" className="cont">
                당신이 원하는 글 모임은 어떤 모습인가요?
            </div>
            <div id="cont2" className="cont">
                <span><b>글</b> 하나<b>로</b> <b>모이</b>는 사람들,</span>
                <div id="logo-area">
                    <img src={Logo} id="logo-img"/>
                    <span>에서 알 수 있어요.</span>
                </div>
            </div>
            <div id="cont3" className="cont">
                <p>원하시는 모임의 특성에 대해 알려주세요.</p>
                <p>당신께 맞는 모임을 추천드릴게요.</p>
                <p>(글로모여 업데이트 정보는 덤이에요)</p>
            </div>
        {/* <p>당신이 원하는 글 모임은 어떤 모습인가요?</p>
        <p>글로모여에서 알 수 있어요.</p>
        <p>원하시는 모임의 특성에 대해 알려주세요.</p>
        <p>당신께 맞는 모임을 추천드릴게요.</p>
        <p>(글로모여 업데이트 정보는 덤이에요)</p> */}

        </div>
        <div id="input-area" className="landing-area">
        {/* 정보 입력 영역 */}
        정보입력 영역입니다.

        <SelectPage />
        <SelectPage />
        <input placeholder="정보를 입력하세요."/>
        <input placeholder="이메일을 입력하세요."/>
        <button type="submit"> 제출 </button>

        </div>
      </div>
    );
  }
  
  export default Landing;  