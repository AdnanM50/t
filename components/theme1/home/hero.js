import Link from 'next/link';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Hero = ({ theme1 }) => {
    return (
        <div className='container mx-auto'>
            <div className='relative'>
                <div
                    className={`bg-white md:absolute md:right-0 md:top-0 md:w-[653px] lg:pt-40 ${theme1 ? 'bg-opacity-0' : 'bg-opacity-30'} z-10 order-1`}
                >
                    <p
                        className={`header_4 md:text-center md:mr-36 ${theme1 ? 'text-[#888AA0] dark:text-slate-100' : ''} pb-2`}
                    >
                        Lets Find with us!
                    </p>
                    <h1
                        className={`header_1 uppercase md:ps-[135px] ${theme1 ? 'dark:text-slate-100 text-[#313234]' : 'text-dark_text'}`}
                    >
                        Your Dream home
                    </h1>
                    <p
                        className={`header_4 ${theme1 ? 'dark:text-slate-100 text-[#888AA0]' : 'text-secondary_text md:text-dark_text lg:text-secondary_text '}  pt-3 md:ps-[9rem] lg:pt-5`}
                    >
                        Find your dream home with our experts Real Estate Agents
                    </p>
                </div>
                <div>
                    <div className='relative order-2 md:w-4/5 '>
                        <img
                            className='h-auto object-fill  md:h-[486px] lg:h-[759px]'
                            src={theme1 ? '/Hero1-Dark.png' : '/Hero1.png'}
                            alt=''
                        />
                            {/* <img
                                className='h-auto object-fill  md:h-[486px] lg:h-[759px]'
                                src={theme1 ? '/Hero1.png' : ''}
                                alt=''
                        /> */}
                        <div className='absolute bottom-[-15px] left-1/2 flex -translate-x-1/2 transform flex-col items-center md:left-1/4'>
                            <p className={`header_7 ${theme1 ? 'dark:text-white text-dark_text' : 'text-dark_text'}`}>
                                Search Property
                            </p>
                            <Link
                                href='#'
                                className='flex h-8 w-8 items-center justify-center rounded-full border bg-hover_color transition-all hover:bg-primary hover:text-white'
                            >
                                <FiChevronDown className='text-white' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`bottom-0 right-0 md:absolute ${theme1 ? 'dark:bg-neutral-800 bg-white' : 'bg-white'} order-3 py-4 ps-4 md:w-96 `}
                >
                    <h3 className={`header_3 ${theme1 ? 'dark:text-violet-100 text-dark_text' : 'text-dark_text'}`}>
                        Leave Us <br />a message
                    </h3>
                    <div className='flex items-center'>
                        <div className='h-[2px] w-3/5 bg-secondary_text'></div>
                        <p
                            className={`header_5 header_3 pl-2 ${theme1 ? 'dark:text-violet-100 text-dark_text' : 'text-dark_text'}`}
                        >
                            Contact Us
                        </p>
                        <Link
                            href='#'
                            className='ml-auto flex h-8 w-8 items-center justify-center rounded-full border text-secondary_text transition-all hover:bg-primary hover:text-white'
                        >
                            <FiChevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
