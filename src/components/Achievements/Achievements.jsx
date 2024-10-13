import React from 'react'
import './Achievements.css'


const Achievements = () => {
 
  return (
    <div className='Achieve--main container' >
    <div className="Achieve--title">
        <h1>Our Achievements so far !</h1>
        <h4>Achieving the best possible numbers for you every day!</h4>
    </div>
    <div className="achieve--data">
        <div className="data">
            <h1>25K</h1>
            <h4>Users</h4>
        </div>
        <div className="data">
            <h1>500K</h1>
            <h4>Orders Executed</h4>
        </div>
        <div className="data">
            <h1>11</h1>
            <h4>Products Delievered</h4>
        </div>
    </div>
        </div>
  )
}

export default Achievements 