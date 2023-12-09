import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import CardCart from '../../components/CardCart';
import { useNavigate } from 'react-router';

export default function Cart() {
    const data = useSelector(getCart);
    const navigate = useNavigate();
    let i = 1;
    return (
        <>
            <div>

                {data.cart.length ?
                    <div>
                        <ul  className='list-disc p-10 border-b-2 w-[80%] m-auto border-black'>
                            {
                                data.cart.map((item) => {
                                    return <CardCart i={i++} item={item.item} count={item.count} key={item?.item?.id || item?.id}></CardCart>
                                })
                            }
                        </ul>
                        <div className='flex items-center justify-center m-5'>
                        </div>
                        <div className='flex justify-center m-5 mb-10'>
                            <button onClick={() => navigate("/getorder")} className='text-xl font-semibold bg-[#088178] text-white p-5 rounded-lg hover:scale-[1.1]'>Order Now</button>
                        </div>
                    </div> : <div className='flex flex-col my-10 items-center'>
                        <h1 className='text-center my-10 text-[50px] font-bold'>No Products Found Click To Return .</h1>
                        <button onClick={() => navigate(-1)} className='text-[20px] font-semibold bg-[#088178] text-white w-[150px] rounded-lg p-3'>Return</button>
                    </div>
                }
            </div>
           
        </>
    )
}
