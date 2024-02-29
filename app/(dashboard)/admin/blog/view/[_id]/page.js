"use client";
import React, { useEffect } from 'react';
import { fetchBlog } from '../../../../../helpers/backend';
import { useFetch } from '../../../../../helpers/hooks';
import { useI18n } from '../../../../../providers/i18n';
import { DetailTable } from '../../../../../../components/common/table';

const AdminBlogView = ({ params }) => {
    const [data, getData] = useFetch(fetchBlog, {}, false);
    const i18n = useI18n()
    useEffect(() => {
        getData({ _id: params._id });
    }, [data?._id]);

    return (
        <div>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <DetailTable
                            title="Blog Details"
                            columns={[
                                { text: 'Title', dataIndex: 'title' },
                                { text: 'Category', dataIndex: 'category', formatter: (_, d) => d?.category?.name },
                                { text: 'Tags', dataIndex: 'tags', formatter: (_, d) => d?.tags?.map(d => d?.name).join(", ") },
                                { text: 'Details', dataIndex: 'details'},
                                { text: 'Popular Blog', dataIndex: 'add_to_popular', formatter: d => d ? <span className="text-success">Available</span> : <span className="text-danger">Unavailable</span> },
                                { text: 'Published', dataIndex: 'published', formatter: d => d ? <span className="capitalize">Published</span> : <span className="capitalize">Unpublished</span> },
                            ]}
                            data={data} />


                    </div>
                    <div>
                        <div className="border rounded-md p-4 bg-white shadow-md">
                            <h6 className="title">{i18n.t("Blog Image")}</h6>
                            <div className="body mt-2">
                                <div className="text-center mb-3" style={{ height: 300 }}>
                                    <img src={data?.image} style={{ height: '100%' }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlogView;