"use client"
import React, { useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useFetch } from '../../../../app/helpers/hooks';
import { getAgentProperty } from '../../../../app/helpers/backend';
import { useSearchParams } from 'next/navigation';

const TabDetails = ({singleData}) => {
   
    return (
        <div className='mt-6'>
            <div dangerouslySetInnerHTML={{ __html: singleData?.description }}>
                {/* <p className='paragraph_1 text-secondary_text'>
                    In vim natum soleat nostro, pri in eloquentiam contentiones. Eu sit sapientem
                    reprehendunt, omnis aliquid eu eos. No quot illum veniam est, ne pro iudico
                    saperet mnesarchum. Ea pri nostro disputando contentiones, eu nec menandri
                    qualisque, vis ex equidem invidunt. Et accusam detracto splendide per, congue
                    meliore id sea. Has eu aeterno patrioque expetendis, mel ei dissentiet
                    reformidans.In vim natum soleat nostro, pri in eloquentiam contentiones. Eu sit
                    sapientem reprehendunt, omnis aliquid eu eos. No quot illum veniam est, ne pro
                    iudico saperet mnesarchum.
                </p>
                <br />
                <p className='paragraph_1 text-secondary_text'>
                    In vim natum soleat nostro, pri in veniam est, ne pro iudico saperet mnesarchum.
                    Ea pri nostro disputando contentiones, eu nec menandri qualisque, vis ex equidem
                    invidunt. Et accusam detracto splendide per, congue meliore id sea. Has eu
                    aeterno patrioque expetendis, mel ei dissentiet reformidans.In vim natum soleat
                    nostr
                </p>
                <br />
                <p className='paragraph_1 text-secondary_text'>
                    Id est maiorum volutpat, ad nominavi suscipit suscipiantur vix. Ut ius veri
                    aperiam reprehendunt. Ut per unum sapientem consequuntur, usu ut quot scripta.
                    Sea te nisl expetenda, ad quo congue argumentum, sit quis simul accusam cu. Usu
                    ei perfecto repudiare tincidunt, ut quas malis erant vim. An mel vidit
                    iudicabit.Id est maiorum volutpat, ad nominavi suscipit suscipiantur vix. Ut ius
                    veri aperiam reprehendunt. Ut per unum sapientem consequuntur, usu ut quot
                    scripta.
                </p>
                <br />
                <p className='paragraph_1 text-secondary_text'>
                    Ipsum volumus pertinax mea ut, eu erat tacimates nam. Tibique copiosae verterem
                    mea no, eam ex melius option, soluta timeam et his. Sit simul gubergren
                    reformidans id, amet minimum nominavi eos ea. Et augue dicta vix. Mea ne utamur
                    referrentur.Ipsum volumus pertinax mea ut, eu erat tacimates nam. Tibique
                    copiosae verterem mea no.
                </p> */}
            </div>
            {/* <div className='my-6'>
                <p className='paragraph_1 !font-bold text-dark_text'>Additional Information</p>

                <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Building Age:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>20 Years</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Parking:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>No</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Water:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Heating:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>No</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Cooling:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Excercise Room:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                </div>
            </div> */}

            <div className='my-6'>
                <p className='paragraph_1 !font-bold text-dark_text'>Nearest Location</p>

                {/* <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Pharmacy:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>20 Years</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>University:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>No</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Beach:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Bus Station:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>No</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Rail Station:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                    <div className=' flex space-x-2'>
                        <p className='paragraph_1 text-secondary_text'>Bank:</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Yes</p>
                    </div>
                </div> */}
                {
                    singleData?.nearest_location?.map((item, index) => <div key={index} className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        <p className='paragraph_1 text-secondary_text'>Location: {item?.location}</p>
                        <p className='paragraph_1 !font-bold text-dark_text'>Distance: {item?.distance}</p>
                    </div>)
                }
            </div>

            {/* <div className='my-6'>
                <p className='paragraph_1 !font-bold text-dark_text'>Ammenities</p>

                <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Elevator in Building</p>
                    </div>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Alcohol</p>
                    </div>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Reservations</p>
                    </div>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Accepts Credits Cards</p>
                    </div>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Balcony</p>
                    </div>
                    <div className=' flex items-center space-x-2 text-dark_text'>
                        <FiCheck 
                            size={18}
                        />
                        <p className='paragraph_1 '>Free Wifi</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TabDetails;
