"use client";
import { Form, message } from 'antd';
import React from 'react';
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhoneCall, FiTwitter, FiYoutube } from 'react-icons/fi';
import { useFetch } from '../../../app/helpers/hooks';
import { fetchSiteSettings, postContactUs } from '../../../app/helpers/backend';
import FormInput from '../../form/input';
import { useI18n } from '../../../app/providers/i18n';
import PhoneNumberInput from '../../form/phoneNumberInput';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    const [form] = Form.useForm()
    const i18n = useI18n()
    const [settings, getSettings] = useFetch(fetchSiteSettings)


    const handleFinish = async (values) => {
        const res = await postContactUs(values)
        if (res?.error === false) {
            message.success(res?.msg)
            form.resetFields();
        } else {
            message.error(res?.message)
        }
    }

    return (
        <section>
            <div className='py-32'>
                <h1 className='header_2 text-center text-dark_text'>Get in touch with us </h1>

                <div className='container mx-auto'>
                    <div className='mt-16 flex max-w-[1216px] flex-col justify-between rounded-md p-5 shadow-lg lg:flex-row'>
                        <div className='relative mt-6 w-full rounded-md bg-secondary p-5 lg:mt-0 lg:h-[647px] lg:w-[491px] -z-10 mr-8'>
                            <div className='flex h-full flex-col justify-between gap-6 z-20'>
                                <div className='mt-4'>
                                    <h1 className='header_3 text-white'>Contact Information</h1>
                                    <p className='paragraph_1 mt-2 text-white'>
                                        Say something to start a live chat!
                                    </p>
                                </div>

                                <div className=''>
                                    <ul className='flex flex-col space-y-4'>
                                        <li className='paragraph_1 flex items-center gap-2'>
                                            <FiPhoneCall className='text-white' />
                                            <span className='text-white'>
                                                {settings?.phone}
                                            </span>
                                        </li>
                                        <li className='paragraph_1 flex items-center gap-2'>
                                            <FiMail className='text-white' />
                                            <span href='#' className='text-white'>
                                                {settings?.email}
                                            </span>
                                        </li>
                                        <li className='paragraph_1 flex items-center gap-2'>
                                            <FiMapPin className='text-white' />
                                            <span href='#' className='text-white'>
                                                {settings?.address}
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className='flex space-x-3'>
                                   
                                </div>
                            </div>
                            <div className='absolute bottom-0 right-0 -z-10'>
                                <img src='/element7.png' alt='contact' className=' object-cover' />
                            </div>
                        </div>

                        <div>
                            <Form onFinish={handleFinish} form={form} layout='vertical'>
                                <div className='lg:!max-w-[585px] pt-10 md:pt-0'>
                                    <p className='header_4 mb-4 text-[#717171]'>Any question or remarks? Just write us a message!</p>
                                    <div className='flex flex-col gap-8 lg:flex-row'>
                                        <div className='lg:w-[422px]'>
                                            <FormInput name='name' required placeholder='Name' label={"Name"} className='placeholder:paragraph_3 w-full !border-b !border-b-secondary_text py-1 text-dark_text placeholder-secondary_text transition-colors focus:border-b-2 focus:outline-none' />
                                        </div>
                                        <div className='lg:w-[422px]'>
                                            <FormInput name='email' required placeholder='Email' label={"Email Address"} isEmail className='placeholder:paragraph_3 w-full !border-b !border-b-secondary_text py-1 text-dark_text placeholder-secondary_text transition-colors focus:border-b-2 focus:outline-none' />
                                        </div>
                                    </div>
                                    <div className='mt-2 flex flex-col gap-8 lg:flex-row'>
                                        <div className='lg:w-[422px]'>
                                            <PhoneNumberInput name='phone' required label={"Phone Number"} className='placeholder:paragraph_3 w-full !border-b !border-b-secondary_text py-1 text-dark_text placeholder-secondary_text transition-colors focus:border-b-2 focus:outline-none' />
                                        </div>
                                        <div className='lg:w-[422px]'>
                                            <FormInput name='company' placeholder='Company Name' label={"Company"} className='placeholder:paragraph_3 w-full !border-b !border-b-secondary_text py-1 text-dark_text placeholder-secondary_text transition-colors focus:border-b-2 focus:outline-none' />
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <FormInput name='message' placeholder='Message' label={"Message"} textArea className='placeholder:paragraph_3 w-full !border-b !border-b-secondary_text py-1 text-dark_text placeholder-secondary_text transition-colors focus:border-b-2 focus:outline-none' />
                                    </div>
                                </div>
                                <button type='submit' className='button_paragraph mt-6 w-auto rounded-md border border-primary bg-primary px-3 py-3 text-white hover:bg-primary lg:px-6'>Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
