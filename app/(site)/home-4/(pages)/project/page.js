import Banner from '../../../../../components/theme2/common/banner';
import SingleProject from '../../../../../components/theme2/common/projectCard';
import Sidebar from '../../../../../components/theme2/common/sidebar';
import React from 'react';

const Projects = () => {
    return (
        <>
            <Banner title='Projects' />
            <div className='py-32'>
                <div className='container'>
                    <div className='col-span-1 grid grid-cols-1 gap-4 lg:grid-cols-3'>
                        <div className='sidebar flex flex-col items-center justify-center'>
                            <Sidebar />
                        </div>
                        <div className='sm:col-span-2 '>
                            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
                                <SingleProject />
                                <SingleProject />
                                <SingleProject />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
