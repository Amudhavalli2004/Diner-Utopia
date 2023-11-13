import React from 'react';
import foods from '../fooddata';
import Food from './Food';

function Homescreen() {
  return (
    <div>
        <div className='row'>

            {foods.map(food => {
                return <div className='col-md-4 p-3'>
                    <div >
                        <Food food = {food}/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Homescreen