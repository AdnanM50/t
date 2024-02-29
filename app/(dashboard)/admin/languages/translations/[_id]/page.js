"use client";
import React, { useEffect } from 'react';
import { fetchLanguage, fetchTranslations, postLanguage } from '../../../../../helpers/backend';
import { useAction, useFetch } from '../../../../../helpers/hooks';
import { Card, Form } from 'antd';
import PageTitle from '../../../../../../components/common/title';
import { HiddenInput } from '../../../../../../components/form/input';
import Button from '../../../../../../components/common/button';


const Translations = ({ params }) => {
    const [translations, getTranslations] = useFetch(fetchTranslations, {}, false)
    const [data, getData, { loading }] = useFetch(fetchLanguage, {}, false);

    useEffect(() => {
        if (params?._id) {
            getData({ _id: params?._id });
            getTranslations({ _id: params?._id });
        }
    }, [params]);

    useEffect(() => {
        if (translations) {
            let values = {}
            Object?.keys(translations?.translations ?? {})?.forEach(key => {
                values = {
                    ...values,
                    [params._id]: {
                        ...values[params._id],
                        [key]: {
                            value: translations?.translations[key],
                        }
                    }
                }
            })
            form.setFieldsValue(values);
        }
    }, [translations]);

    const [form] = Form.useForm();

    const keys = [
        { name: 'Dashboard' },
        { name: 'Admin Dashboard' },
        { name: 'Home' },
        { name: 'About' },
        { name: 'Contact' },
        { name: 'Settings' },
        { name: 'Countries' },
        { name: 'Languages' },
        { name: 'Translations' },
        { name: 'Add Country' },
        { name: 'Add Languages' },
        { name: 'Add Translation' },
        { name: 'Add Product' },
        { name: 'Add Customer' },
        { name: 'Add Order' },
        { name: 'Edit Country' },
        { name: 'Edit Languages' },
        { name: 'Edit Translation' },
        { name: 'Edit Product' },
        { name: 'Edit Customer' },
        { name: 'Edit Order' },
        { name: 'Name' },
        { name: 'Code' },
        { name: 'Currency' },
        { name: 'RTL' },
        { name: 'Submit' },
        { name: 'Update' },
        { name: 'Edit' },
        { name: 'Delete' },
        { name: 'View' },
        { name: 'Add' },
        { name: 'Save' },
        { name: 'Cancel' },
        { name: 'Actions' },
        { name: 'No' },
        { name: 'Yes' },
        { name: 'Profile' },
        { name: 'Wallet' },
        { name: 'Logout' },
        { name: 'Log in' },
        { name: 'Sign up' },
        { name: 'Email' },
        { name: 'About Us' },
        { name: 'Contact Us' },
        { name: 'Terms & Condition' },
        { name: 'Privacy Policy' },
        { name: 'Get User App On' },
        { name: 'Get Driver App On' },
        { name: 'Live Site' },
        { name: 'Categories' },
        { name: 'Users' },
        { name: 'Vehicle List' },
        { name: 'Currencies' },
        { name: 'Payment Methods' },
        { name: 'Subscription' },
        { name: 'Newsletter' },
        { name: 'Contacts' },
        { name: 'Other' },

    ];

    const handleSubmit = async values => {
        let translations = []
        Object.keys(values)?.forEach(lang => {
            Object.keys(values[lang])?.forEach(key => {
                translations.push({
                    // key: key,
                    // value : values[lang][key].value,
                    [key]: values[lang][key].value,
                })
            })
        })

        const translationsObject = {
            translations: Object.assign({}, ...translations)
        };

        return useAction(postLanguage, {
            _id: params._id,
            name: data?.name,
            code: data?.code,
            flag: data?.flag,
            ...translationsObject
        }, () => {
            getTranslations({ _id: params?._id });
        })
    }
    return (
        <>
            <PageTitle title="Translations" />
            <Card>
                <div className="card">
                    <div className="body">
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <table className="w-full">
                                <thead className='bg-slate-300'>
                                    <tr>
                                        <th className="px-4 py-2 text-start">English</th>
                                        <th className="px-4 py-2">
                                            {data?.name}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {keys?.map((key, index) => (
                                        <tr key={index} className='w-full'>
                                            <th className="bg-white pt-3 px-4 py-2 flex justify-start">{key?.name}</th>
                                            <td key={index} className="px-4 py-2">
                                                <HiddenInput
                                                    name={[params._id, key.name, 'type']}
                                                    initialValue={key.type}
                                                />
                                                <Form.Item
                                                    className="mb-0 w-full"
                                                    initialValue=""
                                                    name={[params._id, key.name, 'value']}>
                                                    <input
                                                        className="w-full border-gray-300 rounded-md"
                                                        style={{
                                                            border: '1px solid #ddd',
                                                            padding: '5px 5px'
                                                        }}
                                                    />
                                                </Form.Item>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

            </Card>

        </>
    );
};

export default Translations;