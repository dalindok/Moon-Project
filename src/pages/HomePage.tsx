import React from 'react';
import Header from '../components/home/Header';
import Board from '../components/home/Board';
import CoreValue from '../components/home/CoreValue';
import Search from '../components/home/Search';
import NewActicle from '../components/home/NewActicle';

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