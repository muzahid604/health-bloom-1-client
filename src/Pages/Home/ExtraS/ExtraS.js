import React from 'react';
import './ExtraS.css'

const ExtraS = () => {
    return (
        <div className="flex my-12 px-12 bg-[url('https://i.ibb.co/7VxSbPS/appointment.png')] items-center justify-center">
            <div style={{ marginTop: '-100px' }} className='flex-1 hidden lg:block '>
                <img src="https://i.ibb.co/6WDwnFv/doctor.png" alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>
                    Appointment
                </h3>
                <h1 className='text-white text-3xl'>Make an appointment Today</h1>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit harum sint optio rerum atque illum, ex accusantium delectus soluta voluptatibus eaque ratione quo velit laborum praesentium nisi molestiae quia fugiat!</p>
                <button class="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary mt-5">Get Started</button>
            </div>
        </div >
    );
};

export default ExtraS;