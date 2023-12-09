import React from 'react'
import { useNavigate } from 'react-router'

export default function OrderDone() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center m-10 h-[60vh]'>
            <h1 className='text-[50px] font-bold pb-5'>Order Done Successfully .</h1>
            <div className='flex justify-between'>
                <button onClick={()=>navigate("/orders")} className='mr-10 bg-orange-500 p-2 rounded-xl hover:scale-[1.1]'>View Orders</button>
                <button onClick={()=>navigate("/home")} className='bg-orange-500 p-2 rounded-xl hover:scale-[1.1]'>Get Home</button>
            </div>

        </div>
    )
}
