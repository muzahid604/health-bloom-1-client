import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import Schedule from './Schedule';

const Schedules = ({ date }) => {
    const [Schedules, setSchedules] = useState([]);
    const [solTime, setSolTime] = useState(null);
    useEffect(() => {
        fetch('schedules.json')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [])
    return (
        <div>
            <h1 className='text-xl text-primary text-center'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='my-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 gap-5'>
                {
                    Schedules.map(schedule => <Schedule
                        key={schedule._id}
                        schedule={schedule}
                        setSolTime={setSolTime}
                    ></Schedule>)
                }
            </div>
            {solTime && <AppointmentModal setSolTime={setSolTime} solTime={solTime} date={date}></AppointmentModal>}
        </div>
    );
};

export default Schedules;