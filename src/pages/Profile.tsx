import React from 'react';
import Board from '../components/profile/Board';
import Detail from '../components/profile/Detail';



function Homepage() {
    return (
        <div className='w-80 h-96 sm:w-96 sm:h-1/2'>
        <Board/>
        <Detail/>
        </div>
    );
}

export default Homepage;