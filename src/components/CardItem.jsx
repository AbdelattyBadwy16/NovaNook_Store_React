import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addItem } from '../features/cart/cartSlice';
import Stars from './Stars';
import { fetchSpecificCategorie } from '../features/apiSupaBase';

export default function CardItem(item) {
    const { name, image, id, categoryID, rating, price } = item.item;
    const [cat, setCat] = useState("");
    const navigte = useNavigate();
    function handleClick() {
        navigte(`/item/${id}`);
    }

    function handleClick2() {
        dispatch(addItem({item : item.item,count: 1}));
    }

    useEffect(() => {
        async function getCat() {
            let data = await fetchSpecificCategorie(categoryID);
            setCat(data[0]?.name);
        }
        getCat();
    }, []);
    const dispatch = useDispatch();
    return (
        <>
            <li className='p-[10px 12px] border-2 p-5 cursor-pointer shadow-lg transition-all duration-300  hover:shadow-2xl rounded-lg'>
                <div onClick={handleClick} className='w-[100%]'>
                    <img src={image} className='w-[100%]  rounded-lg mb-3 h-[250px]' ></img>
                    <p className='text-[13px] text-gray-500'>{cat}</p>
                    <h1 className='text-[15px] uppercase mb-3 mt-5 h-[60px]'>{name}</h1>
                    <Stars len={rating}></Stars>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h4 className='text-[#088178] mt-5'>{price}$</h4>
                    </div>
                    <div className='border-2 text-center flex items-center justify-center hover:bg-[#088178] w-[15%] p-1 rounded-full bg-[#e8f6ea] '>
                        <img onClick={handleClick2} style={{ width: '30px' }} src="/cart.png"></img>
                    </div>
                </div>
            </li>
        </>
    )
}
