'use claint';
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import Button from '../../common/button';
import FormInput, { HiddenInput } from '../../form/input';
import MultipleImageInput from '../../form/multiImage';
import PhoneNumberInput from '../../form/phoneNumberInput';
import { useAction } from '../../../app/helpers/hooks';
import { agentProfileUpdate } from '../../../app/helpers/backend';
import { useRouter } from 'next/navigation';
import { useUser } from '../../../app/contexts/user';

const EditProfile = ({ setActive, active }) => {
    const [form] = Form.useForm();
    const { user, getUser } = useUser()
    const { push } = useRouter()
    console.log("🚀 ~ Setting ~ uaer:", user)

    useEffect(() => {
        form.setFieldsValue({
            ...user,
            image: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: user?.image || '',
                },
            ]
            ,
        })
    }, [user?._id])

    return (
        <Form form={form} layout="vertical" onFinish={async (values) => {
            return await useAction(agentProfileUpdate, {
                ...values,
                image: values?.image?.[0]?.originFileObj
            },
                () => user?.role === "agent" ? setActive('dashboard') : setActive('profile'),
            )
        }}>
            <HiddenInput name="_id" />
            <FormInput name="name" label="Name" />
            <FormInput name="email" label="Email" isEmail readOnly />
            <PhoneNumberInput name="phone" label="Phone Number" />
            {
                user?.role === "agent" && <>
                    <FormInput name="about" label="About" textArea />
                    <FormInput name="address" label="Address" />
                    <FormInput name="facebook" label="Facebook Link" />
                    <FormInput name="twitter" label="Twitter Link" />
                    <FormInput name="instagram" label="Instagram Link" />
                    <FormInput name="linkedin" label="Linkedin Link" />
                </>
            }
            <MultipleImageInput name="image" label={"Image"} />
            <Button className="mt-4" type="primary"> {"Submit"} </Button>
        </Form>
    );
}

export default EditProfile;
