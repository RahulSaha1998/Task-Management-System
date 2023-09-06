import React from 'react';
import Lottie from "lottie-react";
import loader from '../../../public/loader.json'

const Loader = () => {
    return (
        <div className='flex justify-center'>
            <div className='text center m-4'>
            <Lottie className='w-52' animationData={loader}></Lottie>
            </div>
        </div>
    );
};

export default Loader;