"use client";
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Form, Input, message } from 'antd';
import FormInput from '../form/input';
import { postNewsLetter } from '../../app/helpers/backend';

const Footer = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        const res = await postNewsLetter(values);
        if (res?.error === true) {
            message.error(res?.msg)
        } else {
            message.success(res?.msg)
            form.resetFields();
        }
    }

    return (
        <footer className='bg-secondary pt-16'>
            <div className='container'>
                <div className='flex flex-wrap items-center justify-between space-y-4'>
                    <div className=' w-full md:w-1/2 '>
                        <h3 className='header_3 text-white'>Become a Agent</h3>
                        <div className='mt-4 flex items-center'>
                            <div className='h-[2px] w-2/5 bg-secondary_text'></div>
                            <p className='header_5 pl-2 text-white'>Sign up Today</p>
                            <Link
                                href='#'
                                className='ml-4 flex h-8 w-8 items-center justify-center rounded-full border text-secondary_text transition-all hover:bg-primary hover:text-white'
                            >
                                <FiChevronRight />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 '>
                        <Form onFinish={handleSubmit} form={form}>
                            <div className='flex flex-col gap-x-2 md:justify-end lg:flex-row'>
                                <div className=''>
                                    {/* <input
                                        type='text'
                                        className='input input-bordered h-14 w-auto border border-tertiary_text bg-secondary p-5 focus:bg-white focus:border-secondary_text focus:outline-none lg:w-[373px]'
                                        placeholder='Enter your email'
                                    ></input> */}
                                    <FormInput required className='input input-bordered h-14 w-auto border border-tertiary_text bg-secondary p-5 focus:bg-white focus:border-secondary_text focus:outline-none lg:w-[373px]' name="email" type="email" required />
                                    <div className='mt-2'>
                                        <p className='paragraph_3 text-light_text '>
                                            We care about your data in our privacy policy
                                        </p>
                                    </div>
                                </div>
                                <button type="submit" className='button_paragraph mt-2 h-14 w-full bg-primary text-white lg:mt-0 lg:w-[158px]'>
                                    Subscribe
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='mt-16 flex flex-wrap items-center justify-between space-y-6 py-5'>
                    <div className='logo order-1'>
                        <img
                            className=' md:!h[80px] md:!w-[100px] xl:h-full xl:w-full '
                            src='/logo_light.png'
                            alt=''
                        />
                    </div>
                    <div className='order-last flex w-full items-center justify-between md:order-2 md:w-fit md:space-x-6'>
                        <div className='paragraph_1 flex cursor-pointer items-center space-x-2 text-light_text transition-all ease-in-out hover:text-hover_color'>
                            <p>Overview</p>
                        </div>
                        <div className='paragraph_1 flex cursor-pointer items-center space-x-2 text-light_text hover:text-hover_color '>
                            <p>Features</p>
                        </div>
                        <div className='paragraph_1 flex cursor-pointer items-center space-x-2 text-light_text hover:text-hover_color '>
                            <p>Pricing</p>
                        </div>
                        <div className='paragraph_1 flex cursor-pointer items-center space-x-2 text-light_text hover:text-hover_color '>
                            <Link href="/terms_&_condition">Terms & Condition</Link>
                        </div>
                        <div className='paragraph_1 flex cursor-pointer items-center space-x-2 text-light_text hover:text-hover_color '>
                            <Link href="/privacy_policy">Privacy</Link>
                        </div>
                    </div>
                    <div className='order-3 mt-6 flex items-center md:order-2'>
                        <Link
                            href='#'
                            className=' ml-4 flex items-center justify-center  text-light_text  transition-all hover:text-hover_color'
                        >
                            <FaLinkedinIn className='text-2xl' />
                        </Link>
                        <Link
                            href='#'
                            className=' ml-4 flex items-center justify-center  text-light_text  transition-all hover:text-hover_color'
                        >
                            <AiFillInstagram className='text-2xl' />
                        </Link>
                        <Link
                            href='#'
                            className=' ml-4 flex items-center justify-center  text-light_text  transition-all hover:text-hover_color'
                        >
                            <FaFacebookF className='text-2xl' />
                        </Link>
                        <Link
                            href='#'
                            className=' ml-4 flex items-center justify-center  text-light_text  transition-all hover:text-hover_color'
                        >
                            <AiOutlineTwitter className='text-2xl' />
                        </Link>
                    </div>
                </div>
                <div className='mt-16 flex items-center justify-center border-t border-tertiary_text py-5'>
                    <p className='text-light_text'>
                        Copyright ©_<span>{new Date().getFullYear()}</span> Homestick
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
