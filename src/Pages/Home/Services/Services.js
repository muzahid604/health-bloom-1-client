import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mt-12 px-12'>
            <h2 className='text-2xl text-center uppercase text-primary'>Our Services</h2>
            <h2 className='text-3xl m-1 text-center'>Services We Provide</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-4'>
                <Service img="https://i.ibb.co/R9qsTGZ/fluoride.png"></Service>
                <Service img="https://i.ibb.co/xHx1pmP/cavity.png"></Service>
                <Service img="https://i.ibb.co/12NY3kV/whitening.png"></Service>
            </div>

        </div>
    );
};

export default Services;