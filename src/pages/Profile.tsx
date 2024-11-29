import React from 'react';
import Board from '../components/profile/Board';
import Detail from '../components/profile/Detail';



function Homepage() {
    return (
        <div className='w-full h-full'>
        <Board/>
        <Detail/>
        </div>
    );
}

export default Homepage;