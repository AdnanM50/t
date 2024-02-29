"use client"
import React, { useEffect, useState } from 'react'
import { AiFillDashboard, AiOutlineHome } from 'react-icons/ai'
import { FaCreditCard, FaEdit, FaHome, FaUserAlt } from 'react-icons/fa'
import { FaHouseCircleCheck, FaLocationDot, FaShield } from 'react-icons/fa6'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import Dashboard from '../agent-profile/dashboard'
import Setting from '../agent-profile/setting'
import Credits from '../agent-profile/credits'
import AgentProperties from '../agent-profile/properties'
import ResetPassword from './resetPassword'
import AddProperty from '../agent-profile/addProperty'
import { useUser } from '../../../app/contexts/user'
import { usePathname, useRouter } from 'next/navigation'
import { message } from 'antd'
import EditProfile from './edit-profile'
import ViewProperty from '../agent-profile/viewProperty'
import Contact from '../agent-profile/agent-contact'

const items = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <AiFillDashboard></AiFillDashboard>,
        children: <Dashboard></Dashboard>
    },
    {
        label: 'Properties',
        key: 'properties',
        icon: <FaHouseCircleCheck></FaHouseCircleCheck>,
        children: <AgentProperties></AgentProperties>
    },
    {
        label: 'Credits',
        key: 'credits',
        icon: <FaCreditCard></FaCreditCard>
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <FaUserAlt></FaUserAlt>
    },
    {
        label: 'Setting',
        key: 'setting',
        icon: <FiSettings></FiSettings>
    },
    {
        label: 'Reset Password',
        key: 'resetPassword',
        icon: <FaEdit></FaEdit>
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <FiLogOut></FiLogOut>
    }
]

function Agent_Profile() {
    const { push } = useRouter()
    const { user, getUser } = useUser()
    const [active, setActive] = useState('dashboard')
    const path = usePathname()
    console.log("🚀 ~ Agent_Profile ~ active:", path)

    useEffect(() => {
        getUser();
        if(active !== 'add-property' && active !== 'view-property') {
            if (path !== '/login') {
                console.log('llllllllllllllllllllllllllllllllllllllll')
                push(`/agent-profile`)
            }
        }
        
    }, [ user?._id, active])

    return (
        <section className='relative'>
            <div className="absolute top-10 left-3">
                <img src="" alt="" />
            </div>
            <div className="absolute top-10 right-3">
                <img src="" alt="" />
            </div>
            <div className="container mx-auto pb-24">
                <div className="text-center">
                    <h1 className='header_2 py-10'>Agents Dashboard</h1>
                </div>
                <div className="lg:flex block gap-5">
                    <div className="basis-1/3 rounded-lg shadow-lg p-8">
                        <h1 className='header_4_bold text-dark_text'>Account Information</h1>

                        <div className="relative my-10">
                            <p className='paragraph_6 text-secondary_text'>Profile Picture</p>
                            {user?.image && <div className="max-w-[200px]">
                                <img className='w-full h-full' src={user?.image && user?.image} alt="" />
                            </div>}
                            <span className='text-primary text-3xl absolute top-10 cursor-pointer -right-2'><FaEdit onClick={() => setActive('setting')}></FaEdit></span>
                        </div>
                        <div className="w-full">

                            {
                                items.map((item, index) => <li onClick={() => {
                                    setActive(item.key);
                                    if (item?.key === 'logout') {
                                        localStorage.removeItem('token')
                                        message.success('Logged out successfully')
                                        getUser()
                                        push('/login')
                                    }
                                    }} className={` flex cursor-pointer  items-center header_5_lite border hover:text-white hover:bg-primary w-full py-3 px-2 rounded-md my-5 transition-colors duration-500 ease-in-out ${item.key === active ? "text-white bg-primary" : "text-secondary_text"}`}>
                                    <span className='header_4 w-8'>
                                        {item.icon}
                                    </span> {item.label}</li>
                                )
                            }
                        </div>
                    </div>
                    <div className={`basis-2/3 rounded-lg shadow-lg ${active === 'properties' ? 'p-0' : 'p-8'} mt-10 lg:mt-0 `}>
                        {active === 'dashboard' && <Dashboard />}
                        {active === 'setting' && <EditProfile active={active} setActive={setActive}></EditProfile>}
                        {active === 'credits' && <Credits />}
                        {active === 'properties' && <AgentProperties active={active} setActive={setActive} />}
                        {active === 'view-property' && <ViewProperty active={active} setActive={setActive} />}
                        {active === 'add-property' && <AddProperty active={active} setActive={setActive} />}
                        {active === 'resetPassword' && <ResetPassword />}
                        {active === 'addProperty' && <AddProperty />}
                        {active === 'contact' && <Contact />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agent_Profile;