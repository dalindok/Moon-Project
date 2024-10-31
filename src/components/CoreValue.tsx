import React from 'react';

function CoreValue() {
    return (
        <div>
            <p className='underline underline-offset-8 font-bold text-2xl mt-10 text-center'>
                Our Core Values
            </p>
            <div className='flex flex-col items-center mt-10'>
                <div className='flex flex-row justify-between w-full max-w-4xl'>
                    <div className='bg-pink-200 ml-10 mr-4 rounded-lg flex-grow h-full p-4'>
                        <p className='font-bold'>Community Support:</p>
                        <p>Connect, share, and grow with</p>
                        <p>a supportive skincare community.</p>
                    </div>
                    <div className='bg-pink-200 ml-4 mr-10 rounded-lg flex-grow h-full p-4'>
                        <p className='font-bold'>Quality & Wellness:</p>
                        <p>Embrace a path to radiant skin</p>
                        <p>with products and routines that prioritize your well-being.</p>
                    </div>
                </div>
                <div className='bg-pink-200 rounded-lg max-w-4xl h-auto justify-center mt-10 p-4 flex-grow'>
                    <p className='font-bold'>Expert Insights:</p>
                    <p>Discover trusted tips and advice to</p>
                    <p>enhance your skincare journey.</p>
                </div>
            </div>
        </div>
    );
}

export default CoreValue;
