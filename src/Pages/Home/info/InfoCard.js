import React from 'react';


const InfoCard = ({ img, bg }) => {
    return (
        <div>
            <div className={`card text-white card-side m-2 bg-base-100 shadow-xl ${bg}`}>
                <figure><img src={img} className="pl-5" alt="info-img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;