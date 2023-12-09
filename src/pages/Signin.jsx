
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserEmail, signin } from '../features/apiAuth';
import { insertUserData } from '../features/apiSupaBase';

export default function Signin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setemail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user || !pass || !phone || !email) return;
    try {
      setIsLoading(true);
      const res = await getUserEmail(email);
      if (res.length) {
        setError(true);
      } else {
        setError(false);
        const { id } = await signin({ user, pass, email, phone });
        insertUserData({ user, email, phone, id });
        navigate("/email");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] bg-blue-400 '>
      <div className='flex md:flex-row flex-col items-center justify-center w-[100%]'>
        <img src="/login.jpg" className='w-[500px] h-[500px]'></img>
        <form className='p-10 w-[500px] bg-gray-50 shadow-2xl flex flex-col items-center rounded-sm h-[500px]' onSubmit={handleSubmit}>
          <h1 className='font-bold text-[30px] text-blue-500 mb-5'>Sign In To Join To Our World...</h1>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm w-[80%]'>
            <img src='/user.png' className='w-5 ml-3 mr-2'></img>
            <input placeholder='Username' disabled={isLoading} value={user} onChange={(e) => setUser(e.target.value)} className='w-[100%]  p-1' type='text'></input>
          </div>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm w-[80%]'>
            <img src='/lock.png' className='w-5 ml-3 mr-2'></img>
            <input placeholder='Password' disabled={isLoading} type='password' value={pass} onChange={(e) => setPass(e.target.value)} className='w-[100%] p-1'></input>
          </div>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm w-[80%]'>
            <img src='/email.png' className='w-5 ml-3 mr-2'></img>
            <input placeholder='Email' disabled={isLoading} type='email' value={email} onChange={(e) => setemail(e.target.value)} className='w-[100%] p-1 '></input>
          </div>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm w-[80%]'>
            <img src='/phone.png' className='w-5 ml-3 mr-2'></img>
            <input placeholder='Phone' disabled={isLoading} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} className=' w-[100%] p-1 '></input>
          </div>
          {
            error ?
              <div className='text-center'>
                <p className='text-xl uppercase text-blue-500 font-semibold'>email has already sign in .</p>
              </div>
              : ""
          }
          <div className='flex items-center justify-between'>
            <Link to="/login" className='hover:text-blue-500 text-md'>I already have account !</Link>
            <button className='ml-5 font-semibold text-xl border-2 hover:bg-blue-500 text-blue-500 hover:text-gray-100 border-blue-500 p-2 rounded-lg'>{isLoading ? "loading..." : "Sign In"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
