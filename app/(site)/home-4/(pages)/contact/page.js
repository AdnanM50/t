'use client';
import React, { useEffect } from 'react';
import Breadcrumb from '../../../../../components/theme2/common/banner';
import Contact from '../../../../../components/theme2/home/contact';
import Mapp from '../../../../../components/theme2/contact/map';
import { fetchSinglePage } from '../../../../helpers/backend';
import { useFetch } from '../../../../helpers/hooks';
function ContactUs() {

    const [contact, getContact] = useFetch(fetchSinglePage, {}, false)

    useEffect(() => {
        getContact({
            slug: 'contact_us'
        })
    }, [])

    const jsonData = JSON.parse(contact?.content || '{}')

    return (
        <>
            <Breadcrumb title='Contact Us' />
            <Contact />
            <Mapp jsonData={jsonData} />
        </>
    );
}

export default ContactUs;
