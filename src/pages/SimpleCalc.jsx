import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import '../App.css'

const SimpleCalc = () => {
  const [display, setdisplay] = useState('0')
  
  const handleClick = (digit) => {
    if(display === '0'){
      setdisplay(digit)
    }else{
      setdisplay(display+digit)
    }
  }
  const handleEqal = ()=>{
    try{
      let result = eval(display)
      // console.log(result)
      setdisplay(String(result))
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div className="main ">
        <div id="display" aria-readonly>{display}</div>
        <div className="keys">
          <Button value={'+'} onClick={()=>handleClick('+')} className={'operator-btn'}/>
          <Button value={'7'} onClick={()=>handleClick('7')}/>
          <Button value={'8'} onClick={()=>handleClick('8')}/>
          <Button value={'9'} onClick={()=>handleClick('9')}/>
          <Button value={'-'} onClick={()=>handleClick('-')} className={'operator-btn'}/>
          <Button value={'4'} onClick={()=>handleClick('4')}/>
          <Button value={'5'} onClick={()=>handleClick('5')}/>
          <Button value={'6'} onClick={()=>handleClick('6')}/>
          <Button value={'x'} onClick={()=>handleClick('*')} className={'operator-btn'}/>
          <Button value={'1'} onClick={()=>handleClick('1')}/>
          <Button value={'2'} onClick={()=>handleClick('2')}/>
          <Button value={'3'} onClick={()=>handleClick('3')}/>
          <Button value={'÷'} onClick={()=>handleClick('/')} className={'operator-btn'}/>
          <Button value={'0'} onClick={()=>handleClick('0')}/>
          <Button value={'.'} onClick={()=>handleClick('.')}/>
          <Button value={'='} onClick={()=>handleEqal()} className={'operator-btn'}/>
          <Button value={'C'} onClick={()=> setdisplay('0')} className={'operator-btn'}/>
          <Button value={'('} onClick={()=>handleClick('(')}/>
          <Button value={')'} onClick={()=>handleClick(')')}/>
        </div>
      </div>
    </>
  )
}

export default SimpleCalc
