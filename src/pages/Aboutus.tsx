import React from 'react';
import Header from '../components/aboutus/Header';
import Ourmission from '../components/aboutus/Ourmission';
import Team from '../components/aboutus/Team';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const Aboutus = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <Ourmission/>
            <Team/>
            <Footer/>
        </div>
    );
};

export default Aboutus;