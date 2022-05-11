import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';

const Info = () => {
    return (
        <div className='flex px-12'>
            <InfoCard bg="bg-primary" img={clock}></InfoCard>
            <InfoCard bg="bg-accent" img={marker}></InfoCard>
            <InfoCard bg="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;