"use client"
import React, { useEffect, useState } from 'react'
import FrontTable from '../../common/fronTable'
import { useFetch } from '../../../app/helpers/hooks'
import { agentContactDelete, agentContactDetail, agentContactList } from '../../../app/helpers/backend'
import { Modal } from 'antd'

const AgentContact = () => {
    const [show, setShow] = useState(false)
    const [contact, getContact, { loading }] = useFetch(agentContactList)
    const [contactDetail, getContactDetail] = useFetch(agentContactDetail)

    const columns = [
        {
            dataField: 'name',
            text: 'Name',
            formatter: (name) => <>{name}</>,
        },
        {
            dataField: 'subject',
            text: 'Subject',
            formatter: (subject) => <>{subject}</>,
        }
    ]

    return (
        <div>
            <FrontTable columns={columns} data={contact?.docs} noActions={false} onView={
                (data) => {
                    setShow(true)
                    return getContactDetail({ _id: data?._id })
                }
            } indexed={true} onDelete={agentContactDelete} onReload={getContact} loading={loading}

            ></FrontTable>
            <Modal open={show} onCancel={() => {
                setShow(false)
                getContact()
            }} footer={null}>
                <div>
                    <h3>Name: {contactDetail?.name}</h3>
                    <h3>Email: {contactDetail?.email}</h3>
                    <h3>Subject: {contactDetail?.subject}</h3>
                    <p>Message: {contactDetail?.message}</p>
                </div>
            </Modal>
        </div>
    )
}

export default AgentContact