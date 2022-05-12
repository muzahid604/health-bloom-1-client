import React from 'react';
import quote from '../../icons/quote.svg'
import PSays from './PSays';
const Reviews = () => {
    const reviews = [
        {
            id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'california',
            img: 'https://i.ibb.co/hCCfRxB/people1.png'

        },
        {
            id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'california',
            img: 'https://i.ibb.co/g6D48xg/people2.png'

        },
        {
            id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'california',
            img: 'https://i.ibb.co/NNgWkry/people3.png'

        }
    ]
    return (
        <div>
            <div className='px-4 lg:px-12 flex justify-between'>
                <div>
                    <h1 className='text-2xl text-primary'>Testimonial</h1>
                    <h1 className='text-5xl'>What Our Patients Says</h1>
                </div>
                <div className='w-32 lg:w-64'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <PSays key={review.id}
                        review={review}
                    ></PSays>)
                }
            </div>
        </div>
    );
};

export default Reviews;