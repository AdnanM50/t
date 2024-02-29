import React from 'react';
import { AiFillDashboard, AiOutlineHome } from 'react-icons/ai';
import { FaCreditCard, FaEdit, FaHome, FaUserAlt } from 'react-icons/fa';
import { FaHouseCircleCheck, FaLocationDot, FaShield } from 'react-icons/fa6';
import { FiLogOut, FiSettings } from 'react-icons/fi';

function Credits() {
    return (
        <>
            <h1 className='header_4_bold pb-3 text-dark_text'>Packages</h1>
            <div className='mb-9 w-full rounded bg-gray-200 p-5'>
                <p className='paragraph_1'>
                    Your credits: <span className='text-primary'>10 Credits</span>
                </p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className=' rounded bg-slate-50 p-8 text-center hover:bg-white hover:shadow-xl'>
                    <h1 className='header_7 text-dark_text'>Free First Post</h1>
                    <p className='paragraph_1 pt-2 text-secondary_text'>Free 1 Post(s)</p>
                    <button className='header_7 mt-5 bg-primary px-5 py-2 text-center text-white'>
                        Purchase
                    </button>
                </div>
                <div className=' rounded bg-slate-50 p-8 text-center hover:bg-white hover:shadow-xl'>
                    <h1 className='header_7 text-dark_text'>Free First Post</h1>
                    <p className='paragraph_1 pt-2 text-secondary_text'>Free 1 Post(s)</p>
                    <p className='paragraph_1 pt-2 text-secondary_text'>Free 1 Post(s)</p>
                    <button className='header_7 mt-5 bg-primary px-5 py-2 text-center text-white'>
                        Purchase
                    </button>
                </div>
                <div className=' rounded bg-slate-50 p-8 text-center hover:bg-white hover:shadow-xl'>
                    <h1 className='header_7 text-dark_text'>Free First Post</h1>
                    <p className='paragraph_1 pt-2 text-secondary_text'>Free 1 Post(s)</p>
                    <p className='paragraph_1 pt-2 text-secondary_text'>Free 1 Post(s)</p>
                    <button className='header_7 mt-5 bg-primary px-5 py-2 text-center text-white'>
                        Purchase
                    </button>
                </div>
            </div>
            <div className='mt-20 rounded-lg p-8 shadow-xl '>
                <h1 className='header_4_bold pb-1 text-dark_text'>Transactions</h1>
                <hr />
                <div className='pt-10 text-center'>
                    <p className='paragraph_1'>Opps!</p>
                    <p className='paragraph_3 text-secondary_text'>No transactions</p>
                </div>
            </div>
        </>
    );
}

export default Credits;
