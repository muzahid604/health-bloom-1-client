import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Common/Footer/Footer';
import Schedules from './Schedules';
// import { format } from 'date-fns';
const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        // footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <div className="hero lg:px-12 min-h-screen bg-[url('https://i.ibb.co/fp8fK7p/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src="https://i.ibb.co/g98Hy7t/chair.png" className=" lg:max-w-sm lg:rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>


            </div>
            <Schedules date={selected} />
            <Footer />
        </div>
    );
};

export default Appointment;