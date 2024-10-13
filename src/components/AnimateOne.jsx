import React from 'react'
import '../styles/AnimateOne.css'
import item1 from '../assets/item1.svg';
import item2 from '../assets/item2.svg';
import item3 from '../assets/item3.svg';
import item4 from '../assets/item4.svg';
import item5 from '../assets/item5.svg';
import item6 from '../assets/item6.svg';
import item7 from '../assets/item7.svg';
import item8 from '../assets/item8.svg';
const AnimateOne = () => {

  return (
    <div className="main container" >
<div className="wrapper">
    <div className='item item1'>
        <img src={item1} alt="" />
        <h1>Real Time Data</h1>
    </div>
    <div className='item item2'>
    <img src={item2} alt="" />
        <h1>ETF-API</h1>
    </div>
    <div className='item item3'>
    <img src={item3} alt="" />
        <h1>FuturesAPI</h1>
    </div>
    <div className='item item4'>
    <img src={item4} alt="" />
        <h1>OptionsAPI</h1>
    </div>
    <div className='item item5'>
    <img src={item5} alt="" />
        <h1>ChartsAPI</h1>
    </div>
    <div className='item item6'>
    <img src={item6} alt="" />
        <h1>Algo-support</h1>
    </div>
    <div className='item item7'>
    <img src={item7} alt="" />
        <h1>Trend-API</h1>
    </div>
    <div className='item item8'>
    <img src={item8} alt="" />
        <h1>Volumes-API</h1>
    </div>
    </div>
    </div>
    
  )
}

export default AnimateOne