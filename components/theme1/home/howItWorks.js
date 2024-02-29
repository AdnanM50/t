import React from 'react';

const HowItWorks = ({ theme1 }) => {
    return (
        <section className=' mb-16'>
            <div className='how_its_works container mx-auto py-6'>
                <div className='mb-14 px-2 !text-center'>
                    <h2
                        className={`header_2 mb-6 text-center ${theme1 ? 'text-white' : 'text-dark_text'}`}
                    >
                        How It Works
                    </h2>
                    <p
                        className={`paragraph_3 text-center ${theme1 ? 'text-white' : 'text-secondary_text'}`}
                    >
                        {' '}
                        A great platform to buy, sell and rent your properties without any agent or
                        commissions.
                    </p>
                </div>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className=' bg-tertiary p-5 text-white'>
                        <div className=''>
                            <img src='/icons/home_Icon.png' alt='' />
                        </div>
                        <div className='flex py-6 pr-8 text-light_text'>
                            <h1 className='header_4'>01</h1>
                            <h2 className='header_3 ml-5'>Evaluate Property</h2>
                        </div>
                        <hr className='pb-5' />
                        <p className='paragraph_1 text-light_text'>
                            The sales comparison approach, which compares similar properties that
                            have sold or rented in the same area within a given time period.
                        </p>
                    </div>
                    <div className=' bg-tertiary p-5 text-white'>
                        <div className=''>
                            <img src='/icons/Man.png' alt='' />
                        </div>
                        <div className='flex py-6 pr-8 text-light_text'>
                            <h1 className='header_4'>02</h1>
                            <h2 className='header_3 ml-5'>Meeting With Agent</h2>
                        </div>
                        <hr className='pb-5' />
                        <p className='paragraph_1 text-light_text'>
                            Do your research. Before you meet with an agent, do some homework on the
                            market, the property, and the agent.
                        </p>
                    </div>
                    <div className=' bg-tertiary p-5 text-white'>
                        <div className=''>
                            <img src='/icons/deal.png' alt='' />
                        </div>
                        <div className='flex py-6 pr-8 text-light_text'>
                            <h1 className='header_4 '>03</h1>
                            <h2 className='header_3 ml-5'>Close The Deal</h2>
                        </div>
                        <hr className='pb-5' />
                        <p className='paragraph_1 text-light_text'>
                            The sales comparison approach, which compares similar properties that
                            have sold or rented in the same area within a given time period.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
