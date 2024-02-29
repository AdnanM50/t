import Profile from '../../../../../../components/theme2/common/profile';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {
    FaFacebook,
    FaInstagram,
    FaLocationArrow,
    FaPhone,
    FaStar,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import {
    FaLocationCrosshairs,
    FaLocationDot,
    FaLocationPin,
    FaMessage,
    FaRegMessage,
} from 'react-icons/fa6';

function page() {
    return (
        <section className='py-32'>
            <div className='container mx-auto md:flex block gap-5'>
                <div className='basis-2/3'>
                    <div className='relative rounded-lg border p-5 '>
                        <div className='absolute right-3 top-2'>
                            <img src='/box_45.png' alt='' />
                        </div>
                        <div className='lg:flex block gap-10'>
                            <div className=''>
                                <img className='lg:h-full h-auto w-full rounded-md' src='/woman.png' alt='' />
                            </div>
                            <div className=''>
                                <h1 className='header_4_bold text-dark_text'>Clinton H Barnes</h1>
                                <p className='paragraph_1 mb-7 text-secondary_text'>
                                    Real Estate Agent
                                </p>
                                <div className=''>
                                    <p className='paragraph_1 flex items-center py-2  text-dark_text'>
                                        <span className='pe-2'>
                                            <FaPhone />
                                        </span>
                                        +880123456789
                                    </p>
                                    <p className='paragraph_1 flex items-center py-2  text-dark_text'>
                                        <span className='pe-2'>
                                            <AiOutlineMail />
                                        </span>
                                        agent1@gmail.com
                                    </p>
                                    <p className='paragraph_1 flex items-center py-2  text-dark_text'>
                                        <span className='pe-2'>
                                            <FaLocationDot />
                                        </span>
                                        Washington, Indiana, Florida City, Florida
                                    </p>
                                </div>
                                <div className='flex pt-5'>
                                    <div className='mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray_text transition-all duration-300 ease-in hover:bg-primary_lite hover:text-primary'>
                                        <a href=''>
                                            <FaTwitter />
                                        </a>
                                    </div>
                                    <div className='mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray_text transition-all duration-300 ease-in hover:bg-primary_lite hover:text-primary'>
                                        <a href=''>
                                            {' '}
                                            <FaFacebook />{' '}
                                        </a>
                                    </div>
                                    <div className='mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray_text transition-all duration-300 ease-in hover:bg-primary_lite hover:text-primary'>
                                        <a href=''>
                                            {' '}
                                            <FaInstagram />{' '}
                                        </a>
                                    </div>
                                    <div className='mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray_text transition-all duration-300 ease-in hover:bg-primary_lite hover:text-primary'>
                                        <a href=''>
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-slate-50 rounded lg:absolute mt-10 lg:mt-0 -bottom-32 left-20 right-10 z-10">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div className="">
                                        <p className='py-3 paragraph_1 text-dark_text'>Position:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Experience:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Location:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Practice Area:</p>
                                    </div>
                                    <div className="">
                                        <p className='py-3 paragraph_1 text-secondary_text'>Senior Property Seller</p>
                                        <p className='py-3 paragraph_1 text-secondary_text'>10+ year</p>
                                        <p className='py-3 paragraph_1 text-secondary_text'>13A, NYC</p>
                                        <p className='py-3 paragraph_1 text-secondary_text'>Property Seller</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="">
                                        <p className='py-3 paragraph_1 text-dark_text'>Agent ID:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Working Since:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Property sold:</p>
                                        <p className='py-3 paragraph_1 text-dark_text'>Review:</p>
                                    </div>
                                    <div className="">
                                        <p className='py-3 paragraph_1 text-secondary_text'>a42G3242</p>
                                        <p className='py-3 paragraph_1 text-secondary_text'>2000</p>
                                        <p className='py-3 paragraph_1 text-secondary_text'>200</p>
                                        <p className='py-3 paragraph_1 text-secondary_text flex'><span className='text-primary'><FaStar/></span><span className='text-primary'><FaStar/></span><span className='text-primary'><FaStar/></span><span className='text-gray-500'><FaStar/></span><span className='text-gray-500'><FaStar/></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-20 right-10 '>
                            <img className=' object-cover' src='/star2.png' alt='' />
                        </div>
                    </div>
                    <div className="px-20 mt-40">
                        <h1 className='header_4_bold text-dark_text pb-6'>About Me</h1>
                        <p className='paragraph_4 text-secondary_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas et soluta corporis adipisci? Hic, repudiandae sunt fugiat sed atque officia maiores et quod nesciunt, temporibus similique. Soluta quo minima ullam consectetur quidem ratione, repellat optio officia cumque, vitae deleniti tempore necessitatibus assumenda nostrum est tempora quae, voluptas numquam molestiae dignissimos beatae saepe aperiam vero? Ipsum quisquam aliquam itaque necessitatibus nam qui deleniti minus architecto ea voluptas nostrum aut in expedita distinctio molestiae assumenda, vel a dolorum. Officiis nesciunt molestiae consectetur delectus sunt hic, incidunt illum sapiente dolor quasi explicabo laboriosam, officia sit praesentium optio. Esse, a deleniti? Aliquam iusto similique inventore sed rem deserunt officiis. Modi necessitatibus enim praesentium sint voluptas adipisci similique impedit. Quam obcaecati praesentium molestias natus ullam maxime ab tempora deleniti illum unde explicabo saepe ad laudantium quas nisi animi amet commodi vitae enim ratione, ipsum dolorem soluta. Veniam maiores eveniet voluptatum quasi perferendis molestiae repellendus ut, nemo obcaecati ratione incidunt saepe assumenda repudiandae fuga doloremque odio eligendi excepturi autem? Natus facere quos incidunt culpa perspiciatis facilis, suscipit nesciunt et. Totam aut expedita amet incidunt rerumedit, quos rerum, consequatur temporibus?</p>
                    </div>
                </div>
                <div className='basis-1/3'>
                    <Profile />
                </div>
            </div>
        </section>
    );
}

export default page;
