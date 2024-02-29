"use client";
import { Form, Input, Radio, message } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { postLogin } from '../../../app/helpers/backend'
import PhoneNumberInput from '../../form/phoneNumberInput'
import { InfinitySpin } from 'react-loader-spinner'
import { useUser } from '../../../app/contexts/user'

function LoginC() {
  const router = useRouter()
  const [value, setValue] = useState('gmail');
  const [loadingRequest, setLoadingRequest] = useState(false)
  const [error, setError] = useState(null)
  const { getUser, user } = useUser()

  console.log("user", user)

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async (values) => {
    setLoadingRequest(true)
    setError(null)

    // return console.log(values)
    const { error, msg, data } = await postLogin(values)
    if (error) {
      setError(msg)
      message.error(msg)
      setLoadingRequest(false)
    }
    else {
      if (data?.role === "agent") {
        setLoadingRequest(false)
        router.push("/agent-profile")
        localStorage.setItem('token', data.token)
        message.success(msg)
      } else if (data?.role === "admin") {
        setLoadingRequest(false)
        localStorage.setItem('token', data.token)
        router.push("/admin")
        message.success(msg)
      } else {
        localStorage.setItem('token', data.token)
        getUser()
        setLoadingRequest(false)
        router.push("/profile")
        message.success(msg)
      }
    }
  }

  return (
    <section className="relative py-36 ">
      <div className="absolute top-5 left-5">
        <img width="50" src="./llt.png" alt="" />
      </div>
      <div className="absolute top-5 right-3">
        <img width="50" src="./blt.png" alt="" />
      </div>
      <div className="absolute bottom-3 right-5">
        <img src="./drow.png" alt="" />
      </div>
      <div className="container mx-auto flex md:flex-row flex-col items-center gap-10 lg:px-0 px-4">
        <div className="basis-1/2 order-2 md:order-none">
          <img className="h-full w-full" src="./Image.png" alt="" />
        </div>
        <div className="basis-1/2 order-1 md:order-none">
          <h1 className="header_4">Login</h1>
          <p className="header_7 text-secondary_text pt-10">
            Welcome Back
          </p>
          <p className="header_7 text-secondary_text pb-10">
            Please enter your account details
          </p>

          <Form layout="vertical" onFinish={handleSubmit}>
            <div className="md:flex-row flex flex-col justify-center items-center text-center my-4">
              <Radio.Group onChange={onChange} value={value} className='text-primary'>
                <Radio className='paragraph_5 ' value={"gmail"}>
                  Sign in with Gmail
                </Radio>
                <Radio className='paragraph_5 ' value={"phone"}>
                  Sign in with Phone
                </Radio>
              </Radio.Group>
            </div>

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
            <Form.Item
              name="password"
              label={"Password"}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder='Enter Your Password' className=' focus:text-dark_text border w-full rounded-md h-10  pl-2' />
            </Form.Item>

            <button className='bg-primary rounded-md text-white my-5 w-full cursor-pointer relative h-10' >
              {loadingRequest ?
                <span className="absolute -top-4 left-[35%]">
                  <InfinitySpin
                    //@ts-ignore
                    visible={true}
                    width="150"
                    height="80"
                    color="#fff"
                    ariaLabel="infinity-spin-loading" />
                </span>
                : "Login"}

            </button>
          </Form>

          <div className='flex justify-between items-center'>
            <p className="text-right py-4 paragraph_5">
              <Link className="underline text-primary" href="/forgot_password">Forgot Password</Link>
            </p>
            <p className="text-right paragraph_5">
              Don't have an account?
              <Link href="/signup" className="underline text-primary"> Sign up</Link>
            </p>
          </div>


        </div>
      </div>
    </section >
  )
}

export default LoginC