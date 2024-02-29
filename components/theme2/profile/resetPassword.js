'use client';
import React, { useState } from 'react';
import { postChangePassword } from '../../../app/helpers/backend';
import { Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';


function ResetPassword() {
    const { push } = useRouter()
    const [form] = Form.useForm();
    return (
        <>
            <h1 className='header_4_bold pb-3 text-dark_text'>Reset Password</h1>
            <div className='flex flex-col gap-y-4 mt-10'>
                <Form layout="vertical" form={form}
                    onFinish={async (values) => {
                        const { error, msg } = await postChangePassword(values)
                        if (!error) {
                            localStorage.removeItem('token')
                            message.success(msg)
                            push('/login')
                        } else {
                            message.error(msg)
                        }
                    }}
                >
                    <Form.Item
                        name="old_password"
                        label="Old Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your old password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Enter Your Old Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
                    </Form.Item>
                    <Form.Item
                        name="new_password"
                        label={"New Password"}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder='Enter Your New Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
                    </Form.Item>
                    <Form.Item
                        name="confirm_password"
                        label={"Confirm Password"}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('new_password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder='Confirm Your Password' className=' focus:text-dark_text w-full border rounded-md h-10  pl-2' />
                    </Form.Item>
                    <button className='bg-primary text-white py-2 px-4 rounded-md'>{"Reset Password"}</button>
                </Form>
            </div>
        </>
    );
}

export default ResetPassword;
