import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, login } from '../features/apiAuth';
import { useDispatch } from 'react-redux';
import { addEmail, addID, addName, addPassword, addPhone } from '../features/user/userSlice';
import './login.css';

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(addEmail(""));
    dispatch(addPassword(""));
    dispatch(addPhone(""));
    dispatch(addName(""));
    dispatch(addID(""));
  }, [])
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user || !pass) return;
    try {
      setIsLoading(true);
      const data = await login({ user, pass });
      if (!data.access_token) setError(true);
      else {
        setError(false);
        const res = await getUser(data.user.id);
        dispatch(addEmail(user));
        dispatch(addPassword(pass));
        dispatch(addPhone(res[0].phone));
        dispatch(addName(res[0].name));
        dispatch(addID(res[0].id));
        if (res[0].name !== "admin")
          navigate("/home");
        else navigate("/dashbord");
      }
    } catch {
      setError(true);
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='bg-blue-400 h-[100vh] flex justify-center items-center outline-none rounded-md'>
      <div className='parentDiv flex flex-row items-center justify-center outline-none bg-gray-50 rounded-lg shadow-2xl'>
        <img src="/login.jpg" className='logImg w-[500px] h-[500px]'></img>
        <form className='form p-5 m-10 w-[450px]' onSubmit={handleSubmit}>
          <h1 className='font-bold text-[30px] text-blue-500'>Welcome to NovaNock</h1>
          <h3 className='ppercase italic text-blue-500 mb-10'>Ship Smart Today</h3>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm'>
            <img src='/email.png' className='w-5 ml-3 mr-2'></img>
            <input disabled={isLoading} value={user} onChange={(e) => setUser(e.target.value)} className='p-1 w-[100%]' placeholder='Username or Email' type='text'></input>
          </div>
          <div className='m-5 flex items-center border-2 border-gray-200 rounded-sm'>
            <img src='/lock.png' className='w-5 ml-3 mr-2'></img>
            <input disabled={isLoading} type='password' value={pass} onChange={(e) => setPass(e.target.value)} className='p-1 w-[100%]' placeholder='Password'></input>
          </div>
          {
            error ?
              <div className='text-center mb-5'>
                <p className='text-xl uppercase text-red-500 font-semibold'>Wrong user or password</p>
              </div>
              : ""
          }
          <div className='flex items-center justify-between'>
            <Link to="/signin" className='hover:text-blue-500 text-md ml-5'>I don`t have account yet !</Link>
            <button className='font-semibold text-xl border-2 hover:bg-blue-500 hover:text-gray-100 text-blue-500 border-blue-500 p-2 rounded-lg'>{isLoading ? "loading..." : "login"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
