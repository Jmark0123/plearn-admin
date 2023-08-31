'use client'

import React from 'react'
import api from '@/app/api/members'
import { useEffect } from 'react'


const MembersPage = () => {


    const [members,setMembers] = React.useState([])
    
    const retrieveMember = async () => {
        const res = await api.get('/api/users')
        console.log(res)
        return res.data
    }

    useEffect(() => {
        const getAllMembers = async () => {
            const allMembers = await retrieveMember();
            if(allMembers) {
                setMembers(allMembers)
            }
        }
        getAllMembers();
    },[])
    
  return (
    <div>
        {members.map((val,i) => (
            <div key={i}>
                <p>{val.username}</p>
                <p>{val.createdAt}</p>
            </div>
        ))}
    </div>
  )
}

export default MembersPage