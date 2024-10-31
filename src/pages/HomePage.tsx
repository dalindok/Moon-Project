import React from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import CoreValue from '../components/CoreValue';
import Search from '../components/Search';
import NewActicle from '../components/NewActicle';

function Homepage() {
    return (
        <div>
        <Header/>
        <Board/>
        <CoreValue/>
        <Search/>
        <NewActicle/>
        </div>
    );
}

export default Homepage;