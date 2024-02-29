'use client';
import React, { useEffect } from 'react';
import { Card, Form, message } from 'antd';
import { useI18n } from '../../../../../providers/i18n';
import { useFetch } from '../../../../../helpers/hooks';
import { fetchSinglePage, postPage } from '../../../../../helpers/backend';
import { HiddenInput } from '../../../../../../components/form/input';
import TextEditor from '../../../../../../components/form/editor';
import Button from '../../../../../../components/common/button';

const PrivacyPage = ({ slug }) => {
    const [form] = Form.useForm();
    const i18n = useI18n()

    const [page, getPage] = useFetch(fetchSinglePage, {}, false);

    useEffect(() => {
        getPage({ slug: slug });
        if (page) {
            form.setFieldsValue({
                ...page,
            });
        }
    }, [page?.slug]);


    return (
        <div>
            <Card>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={(values) => {
                        {
                            let formData = new FormData();
                            if (values?._id) {
                                formData = {
                                    id: page?._id,
                                    title: page?.title,
                                    slug: page?.slug,
                                    content: values.content,
                                    content_type: 'text',
                                };
                            }
                            else {
                                formData = {
                                    title: 'Privacy Policy',
                                    content: values.content,
                                    content_type: 'text',
                                };
                            }

                            values?._id ? postPage(formData).then((res) => {
                                if (res?.error === false) {
                                    message.success(res?.msg);
                                    getPage({ slug: slug });
                                }
                            }) :

                                postPage(formData).then((res) => {
                                    if (res?.error === false) {
                                        message.success(res?.msg);
                                        getPage({ slug: slug });
                                    }
                                });
                        }
                    }}
                >
                    <HiddenInput name="_id" />
                    <HiddenInput name="slug" />
                    {/* <FormInput label="Title" name="title" required /> */}
                    <Form.Item
                        name="content"
                        label="Content"
                        style={{
                            border: "1px solid #F1EDFF",
                            padding: "5px",
                            borderRadius: 10,
                        }}
                    >
                        <TextEditor />
                    </Form.Item>

                    <Button className="mt-2.5">{i18n.t('Submit')}</Button>
                </Form>
            </Card>

        </div>
    );
};

export default PrivacyPage;