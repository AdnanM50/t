import React from 'react';
import { Collapse } from 'antd';

const getItems = (panelStyle) => [
    {
        key: '1',
        label: <p className='header_5 textt-dark_text'>First Floor</p>,
        children: (
            <>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src='/firstFloor.png' alt='' className='object-contain' />
                    </div>
                    <div className='col-span-1 place-self-center'>
                        <p className='paragraph_1 text-secondary_text'>
                            Ipsum volumus pertinax mea ut, eu erat tacimates nam. Tibique copiosae
                            verterem mea no, eam ex melius option, soluta timeam et his. Sit simul
                            gubergren reformidans id, amet minimum nominavi eos ea. Et augue dicta
                            vix. Mea ne utamur referrentur.
                        </p>
                    </div>
                </div>
            </>
        ),
        style: panelStyle,
    },
    {
        key: '2',
        label: <p className='header_5 text-dark_text'>Second Floor</p>,
        children: (
            <>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src='/firstFloor.png' alt='' className='object-contain' />
                    </div>
                    <div className='col-span-1 place-self-center'>
                        <p className='paragraph_1 text-secondary_text'>
                            Ipsum volumus pertinax mea ut, eu erat tacimates nam. Tibique copiosae
                            verterem mea no, eam ex melius option, soluta timeam et his. Sit simul
                            gubergren reformidans id, amet minimum nominavi eos ea. Et augue dicta
                            vix. Mea ne utamur referrentur.
                        </p>
                    </div>
                </div>
            </>
        ),
        style: panelStyle,
    },
    {
        key: '3',
        label: <p className='header_5 text-dark_text'>Third Floor</p>,
        children: (
            <>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src='/firstFloor.png' alt='' className='object-contain' />
                    </div>
                    <div className='col-span-1 place-self-center'>
                        <p className='paragraph_1 text-secondary_text'>
                            Ipsum volumus pertinax mea ut, eu erat tacimates nam. Tibique copiosae
                            verterem mea no, eam ex melius option, soluta timeam et his. Sit simul
                            gubergren reformidans id, amet minimum nominavi eos ea. Et augue dicta
                            vix. Mea ne utamur referrentur.
                        </p>
                    </div>
                </div>
            </>
        ),
        style: panelStyle,
    },
];

const Plan = ({ singleData }) => {
    console.log("🚀 ~ Plan ~ singleData:", singleData)
    const panelStyle = {
        marginBottom: 24,
        background: '#fffff',
        borderRadius: 4,
        border: 'none',
    };
    return (
        <div className='mt-12 grid grid-cols-2'>
            {/* <Collapse
                bordered={false}
                expandIconPosition='end'
                defaultActiveKey={['1']}
                // expandIcon={({ isActive }) => <FiPause rotate={isActive ? 90 : 0} />}
                style={{
                    background: '#fffff',
                }}
                items={getItems(panelStyle)}
            /> */}
            {
                singleData?.property_plan?.map((item, index) => <div key={index} className='mt-4'>
                    <p className='paragraph_1 text-secondary_text mb-3'>Name: {item?.property_name}</p>
                    <div className='flex items-start gap-5'>
                        <p className='paragraph_1 !font-bold text-secondary_text mb-3'>Image:</p>

                        <img src={item?.property_image} alt='' className='w-32 h-32 object-contain' />
                    </div>
                </div>)
            }
        </div>
    );
};

export default Plan;
