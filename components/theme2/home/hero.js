import Link from 'next/link';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaCaretDown, FaSearch } from 'react-icons/fa';
import {
    FaEllipsisVertical,
    FaHouseChimneyWindow,
    FaLocationDot,
    FaLocationPin,
} from 'react-icons/fa6';

const Hero = ({ home4, jsonData }) => {


    return (
        <section
            className={`relative flex justify-between ${home4 ? '-mt-0 h-[825px]' : '-mt-[103px] h-[965px]'}`}
        >
            <div className='basis-1/2  bg-secondary'></div>
            {home4 ? (
                <div className={`basis-1/2 bg-secondary ${home4 ? "pt-20" : ""}`}>
                    <div className=''>
                        <img src='/video2.png' alt='' />
                    </div>
                </div>
            ) : (
                    <div className={`basis-1/2 bg-cover bg-no-repeat object-contain`} style={{ backgroundImage: `url(${jsonData?.hero_section?.hero_section_image})` }}></div>
            )}

            <div className={`container absolute left-1/2 block h-full  w-full -translate-x-1/2 transform lg:flex ${home4 ? 'bottom-56' : 'bottom-0'}`}>
                <div className='flex h-[965px] basis-1/2 items-center justify-center'>
                    <div className={`${home4 ? "pt-[8rem]" : ""}`}>
                        <h1 className='header_1 py-5 text-black dark:text-white'>{jsonData?.hero_section?.heading}</h1>
                        <div className='my-10 flex'>
                            <div className='me-5 w-1 bg-primary'></div>
                            <p className='paragraph_1 text-secondary_text dark:text-white'>
                                {jsonData?.hero_section?.description}
                            </p>
                        </div>
                        <div className='mb-10 flex text-black dark:text-white'>
                            <Link href='/property' className='header_5 rounded-sm  rounded-tr-3xl bg-primary px-7 py-2 text-lg text-white transition-all ease-in-out hover:bg-hover_color flex justify-center items-center'>
                                <button>
                                    Find Property
                                </button>
                            </Link>
                            <div className='ms-10'>

                                <img className='' src='./video.png' alt='' />
                            </div>
                        </div>
                        {/* <div className='my-5 flex text-white'>
                            {home4 ? (
                                <a href='' className='header_5 me-6'>
                                    All{' '}
                                </a>
                            ) : (
                                ''
                            )}
                            <a href='' className='header_5 me-6'>
                                Sale
                            </a>
                            <a href='' className='header_5 me-6'>
                                Rent
                            </a>
                        </div>
                        <div className=' hidden rounded-lg bg-white bg-opacity-40 p-5 text-white'>
                            <div className='flex items-center'>
                                <span>
                                    <FaLocationDot></FaLocationDot>
                                </span>
                                <span className='px-5'>Location</span>
                                <span>
                                    <FaCaretDown></FaCaretDown>
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <FaLocationDot></FaLocationDot>
                                </span>
                                <span className='px-5'>Location</span>
                                <span>
                                    <FaCaretDown></FaCaretDown>
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <FaLocationDot></FaLocationDot>
                                </span>
                                <span className='px-5'>Location</span>
                                <span>
                                    <FaCaretDown></FaCaretDown>
                                </span>
                            </div>
                            <button>
                                Advance{' '}
                                <span>
                                    <FaEllipsisVertical></FaEllipsisVertical>
                                </span>
                            </button>
                            <button className='bg-secondary text-white'>
                                <FaSearch></FaSearch>
                            </button>
                        </div> */}
                    </div>
                </div>
                <div className='basis-1/2'></div>
            </div>
            {/* <div className={` container absolute left-1/2 mx-auto  -translate-x-1/2 transform md:bottom-28 ${theme3 ? 'top-[31rem]' : 'bottom-0'} ${theme3 ? "pt-20" : ""}`}>
                <div className={`w-full rounded-md  p-5 text-white shadow-md ${theme3 ? 'md:w-[61%] bg-[#365C70] bg-gradient-to-b from-[#668391] to-[#184359]' : 'md:w-[75%] bg-[#365C70] bg-opacity-70'}`}>
                    <div className=''>
                        <form action=''>
                            <div className='grid grid-cols-3 items-center justify-between md:flex'>
                                <div className='paragraph_2 flex w-full items-center px-5 py-5 md:w-auto md:justify-between '>
                                    <FaLocationDot />
                                    <select
                                        name=''
                                        id=''
                                        className='bg-transparent ps-2 outline-none'
                                    >
                                        <option value=''>Location</option>
                                    </select>
                                </div>
                                <div className='paragraph_2 flex items-center border-gray-400 px-5 py-5 md:justify-between md:border-l-2 md:border-r-2 '>
                                    <FaHouseChimneyWindow />
                                    <select
                                        name=''
                                        id=''
                                        className='bg-transparent ps-2 outline-none'
                                    >
                                        <option value=''>Property Type</option>
                                    </select>
                                </div>
                                <div className='paragraph_2 flex items-center px-5 py-5 md:justify-between '>
                                    <AiFillDollarCircle />
                                    <select
                                        name=''
                                        id=''
                                        className='bg-transparent ps-2 outline-none'
                                    >
                                        <option value=''>Price Range</option>
                                    </select>
                                </div>
                                <button
                                    className={`paragraph_2 col-span-2 me-7 flex w-full items-center rounded bg-secondary_text bg-opacity-50 px-5 py-5 md:col-auto md:w-auto ${theme3 ? 'invisible' : 'visible'}`}
                                >
                                    Advance <FaEllipsisVertical />
                                </button>
                                <button className='header_4 col-span-1 flex justify-center  rounded-lg bg-secondary  p-5 md:col-auto'>
                                    <FaSearch />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </section>
    );
};
export default Hero;
