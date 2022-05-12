import React from 'react';

const PSays = ({ review }) => {

    return (
        <div className="card w-90 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>''{review.review}''</p>
                <div className="avatar flex items-center justify-center">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt='' />
                    </div>
                    <div className='pl-5 pt-10 '>
                        <h1 className='text-xl'>{review.name}</h1>
                        <p>{review.home}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PSays;