'use client';
import { postVerifyOtp, sendOtp } from '../../../app/helpers/backend';
import PhoneNumberInput from '../../form/phoneNumberInput';
import { Form, Input, Modal, Radio, message } from 'antd';
import { ignore } from 'antd/es/theme/useToken';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useTimer } from 'use-timer';

function Forgot_password() {
    const [form] = Form.useForm();
    const [value, setValue] = useState('gmail');
    const [otpModal, setOtpModal] = useState(false);
    const [email, setEmail] = useState('');
    const [registrationValues, setRegistrationValues] = useState({});
    const router = useRouter()
    // const [modal, contextHolder] = Modal.useModal();
    // const confirm = () => {
    //     modal.confirm({
    //         content: <div className=' w-4/5 md:w-3/5 mx-auto py-20'>
    //             <h1 className='header_3 pb-2 text-center text-dark_text'>{'Verify Code'}</h1>
    //             <Form
    //                 name="basic"
    //                 style={{
    //                     width: '100%',
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     flexDirection: 'column',
    //                     alignItems: 'center'
    //                 }}
    //                 initialValues={{
    //                     remember: true,
    //                 }}
    //                 onFinish={
    //                     async (values) => {
    //                         if (!!values?.otp) {
    //                             // setOtpModal(false);
    //                             console.log('ddd')
    //                             const payload = {
    //                                 ...registrationValues,
    //                                 otp: values?.otp,
    //                                 action: 'forgot_password'
    //                             }
    //                             const { error, msg, data } = await postVerifyOtp(payload);
    //                             if (error) {
    //                                 return message.error(msg);
    //                             } else {
    //                                 message.success(msg);
    //                                 localStorage.setItem('token', data.token);
    //                                 setOtpModal(false);
    //                                 router.push('/reset-password')
    //                             }
    //                         }
    //                     }
    //                 }
    //             >
    //                 <Form.Item
    //                     name="otp"
    //                     className='my-8'
    //                 >

    //                     <OTPInput
    //                         numInputs={4} renderInput={(props) => <input {...props} />} inputStyle={{
    //                             width: '50px',
    //                             height: '48px',
    //                             marginRight: '1rem',
    //                             fontSize: '20px',
    //                             border: '1px solid #F79C39',
    //                             outline: 'none',
    //                         }} />

    //                 </Form.Item>
    //                 <p className="dark:text-White_Color">
    //                     {"Didn't receive the code?"} {
    //                         time === 0 ?
    //                             <span
    //                                 className="text-primary cursor-pointer"
    //                                 onClick={async () => {
    //                                     const { error, msg } = await sendOtp({ email: email, phone: registrationValues?.phone, action: 'forgot_password' });
    //                                     if (error) return message.error(msg)
    //                                     message.success(msg)
    //                                     reset()
    //                                     start()

    //                                 }}
    //                             >
    //                                 {"Resend"}
    //                             </span>
    //                             :
    //                             <span className="text-primary">
    //                                 {"resend in"} {time}s
    //                             </span>
    //                     }
    //                 </p>
    //                 <button className='bg-primary text-white w-full h-10 rounded-md mt-4 button_paragraph'  >{"Verify"}</button>
    //             </Form>
    //         </div>,
    //         width: 1000,
    //         cancelText: 'Cancel',
    //     });

    // };

    const onChange = e => {
        setValue(e.target.value);
    };

    const { time, start, pause, reset, status } = useTimer({
        initialTime: 120,
        timerType: 'DECREMENTAL',
    });

    useEffect(() => {
        if (email || registrationValues?.phone) {
            start()
        }
        if (time === 0) pause()
    }, [time, start, pause, email, registrationValues?.phone])

    return (
        <section className='relative'>
            {/* {contextHolder} */}
            <div className='absolute left-5 top-5'>
                <img width='50' src='/llt.png' alt='' />
            </div>
            <div className='absolute right-3 top-5'>
                <img width='50' src='/blt.png' alt='' />
            </div>
            <div className='absolute bottom-3 right-5'>
                <img src='/drow.png' alt='' />
            </div>
            <div className='container mx-auto flex flex-col items-center gap-10 px-4 py-20 md:flex-row lg:px-0'>
                <div className='order-2 basis-1/2 md:order-none'>
                    <img className='h-full w-full' src='/Image.png' alt='' />
                </div>
                <div className='z-10 order-1 mt-10 basis-1/2 md:order-none md:mt-0'>
                    <h1 className='text-2xl'>Forgot Your Password?</h1>
                    <p className='paragraph_1 pb-6 pt-2 text-dark_text'>
                        Please confirm your email address below and we will send you a verification
                        code.
                    </p>
                    {/* <form action='' className='paragraph_1'>
                        <label>
                            Email or phone number
                            <input
                                type='text'
                                className='paragraph_1 mb-5 mt-1 w-full border px-4 py-2 outline-none'
                            />
                        </label>

                        <input
                            className='paragraph_1 my-5 w-full cursor-pointer bg-primary px-4 py-2 text-center text-white'
                            type='submit'
                            value='Continue'
                        />

                        <p className='text-right'>
                            Don't have an account?
                            <a href='' className='py-2 text-primary underline'>
                                Sign up
                            </a>
                        </p>
                    </form> */}
                    <Form
                        form={form}
                        onFinish={async (values) => {

                            if (!!values?.email || !!values?.phone) {
                                setEmail(values?.email)
                                const { error, msg, data } = await sendOtp({ email: values?.email, phone: values?.phone, action: 'forgot_password' });
                                if (error) {
                                    return message.error(msg);
                                } else {
                                    setOtpModal(true);
                                    confirm()
                                    message.success(`OTP sent to ${values?.email || values?.phone}`)
                                    setRegistrationValues(values);
                                }
                            }
                        }}
                        layout="vertical"
                    >
                        <div className="flex md:flex-row flex-col md:justify-center items-center text-center mt-6">
                            <Radio.Group onChange={onChange} value={value} className='text-primary'>
                                <Radio className='paragraph_5 ' value={"gmail"}>
                                    {"Continue with Gmail"}
                                </Radio>
                                <Radio className='paragraph_5 ' value={"phone"}>
                                    {"Continue with Phone"}
                                </Radio>
                            </Radio.Group>
                        </div>

                        <div className="flex justify-center mt-14">
                            <div className="lg:w-[648px] w-full signup">
                                {
                                    value === 'gmail' &&
                                    <Form.Item
                                        name="email"
                                        label={"Email"}
                                        rules={[{ required: true, message: 'Please input your Email!' }]}
                                    >
                                        <Input className=' focus:text-dark_text border w-full rounded-md h-10 pl-2' placeholder='Enter Your Email' />
                                    </Form.Item>
                                }
                                {
                                    value === 'phone' &&
                                    //@ts-ignore
                                    <PhoneNumberInput name="phone" label={'Phone Number'} required={true} />
                                }
                                <button className='bg-primary text-white w-full h-10 rounded-md mt-4 button_paragraph'  >{"Send OTP"}</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Modal
                open={otpModal}
                onCancel={() => {
                    setOtpModal(false)
                    reset()
                }}
                footer={null}
                width={1000}
                destroyOnClose
            >
                <div className=' w-4/5 md:w-3/5 mx-auto py-20'>
                    <h1 className='header_3 pb-2 text-center text-dark_text'>{'Verify Code'}</h1>
                    <Form
                        name="basic"
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={
                            async (values) => {
                                if (!!values?.otp) {
                                    setOtpModal(false);
                                    const payload = {
                                        ...registrationValues,
                                        otp: values?.otp,
                                        action: 'forgot_password'
                                    }
                                    const { error, msg, data } = await postVerifyOtp(payload);
                                    if (error) {
                                        return message.error(msg);
                                    } else {
                                        message.success(msg);
                                        localStorage.setItem('token', data.token);
                                        setOtpModal(false);
                                        router.push('/reset-password')
                                    }
                                }
                            }
                        }
                    >
                        <Form.Item
                            name="otp"
                            className='my-8'
                        >

                            <OTPInput
                                numInputs={4} renderInput={(props) => <input {...props} />} inputStyle={{
                                    width: '50px',
                                    height: '48px',
                                    marginRight: '1rem',
                                    fontSize: '20px',
                                    border: '1px solid #F79C39',
                                    outline: 'none',
                                }} />

                        </Form.Item>
                        <p className="dark:text-White_Color">
                            {"Didn't receive the code?"} {
                                time === 0 ?
                                    <span
                                        className="text-primary cursor-pointer"
                                        onClick={async () => {
                                            const { error, msg } = await sendOtp({ email: email, phone: registrationValues?.phone, action: 'forgot_password' });
                                            if (error) return message.error(msg)
                                            message.success(msg)
                                            reset()
                                            start()

                                        }}
                                    >
                                        {"Resend"}
                                    </span>
                                    :
                                    <span className="text-primary">
                                        {"resend in"} {time}s
                                    </span>
                            }
                        </p>
                        <button className='bg-primary text-white w-full h-10 rounded-md mt-4 button_paragraph'  >{"Verify"}</button>
                    </Form>
                </div>
            </Modal>
        </section>
    );
}

export default Forgot_password;


