import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';

export default function CardCart({ item, count ,i}) {
    const { image, name, id, price } = item;
    const dispatch = useDispatch();
    return (

        <div className='flex text-center justify-between lg:flex-row flex-col items-center lg:w-[80%] w-[80%] lg:border-0 border-2 border-black mt-5 mb-5 p-5 m-auto'>
            <div>
                <p>{i}-</p>
            </div>
            <div className='lg:w-[20%] flex justify-center'>
                <img src={image}  className='lg:w-[60%] w-[30%] lg:mb-0 mb-5 rounded-lg  h-[50%]' ></img>
            </div >
            <div className='lg:w-[20%] lg:mb-0 mb-5'>
                <h1 className='text-[13px] uppercase h-[60px]'>{name}</h1>
            </div>
            <div className='lg:w-[20%] lg:mb-0 mb-5'>
                <h4 className='text-[#088178] '>{price}$</h4>
            </div>
            <div className='lg:w-[20%] lg:mb-0 mb-5'>
                <input type="text" value={count} disabled className='h-[30px] rounded-sm w-[50px] p-5 bg-[#E3E6F3]'></input>
            </div>
            <div className='lg:w-[20%] lg:mb-0 mb-5'>
                <h4 className='text-[#088178] '>{price * count}$</h4>
            </div>
            <div  className='border-2 lg:mb-0 mb-5 lg:p-1 text-[#088178] w-auto text-center hover:bg-[#088178]  rounded-md p-3'>
                <button onClick={() => dispatch(deleteItem(id))} className='text-xl hover:text-gray-50'>Delete Item</button>
            </div>
        </div>

    )
}
