"use client"
import Link from 'next/link';
import React from 'react';
import { AiFillDashboard, AiOutlineHome } from 'react-icons/ai';
import {
    FaArrowDown,
    FaArrowUp,
    FaCreditCard,
    FaEdit,
    FaHome,
    FaPlus,
    FaSearch,
    FaTrash,
    FaTrashAlt,
    FaUserAlt,
} from 'react-icons/fa';
import { FaHouseCircleCheck, FaLocationDot, FaRotate, FaShield } from 'react-icons/fa6';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { delAgentProperty, getAllProperty, toggleAdminPropertyActive } from '../../../app/helpers/backend';
import { useActionConfirm, useFetch } from '../../../app/helpers/hooks';
import Image from 'next/image';
import dayjs from 'dayjs';
import Button from '../../common/button';
import { useRouter } from 'next/navigation';
import FrontTable from '../../common/fronTable';
import { statusClass } from '../../../app/helpers/utils';
import { Switch } from 'antd';

function AgentProperties({ active, setActive }) {
    const { push } = useRouter()

    const [data, getData, { loading }] = useFetch(getAllProperty);
    console.log("🚀 ~ AgentProperties ~ data:", data)

    const columns = [
        {
            text: 'Thumb Image',
            dataField: 'thumb_image',
            formatter: (thumb_image) => <img src={thumb_image} width={50} height={50} alt='thumb_image' />,
        },
        {
            text: 'Type',
            dataField: 'type',
            formatter: (type) => <>{type}</>,
        },
        {
            text: 'Price',
            dataField: 'price',
            formatter: (price) => <>{price}</>,
        },

        {
            text: "Status",
            dataField: "status",
            formatter: (status) => <span className={statusClass[status]}>{status}</span>,
        },

        {
            text: 'Status', dataField: 'is_active', formatter: (_, d) => <Switch
                checkedChildren="Active"
                unCheckedChildren="Inactive"
                checked={d?.is_active}
                onChange={async (e) => {
                    await useActionConfirm(toggleAdminPropertyActive, { _id: d._id, }, getData, 'Are you sure you want to change active status?', 'Yes, Change');
                }}
                className='bg-gray-500'
            />
        },
    ]

    return (

        <>
            {/* <h1 className='header_4_bold pb-3 text-dark_text'>Packages</h1> */}
            {/* <div className='my-6 flex items-center justify-between'>
                <div className=''>
                    <label htmlFor='' className='relative'>
                        <input
                            className='paragraph_1  rounded border px-5 py-2 text-secondary_text outline-none'
                            type='text'
                            name=''
                            id=''
                            placeholder='Search..'
                        />
                        <span className='absolute right-4 top-0 cursor-pointer text-xl text-secondary_text'>
                            <FaSearch />
                        </span>
                    </label>
                </div>
                <div className=''>
                    <button onClick={() => setActive('add-property')} className='paragraph_6 flex items-center text-secondary_text'>
                        <FaPlus /> <p className='ps-2'>Add New Property</p>
                    </button>
                </div>
            </div> */}
            {/* <div className=''>
                <table className='w-full border-separate border-spacing-y-2 '>
                    <thead>
                        <tr className='bg-green-50'>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p className=''>ID</p>
                                    <div className='flex text-[10px]'>
                                        <p className='pe-[1px]'><FaArrowUp /></p>
                                        <FaArrowDown />
                                    </div>
                                </div>
                            </th>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p>Image Name</p>
                                    <div className='flex text-[10px]'>
                                        <p className='pe-[1px]'><FaArrowUp /></p>
                                        <FaArrowDown />
                                    </div>
                                </div>
                            </th>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p>Created At</p>
                                    <div className='flex text-[10px]'>
                                        <p className='pe-[1px]'><FaArrowUp /></p>
                                        <FaArrowDown />
                                    </div>
                                </div>
                            </th>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p>Status</p>
                                    <div className='flex text-[10px]'>
                                        <p className='pe-[1px]'><FaArrowUp /></p>
                                        <FaArrowDown />
                                    </div>
                                </div>
                            </th>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p>Expire Date</p>
                                    <div className='flex text-[10px]'>
                                        <p className='pe-[1px]'><FaArrowUp /></p>
                                        <FaArrowDown />
                                    </div>
                                </div>
                            </th>
                            <th className='paragraph_7 p-2 text-secondary_text '>
                                <div className='flex items-center justify-between'>
                                    <p>Operation</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className=' border-spacing-4'>
                        <tr className='paragraph_7 border mb-5 bg-gray-200 text-secondary_text border-spacing-6'>
                            <td className='py-4'>#32323</td>
                            <td className='py-4'>
                                <div className='flex items-center'>
                                    <img
                                        className='h-12 w-20 rounded-md'
                                        src='/fd.png'
                                        alt=''
                                    />
                                    <p className='ps-2'>Ashiq Vila</p>
                                </div>
                            </td>
                            <td className='py-4'>2023-06-21</td>
                            <td className='py-4'>
                                <p className='text-orange-300'>Pending</p>
                            </td>
                            <td className='py-4'>2023-06-21</td>
                            <td className='py-4 flex justify-between mt-3 text-xl '>
                                <span className='hover:text-primary cursor-pointer'><FaEdit /></span>
                                <span className='text-primary cursor-pointer'><FaTrashAlt /></span>
                                <span className='hover:text-primary cursor-pointer'><FaRotate /></span>
                            </td>
                        </tr>
                        <tr className='paragraph_7 border mb-5 bg-gray-200 text-secondary_text'>
                            <td className='py-4'>#32323</td>
                            <td className='py-4'>
                                <div className='flex items-center'>
                                    <img
                                        className='h-12 w-20 rounded-md'
                                        src='/fd.png'
                                        alt=''
                                    />
                                    <p className='ps-2'>Ashiq Vila</p>
                                </div>
                            </td>
                            <td className='py-4'>2023-06-21</td>
                            <td className='py-4'>
                                <p className='text-orange-300'>Pending</p>
                            </td>
                            <td className='py-4'>2023-06-21</td>
                            <td className='py-4 flex justify-between mt-3 text-xl '>
                                <span className='hover:text-primary cursor-pointer'><FaEdit /></span>
                                <span className='text-primary cursor-pointer'><FaTrashAlt /></span>
                                <span className='hover:text-primary cursor-pointer'><FaRotate /></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <div>
                <FrontTable columns={columns} data={data} pagination={true}
                    indexed={true}
                    action={
                        // <Button onClick={() => setActive('add-property')}>
                        //     Add New 
                        // </Button>
                        <button onClick={() => setActive('add-property')} className='flex items-center gap-1'>
                            <FaPlus />
                            <h1 className='font-bold'>Add New Property</h1>
                        </button>
                    }
                    onView={(data) => {
                        push(`/agent-profile?_id=${data._id}`);
                        setActive('view-property');
                    }}
                    onEdit={(data) => {
                        push(`/agent-profile?_id=${data._id}`);
                        setActive('add-property');
                    }}
                    onDelete={delAgentProperty}
                    // shadow={false}
                    // onDelete={delContact}
                    onReload={getData}
                    // error={error}
                    loading={loading} />
            </div>
        </>
    );
}

export default AgentProperties;
