'use client'

import React from 'react'
import api from '@/app/api/members'
const LoginForm = () => {
    const [user,setUser] = React.useState({
        username:"",
        password:""
    })

  const  handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const addMembers = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post('/api/auth/register',user);
            console.log('Response:', response.data);
        }
        catch(error){
            console.error('Error:', error);
        }
  
    }
  return (
    <>

    <form onSubmit={addMembers} className='flex flex-col  items-center w-64 p-4 rounded h-72 bg-gray-700 gap-4'>
        <div className='flex flex-col w-full'>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange}  name="username" type="text" id='username' placeholder='Enter username' className='px-2 py-3 text-black'/>
        </div>

        <div className='flex flex-col w-full'>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="text" name='password' id='password' placeholder='Enter Password' className='px-2 py-3  text-black' />
        </div>
        
        <input type="submit" value={'login'} className='bg-orange-500 text-white w-full py-3 rounded mt-5 cursor-pointer hover:bg-orange-700'/>
    </form>

    </>
  )
}

export default LoginForm