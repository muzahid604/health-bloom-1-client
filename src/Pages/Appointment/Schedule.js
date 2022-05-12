import React from 'react';

const Schedule = ({ schedule }) => {
    return (
        <div class="card lg:w-80 bg-base-100 shadow-xl">
            <div class="card-body  text-center">
                <h2 class="text-2xl text-primary">{schedule.name}</h2>
                <p className='text-red-500 text-xl'>{schedule.slots.length < 1 ? 'Please try another date' : ''}</p>
                <p>{schedule.slots.length} {schedule.slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary uppercase">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Schedule;