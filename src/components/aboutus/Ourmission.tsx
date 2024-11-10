import React from 'react';
import face from '../../assets/aboutus/face.png';

const OurMission = () => {
    return (
        <section className="flex flex-col items-center min-h-screen py-16 px-4 sm:px-6 md:px-12 bg-white">
            {/* Centered Heading */}
            <h2 className="text-7xl sm:text-5xl md:text-7xl font-bold text-center mb-8 pt-8">
                <span className="text-black">Our</span> <span className="text-rose-300">Mission</span>
            </h2>

            {/* Content section with image and text box side by side */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                {/* Image section */}
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <img 
                        src={face} 
                        alt="Illustration of a person reading" 
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 ml-2 pl-2" // added padding-left
                        style={{ paddingLeft: '0.5rem' }} // Adds padding-left directly for more control
                    />
                </div>

                {/* Text box section */}
                <div className="md:w-2/3 max-w-lg md:max-w-2xl px-4 sm:px-6 md:px-8 flex flex-col items-center md:items-start p-10">
                    <div className="border-4 border-rose-300 rounded-lg p-6 mt-6 bg-white shadow-md w-full md:w-[95%] lg:w-[110%] xl:w-[120%] text-center md:text-left">
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed p-3">
                            Our mission is to create a supportive community where 
                            skincare enthusiasts can connect, share, and learn. We 
                            empower users to discuss and recommend skincare tips, 
                            routines, and products, helping everyone achieve their 
                            beauty goals. Together, we grow and glow!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
