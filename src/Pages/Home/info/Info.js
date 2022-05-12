import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12'>
            <InfoCard bg="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard bg="bg-accent" img={marker}></InfoCard>
            <InfoCard bg="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;