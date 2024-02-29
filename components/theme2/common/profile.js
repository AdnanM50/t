'use client';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useUser } from '../../../app/contexts/user';
import { useAction } from '../../../app/helpers/hooks';
import { propertyContact } from '../../../app/helpers/backend';

function Profile({ data }) {

    return (
        <div className='relative h-[660px] w-full  rounded-lg bg-secondary p-5  '>
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full'>
                <div className='absolute left-0 top-0 '>
                    <img className=' object-cover' src='/profile_svg_1.png' alt='' />
                </div>
                <div className='absolute right-0 top-0 '>
                    <img className=' object-cover' src='/star.png' alt='' />
                </div>
                <div className='absolute bottom-0 left-0 '>
                    <img className=' object-cover' src='/star.png' alt='' />
                </div>
                <div className='absolute left-0 top-16  w-full'>
                    <img className='h-[440px] w-full' src='/Vector21.png' alt='' />
                </div>
            </div>

            <div className='absolute left-4 right-4 '>
                <h1 className='header_4 text-white'>Property Agent</h1>
                <div className='my-7'>
                    <div className='mb-2 flex items-center'>
                        <div className='h-16 w-16 rounded-full'>
                            <img className='h-full w-full rounded-full' src={data?.image} alt='' />
                        </div>
                        <div className='ms-3'>
                            <h1 className='header_7 text-white'>{data?.name}</h1>
                            <h1 className='paragrph_7 text-white'>Real Estate Agent</h1>
                        </div>
                    </div>
                    <hr className='h-[1px] border-none bg-slate-500' />
                </div>

                <Form action=''  autoComplete="off" className='agent-contact-form' onFinish={(values) => {
                    return useAction(propertyContact, {
                        ...values,
                        agent: data?._id
                    })
                }}>
                    <Form.Item  autoComplete="off" name='name'>

                        <input
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text '
                            placeholder='Name'
                        />
                        {/* <Input
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text '
                            placeholder='Name'
                        /> */}
                    </Form.Item>
                    <Form.Item autoComplete="off" name='email'>

                        <input
                            type='email'
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Email'
                        />
                        {/* <Input
                            type='email'
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Email'
                        /> */}
                    </Form.Item>
                    <Form.Item autoComplete="off" name='subject'>

                        <input
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Subject'
                        />
                        {/* <Input
                            className='paragraph_1 mt-5 w-full rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Subject'
                        /> */}
                    </Form.Item>
                    <Form.Item autoComplete="off" name='message'>

                        <textarea
                            className='paragraph_1 mt-5 w-full hover:bg-transparent rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Controlled autosize'
                            // autoSize={{
                            //     minRows: 5,
                            //     maxRows: 7,
                            // }}
                            rows={5}
                        />
                        {/* <TextArea
                            className='paragraph_1 mt-5 w-full hover:bg-transparent rounded border border-secondary_text bg-transparent px-5 py-3 text-white outline-none placeholder:!text-secondary_text'
                            placeholder='Controlled autosize'
                            autoSize={{
                                minRows: 5,
                                maxRows: 7,
                            }}
                        /> */}
                    </Form.Item>

                    <button className='paragraph_1 mt-5 w-full rounded border border-primary bg-primary px-5 py-2 text-white  outline-none transition-all duration-700'>
                        Send Message
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default Profile;
