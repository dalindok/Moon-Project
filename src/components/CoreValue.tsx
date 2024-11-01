import React from 'react';

function CoreValue() {
    return (
        <div>
            <p className='underline underline-offset-8 font-bold text-2xl mt-10 text-center'>
                Our Core Values
            </p>
            <div className='flex flex-col items-center mt-10'>
                <div className='flex flex-row justify-between'>
                    <div className='bg-pink-200 ml-10 mr-4 rounded-lg flex-grow w-96 h-auto p-4'>
                        <p className='font-bold'>Community Support:</p>
                        <p>Connect, share, and grow with a supportive skincare community.</p>
                    </div>
                    <div className='bg-pink-200 ml-4 mr-10 rounded-lg flex-grow w-96 h-auto p-4'>
                        <p className='font-bold'>Quality & Wellness:</p>
                        <p>Embrace a path to radiant skin with products and routines that prioritize your well-being.</p>
                        <p></p>
                    </div>
                </div>
                <div className='bg-pink-200 rounded-lg w-96 h-auto justify-center mt-10 p-4 flex-grow'>
                    <p className='font-bold'>Expert Insights:</p>
                    <p>Discover trusted tips and advice to enhance your skincare journey.</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default CoreValue;
