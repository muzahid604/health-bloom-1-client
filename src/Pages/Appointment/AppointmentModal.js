import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ solTime, setSolTime, date }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        console.log(name, email, phone)
        setSolTime(null)

    }

    const slots = solTime.slots;

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box " >
                    <h3 class="font-bold text-primary text-center m-4 text-lg">{solTime.name}</h3>
                    <form className='grid grid-cols-1 gap-5 justify-items-center' onSubmit={handleSubmit}>
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input type="text" name='date' value={format(date, 'PP')} class="input input-bordered input-primary w-full max-w-xs" />
                        <select class="select select-info w-full max-w-xs">
                            {slots.map(slot => <option>{slot}</option>)}
                        </select>
                        <input type="name" name="name" placeholder="Enter Your Name" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Enter Your Email" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Enter Your Phone number" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="Book Now" class="btn btn-primary uppercase input-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;