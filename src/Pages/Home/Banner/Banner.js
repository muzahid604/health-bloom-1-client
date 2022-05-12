import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero lg:px-12 min-h-screen bg-[url('https://i.ibb.co/fp8fK7p/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/g98Hy7t/chair.png" class=" lg:max-w-sm lg:rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-2xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 lg:text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;