// 성별, 나이 선택을 위한 드롭박스

import Select from "react-select";
import { useState } from "react";


function SelectPage(props) {

    let data = useState([]);
        
    const [selectData, setSelectData] = useState(null);
    //안에 들어가는 값을 받아야해서 state사용

    return(
    <Select options={props.data} //위에서 만든 배열을 select로 넣기
    onChange={setSelectData} //값이 바뀌면 setState되게
    defaultValue={props.data[0]}/> //사용자가 값을 선택하지 않아도 기본 값으로 '온라인'=={online[0]}이 값으로 들어갈 수 있게 
    )
}

export default SelectPage;
