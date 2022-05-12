import React from 'react';
import Banner from '../Banner/Banner';
import ExtraF from '../ExtraF/ExtraF';
import ExtraS from '../ExtraS/ExtraS';
import Info from '../info/Info';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExtraF />
            <ExtraS />
        </div>
    );
};

export default Home;