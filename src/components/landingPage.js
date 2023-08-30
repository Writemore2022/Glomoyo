// 랜딩페이지
import "../css/landingPage.css"
import Logo from "../assets/images/logo2.png"
import SelectPage from "../components/select.js";
import { useState } from "react";

function Landing() {

    const genderData = [
            { value: "남자", label: "남자" },
            { value: "여자", label: "여자" },
            { value: "비공개", label: "비공개" }
    ];

    const ageData = [
        { value: "10대", label: "10대" },
        { value: "20대", label: "20대" },
        { value: "30대", label: "30대" },
        { value: "40대", label: "40대" },
        { value: "50대", label: "50대" },
        { value: "60대", label: "60대" },
        { value: "70대 이상", label: "70대 이상" }
    ];

    // 수정 필요! (230828)
    // 입력 값 확인
    // const [state, setState] = useState({
    //     gender: "",
    //     age: "",
    //     nickname: "",
    //     info: "",
    //     email: "",
    // });

    // const onSubmitData = (data) => {
    //     setState(data);
    //     console.log(state);
    //   };

    // 초기값 세팅
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [nickname, setNickname] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");

    // 230829 셀렉트 값을 확인할 수 있도록 > gender, age 구현

    const onChangeNickname = (e) => {
        const currentNickname = e.target.value;
        setNickname(currentNickname);
    }

    const onChangeContent = (e) => {
        const currentContent = e.target.value;
        setContent(currentContent);
    }

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
    }

    const clickedSubmitBtn = () => {
        alert("제출이 완료되었습니다.");
        alert("gender: " + gender + "\n" +
              "age: " + age + "\n" +
              "nickname: " + nickname + "\n" +
              "info: " + content + "\n" +
              "email: " + email);
    }

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
                <p>(글로모여 업데이트 정보는 덤이에요.)</p>
            </div>
        </div>
        <div id="info-area" className="landing-area">
        {/* 정보 입력 영역 */}
            <div id="info-top">
                <div id="sel1" className="info-box">
                <SelectPage data={genderData}/>
                </div>
                <div id="sel2" className="info-box">
                <SelectPage data={ageData}/>
                </div>
                <input placeholder="닉네임을 입력하세요." id="nickname" className="info-box" onChange={onChangeNickname}/>
            </div>
            <input placeholder="정보를 입력하세요." id="contents" className="info-input" onChange={onChangeContent}/>
            <input placeholder="이메일을 입력하세요." id="email" className="info-input" onChange={onChangeEmail}/>
            <button type="submit" id="submit-btn" className="info-box" onClick={clickedSubmitBtn}> 제출 </button>

        </div>
      </div>
    );
  }
  
  export default Landing;  