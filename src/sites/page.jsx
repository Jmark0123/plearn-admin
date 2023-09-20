'use client'

import React from 'react'
import api from '@/app/api/members'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import styles from '@/styles/Home.module.css'

const LoginForm = () => {
    const [user,setUser] = React.useState({
        username:"",
        password:""
    })

    const router = useRouter()

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
            alert('user is created')
            router.push('/members')
           
        }
        catch(error){
            console.error('Error:', error);
            alert('user is already exist')
        }
        
      
  
    }
  return (
    
    <>
    <div className={styles.firepit}>
  <div className={styles.fire}>
    <div className={styles.flame}></div>
    <div className={styles.flame}></div>
    <div className={styles.flame}></div>
    <div className={styles.flame}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
    <div className={styles.spark}></div>
  </div>
</div>
<div id={styles.panda}></div>
	<div id={styles.street}></div>


    <div className='fixed flex flex-col'>
      <Image className={styles.plearnimg}
      src="/plearn.svg"
      width={0}
      height={0}
      alt="Picture of the author"
    />
      </div>
      <div className='absolute flex flex-col'>
      <Image className={styles.plearnimg1}
      src="/plearn3.svg"
      width={0}
      height={0}
      alt="Picture of the author"
    />
      </div>
      <div className=' absolute flex flex-col'>
      <Image className={styles.plearnimg2}
      src="/plearn1.svg"
      width={0}
      height={0}
      alt="Picture of the author"
    />
      </div>

      <div className='fixed flex flex-col'>
      <Image className={styles.plearnimg3}
      src="/plearn2.svg"
      width={0}
      height={0}
      alt="Picture of the author"
    />
      </div>
      <h5 className=' absolute flex flex-col text-4xl font-sans px-3 text-white not-italic drop-shadow-2xl  mt-[6rem] mr-[11rem]'>WELCOME TO</h5> 
      <h1 className='absolute flex flex-col text-5xl font-extrabold  text-green-700 drop-shadow-2xl mt-[6rem] ml-[16rem] animate-bounce	'>PLEARN</h1>
    <form onSubmit={addMembers} className='absolute flex flex-col  items-center w-64 p-4 rounded h-72 mt-[10rem]  gap-4'>
    
        <div className='flex flex-col w-full'>
        <Image className='absolute mt-[0.3rem]' 
      src="/login.png"
      width={12}
      height={12}
      alt="Picture of the author"
    />
            <label htmlFor="username" className='ml-[1.3rem]'>Username</label>
            <input onChange={handleChange}  name="username" type="text" id='username' placeholder='Enter username' className='px-2 py-3 text-black rounded outline-none	'/>
        </div>

        <div className='flex flex-col w-full'>
      <Image className='absolute mt-[0.4rem]'
      src="/password.png"
      width={12}
      height={12}
      alt="Picture of the author"
    />
            <label htmlFor="password" className='ml-[1.3rem]'>Password</label>
            <input onChange={handleChange} type="password" name='password' id='password' placeholder='Enter Password' className='px-2 py-3  text-black rounded outline-none' />
        </div>
        
        <input type="submit" value={'login'} className='z-50 bg-orange-500 text-white w-full py-3 rounded mt-5 cursor-pointer hover:bg-orange-700 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-orange ease-out hover:translate-y-1 transition-all rounded'/>
    </form>
    </>
    
  )
}

export default LoginForm