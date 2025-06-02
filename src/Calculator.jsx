import React, { useState } from 'react'

const Calculator = () => {

    const [input, setInput]=useState('');

    const handleClick=(value)=>{ 
        setInput((prev)=>prev+value);
    }

    const calculate=()=>{ 
        try{
            setInput(eval(input).toString());
        }catch{
            setInput('Error')
        }
     };

    const clear=()=>{
        setInput("");
    }

    const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className='bg-gray-800 p-6 rounded-xl shadow w-full max-w-sm'>
       <div className='mb-4'>
          <input type='text' value={input} readOnly className='w-full text-white text-right text-2xl p-3 bg-black border border-gray-600 rounded'/>
       </div>
       <div className='grid grid-cols-4 gap-3'>
        {buttons.map((btn)=>(
            <button key={btn} className='p-4 text-white text-xl bg-black hover:bg-gray-400 rounded transition' 
            onClick={()=>{if(btn=== '=') {
                calculate();
            }else{
                handleClick(btn);
            }          
            }}>{btn}</button>
        ))}
        <button className='col-span-4 p-4 text-white text-xl bg-black hover:bg-gray-400 rounded transition mt-2' onClick={clear}>Clear</button>
       </div>
    </div>
  )
}

export default Calculator
