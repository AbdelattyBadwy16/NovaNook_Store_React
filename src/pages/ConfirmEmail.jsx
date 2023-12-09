import React from 'react'
import { useSelector } from 'react-redux'
import { getEmail, getName } from '../features/user/userSlice'

export default function ConfirmEmail() {
  const email = useSelector(getName);
  return (
    <div className='h-[60vh] flex items-center justify-center'>
        <h1 className='text-center text-[50px] font-bold'>Please Confirm your email {email} .</h1>
    </div>
  )
}
