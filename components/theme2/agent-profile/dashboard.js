import React from 'react';
import { FaCreditCard, FaEdit, FaHome, FaUserAlt } from 'react-icons/fa';
import { FaHouseCircleCheck, FaLocationDot, FaShield } from 'react-icons/fa6';

function Dashboard() {
    return (
        <>
            <h1 className='header_4_bold pb-3 text-dark_text'>Your current credits credit's: 10</h1>
            <div className=' grid grid-cols-2 gap-8 '>
                <div className='relative rounded bg-secondary px-6 py-5 text-white'>
                    <h1 className='header_2'>10</h1>
                    <p className='header_6 mt-12'>Approved Properties</p>
                    <div className='absolute bottom-0 right-0'>
                        <img src='./Ellipse 842.png' alt='' />
                    </div>
                    <div className='absolute right-5 top-5'>
                        <span className='text-5xl text-gray-500'>
                            <FaLocationDot></FaLocationDot>
                        </span>
                    </div>
                </div>
                <div className='relative rounded bg-primary px-6 py-5 text-white'>
                    <h1 className='header_2'>05</h1>
                    <p className='header_6 mt-12'>Pending Properties</p>
                    <div className='absolute bottom-0 right-0'>
                        <img src='./Ellipse 842.png' alt='' />
                    </div>
                    <div className='absolute right-5 top-5'>
                        <span className='text-5xl text-gray-500'>
                            <FaHome></FaHome>
                        </span>
                    </div>
                </div>
                <div className='relative rounded bg-[#1CAF65] px-6 py-5 text-white'>
                    <h1 className='header_2'>10</h1>
                    <p className='header_6 mt-12'>Approved Properties</p>
                    <div className='absolute bottom-0 right-0'>
                        <img src='./Ellipse 842.png' alt='' />
                    </div>
                    <div className='absolute right-5 top-5'>
                        <span className='text-5xl text-gray-500'>
                            <FaUserAlt></FaUserAlt>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
