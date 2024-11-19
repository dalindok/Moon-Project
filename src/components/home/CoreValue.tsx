import React from 'react';

function CoreValue() {
    return (
        <div className='font-zain'>
            <p className='underline underline-offset-8 font-bold text-2xl mt-10 text-center'>
                Our Core Values
            </p>
            <div className='flex flex-col items-center mt-10'>
                <div className='flex flex-col md:flex-row md:justify-between justify-center items-center'>
                    <div className='bg-customPink mx-4 my-2 md:mx-10 md:my-4 rounded-lg flex-grow w-96 h-auto p-4'>
                        <p className='font-bold'>Community Support:</p>
                        <p>Connect, share, and grow with a supportive skincare community.</p>
                    </div>
                    <div className='bg-customPink mx-4 my-2 mt-3 md:mx-4 md:my-4 rounded-lg flex-grow w-96 h-auto p-4'>
                        <p className='font-bold'>Quality & Wellness:</p>
                        <p>Embrace a path to radiant skin with products and routines that prioritize your well-being.</p>
                    </div>
                </div>
                <div className='bg-customPink rounded-lg w-96 h-auto justify-center mt-3 md:mt-10 p-4 flex-grow'>
                    <p className='font-bold'>Expert Insights:</p>
                    <p>Discover trusted tips and advice to enhance your skincare journey.</p>
                </div>
            </div>
        </div>
    );
}

export default CoreValue;
