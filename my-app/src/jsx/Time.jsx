import React from "react"
import { useRef } from 'react';

// *숫자만 입력되도록 변환
function onlyNumber(e){
  e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  console.log(e.target.value);
}

  
  function Time () {
    
    const secondInput = useRef();
    //미리 Ref만들어줌. 최상단에 있어야한다. (미리 만들어야하기에)

    // *minute에서 엔터 눌렀을때
    function enter(e){
      if(e.key == 'Enter'){
        secondInput.current.focus();
      }
    }

  return(
    <div>
      <div>
        <h2>Before</h2>
        <div>
          <input id="minute"  onKeyPress={enter} type="text" maxLength={2} onChange={onlyNumber} />분
          <input id="second" ref={secondInput} type="text" maxLength={2} onChange={onlyNumber}/>초
          {/* 이거 backspace했을때 이전 창으로 가게하면 좋을듯... */}
        </div>
        <button>계산</button>
      </div>
      <div>
        <h2>After</h2>
        <div>
          <input type="text" />분
          <input type="text" />초
        </div>
        {/* 해당부분은 출력용으로, 굳이 input일 필요는 없는듯 */}
        <button>초기화</button>
        {/* 계산결과 나온후에 해당 버튼이 나오면 좋을것같다. 계산 버튼에 값주고 ? :로 하면댈듯. 누르면 false반환 - 삭제 */}
      </div>
    </div>
  )
}

export default Time;