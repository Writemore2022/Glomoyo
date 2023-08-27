import Select from "react-select";
import { useState } from "react";


   
function SelectPage(props) {

    let data = useState([]);

    //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.
    // if () {
    //     data = [
    //         { value: "남자", label: "남자" },
    //         { value: "여자", label: "여자" },
    //         { value: "비공개", label: "비공개" }
    //        ] 
    // } else if () {
        data = [
            { value: "10대", label: "10대" },
            { value: "20대", label: "20대" },
            { value: "30대", label: "30대" },
            { value: "40대", label: "40대" },
            { value: "50대", label: "50대" },
            { value: "60대", label: "60대" },
            { value: "70대 이상", label: "70대 이상" }
           ]
    // }
        
    const [selectData, setSelectData] = useState(data[0]);
    //안에 들어가는 값을 받아야해서 state사용
        
    return(
    <Select options={data} //위에서 만든 배열을 select로 넣기
    onChange={setSelectData} //값이 바뀌면 setState되게
    defaultValue={data[0]} /> //사용자가 값을 선택하지 않아도 기본 값으로 '온라인'=={online[0]}이 값으로 들어갈 수 있게
    )
}

export default SelectPage;
