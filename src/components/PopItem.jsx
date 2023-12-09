import React from 'react'
import { useNavigate } from 'react-router';

export default function PopItem({ item }) {
    const { name, image, price, discount } = item;
    const newPrice = price - (price * (discount / 100));
    const navigate = useNavigate();
    
    return (
        <li onClick={()=>navigate(`/item/${item.id}`)} className='flex flex-col items-center justify-between p-10 bg-gray-100 hover:scale-[1.1] cursor-pointer '>
            <h1 className='text-[30px] m-5'>{name}</h1>
            <img src={image} className='w-[500px] m-5' ></img>
            <p>Discount : {discount}%</p>
            <div className='flex flex-row items-center justify-between'>
                <p className='text-[25px]'>Price :</p>
                <p className='text-xl font-bold'><span className='underline line-through text-red-500 m-4'>{price}$</span>${parseInt(newPrice)}</p>
            </div>
        </li>
    )
}
