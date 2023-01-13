import React, { useState } from "react"
import { useRef } from 'react';

// function MinutesTOHours() {
//   let [amount,setAmount] = React.useState('');
//   let [flipped, setFlipped] = React.useState(false);
//   const onChange = (event) => {
//     setAmount(event.target.value);
//     console.log(amount);
//   }
//   const reset = () => setAmount('');
//   const onFlip = () => setFlipped(curr => !curr);
//   return(      
//   <div>
//     <label htmlFor="minutes">Minutes</label>
//     <input disabled={flipped === true} value={flipped ? amount*60 : amount || ''} id="minutes" placeholder="Minutes" type="number" onChange={onChange}/>
//     <h4>You want to convert {amount}amount</h4>
//     <label htmlFor="hours">Hours</label>
//     <input disabled={!flipped} value={flipped ? amount : amount/60 || ''} id="hours" placeholder="Hours" type="number" onChange={onChange}/>
//     <button onClick ={reset}>Reset</button>
//     <button onClick ={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
//   </div>
//   );
// }

  
  function Time () {
    
    const minuteInput = useRef();
    const secondInput = useRef();
    const changeBtn = useRef();
    //미리 Ref만들어줌. 최상단에 있어야한다. (미리 만들어야하기에)
    
    // *minute에서 엔터 눌렀을때
    function enter(e){
      if(e.key == 'Enter'){
        secondInput.current.focus();
      }
    };
    
    // *second에서 backspace 눌렀을때
    function handleKeyDown (e){
      if (e.key === 'Backspace') {
        if(e.target.value.length === 0){
          minuteInput.current.focus();
        };
      }
    }
    // *숫자만 입력되도록 변환
    let [beforemim, setBeforemim] = useState('');
    let [beforesec, setBeforesec] = useState('');
    let [aftermin, setAftermin] = useState('');
    let [aftersec, setAftersec] = useState('');
    let [afterarea,SetAfterarea] = useState(false);

    function onlyNumber(e){
      e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      setBeforemim(minuteInput.current.value);
      setBeforesec(secondInput.current.value);
      //* 자동으로 넘어가는 기능
      if(e.target.value.length === 2){
        secondInput.current.focus();
      };
    }
    function newChangeBtn(e){
      console.log(beforemim);
      console.log(beforesec);
      let beforAllTime = +beforemim*60 + +beforesec;
      //여기서 숫자 초로 합치고, 계산필요
      console.log(beforAllTime)
      setAftermin(Math.floor((beforAllTime-100) / 60));
      setAftersec(Math.floor((beforAllTime-100)% 60));
      SetAfterarea(true);
      // Math.floor(beforAllTime-100 / 60);
    }

    function reset(){
      setBeforemim('');
      setBeforesec('');
      setAftermin('');
      setAftersec('');
      SetAfterarea(false);
    }
    //* 밑에 출력부분
    function Area (){
      return(
        <div>
          <div>
            <h3>{aftermin}<span>분</span></h3>
            <h3>{aftersec}<span>초</span></h3>
          </div>
          <button onClick={reset}>초기화</button>
        </div>
      )
    }
    
  return(
    <div>
      <div>
        <h2>Before</h2>
        <div>
          <input id="minute" value={beforemim} ref={minuteInput} onKeyPress={enter} type="tel" maxLength={2} onChange={onlyNumber}/><span>분</span>
          <input id="second" value={beforesec} ref={secondInput} onKeyDown={handleKeyDown} type="tel" maxLength={2} onChange={onlyNumber}/><span>초</span>
        </div>
        <button onClick={newChangeBtn} ref={changeBtn}>계산</button>
      </div>
      <div>
        <h2>After</h2>
        {afterarea ? <Area/> : null}
      </div>
    </div>
  )
}

export default Time;