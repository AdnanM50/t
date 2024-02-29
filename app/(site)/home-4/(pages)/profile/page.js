'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";
const Profile = () => {
    const [clickon, setClickon] = useState('profile')
    const [active, setActive] = useState('')

    const Changehandle = () => {
        //@ts-ignore
        setClickon(!true)
    }

    const [formData, setFormData] = useState();
    const onFinish = (values) => {
        Swal.fire({
            title: `Successfull ${values.name}!`,
            text: "Your password changed successfully",
            icon: "success",
        });
        setFormData(values);
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className='flex gap-10 mt-20'>
            <div className='w-4/12 border shadow-lg shadow-gray-400 rounded-md p-10 sticky top-0'>
                <h2 className='text-2xl font-bold'>Account Information</h2>
                <div className='my-3 '>
                    <p className='text-xs'>Profile Picture</p>
                    <img src={'/about1.png'} width={500} height={500} className='w-[200px] h-[200px]' alt='imgas' />
                </div>
                <h3 onClick={() => setClickon('profile')} className={`hover:text-orange-600 cursor-pointer ${active ? 'text-orange-500' : ''}`}>Profile</h3>
                <h3 onClick={() => setClickon('changePass')} className='hover:text-orange-600 cursor-pointer'>Change Password</h3>
            </div>
            {
                // profile 
                clickon == 'profile' ? <div className='w-full flex flex-col gap-2'><h2>My Profile</h2><div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>
                    <ul className="grid grid-cols-2 gap-4">
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Fullname</h2>
                            <h5 className="text-base font-normal mb-1">Mahedi Hasan</h5>
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Email</h2>
                            <h5 className="text-base font-normal mb-1">user@gmail.com</h5>
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-3">Image</h2>
                            <img src={'/about1.png'} height={100} width={100} alt="profile" className="rounded-full w-20 h-20 " />
                        </li>
                        <li>
                            <h2 className="text-base font-normal opacity-60 mb-1">Phone</h2>
                            <h5 className="text-base font-normal mb-1">01998311602</h5>
                        </li>
                    </ul>
                </div></div> : '' 
                // Password 
                || clickon === "changePass" ? <div className='w-full flex flex-col gap-2'><h2>Change Password</h2><div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>
                    <Form
                        className="profile  flex flex-col "
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="password"
                            label="Old Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your old password!',
                                },
                            ]}

                            hasFeedback
                        >
                            <Input placeholder="Enter your old password" />
                        </Form.Item>

                        <Form.Item
                            name="password1"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your new password!',
                                },
                            ]}

                            hasFeedback
                        >
                            <Input placeholder="Enter your new password" />
                        </Form.Item>

                        <Form.Item
                            name="password3"
                            label="Confirm Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Confirm your password!',
                                },
                            ]}

                            hasFeedback
                        >
                            <Input placeholder="Confirm your password" />
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            Change password
                        </Button>
                    </Form>
                </div></div> : ''
            }
            {/* <div className='w-full border shadow-lg shadow-gray-400 rounded-md p-10'>

            </div> */}
        </div>
    );
};

export default Profile;