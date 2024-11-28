import React from 'react';
import CoreValue from '../components/home/CoreValue';
import NewActicle from '../components/home/NewActicle';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/question/Hero';
import Search from '../components/question/Search';

function Homepage() {
    return (
        <div>
        <Nav/>
        <Hero/>
        <CoreValue/>
        <Search/>
        <NewActicle/>
        <Footer/>
        </div>
    );
}

export default Homepage;