import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='w-full text-xl text-center font-bold bg-[#088178]  py-5'>
                <a href='#top'>Bact To Top</a>
            </div>
            <div className='grid laptop:grid-cols-4 grid-cols-2 laptop:justify-around pt-10 pl-10 pr-10'>
                <div className='text-[20px] italic font-bold mb-[20px]'>
                    <div>
                        <span className='text-[30px] text-[#088178]'>N</span>ovaNook Store
                    </div>
                    <ul className='mt-[30px]'>
                        <li>Contact </li>
                        <li className='text-gray-400'><p href='#' className='text-[15px]'><span className='text-gray-700 text-[20px]'>Address :</span> Qena-Egypt</p></li>
                        <li className='text-gray-400'><p href='#' className='text-[15px]'><span className='text-gray-700 text-[20px]'>Phone :</span> +201101988596</p></li>
                        <li className='text-gray-400'><p href='#' className='text-[15px]'><span className='text-gray-700 text-[20px]'>Hours :</span> 10.00 - 18.00 , Man - Sat</p></li>
                    </ul>
                    <div>
                        <h6 className='mb-3'>Follow us</h6>
                        <div className='flex justify-between w-[55%]'>
                            <img src='/face.png' className='w-[30px] cursor-pointer'></img>
                            <img src='/insta.jpg' className='w-[30px] cursor-pointer'></img>
                            <img src='/in.png' className='w-[30px] cursor-pointer'></img>
                            <img src='/yout.png' className='w-[30px] cursor-pointer'></img>
                        </div>
                    </div>
                </div>
                <div className='mb-[20px]'>
                    <h1 className='text-xl font-bold'>Make Money with Us</h1>
                    <ul>
                        <li className='text-gray-400'><a href='#'>Sell products on NovaNook</a></li>
                        <li className='text-gray-400'><a href='#'>Sell on NovaNook Business</a></li>
                        <li className='text-gray-400'><a href='#'>Sell apps on NovaNook</a></li>
                        <li className='text-gray-400'><a href='#'>Become an Affiliate</a></li>
                        <li className='text-gray-400'><a href='#'>Advertise Your Products</a></li>
                        <li className='text-gray-400'><a href='#'>Host an NovaNook Hub</a></li>
                        <li className='text-gray-400'><a href='#'>See More Make Money with Us</a></li>
                    </ul>
                </div>
                <div className='mb-[20px]'>
                    <h1 className='text-xl font-bold'>NovaNook Payment Products</h1>
                    <ul>
                        <li className='text-gray-400'><a href='#'>NovaNook Business Card</a></li>
                        <li className='text-gray-400'><a href='#'>Shop with Points</a></li>
                        <li className='text-gray-400'><a href='#'>Reload Your Balance</a></li>
                        <li className='text-gray-400'><a href='#'>NovaNook Currency Converter</a></li>
                        <li className='text-gray-700 mt-6 mb-2'>Secured Payment Gateways</li>
                        <img src="/pay.png"></img>
                    </ul>
                </div >
                <div className='mb-[20px]'>
                    <h1 className='text-xl font-bold'>Let Us Help You</h1>
                    <ul>
                        <li className='text-gray-400'><a href='#'>Let Us Help You</a></li>
                        <li className='text-gray-400'><a href='#'>Your Account</a></li>
                        <li className='text-gray-400'><a href='#'>Your Orders</a></li>
                        <li className='text-gray-400'><a href='#'>Shipping Rates & Policies</a></li>
                        <li className='text-gray-400'><a href='#'>Returns & Replacements</a></li>
                        <li className='text-gray-400'><a href='#'>Help</a></li>
                    </ul>
                </div>

            </div>
            <div className=' text-center p-5'>
                © 1996-2023, NovaNook.com, Inc. or its affiliates @Abdelatty_Badwy
            </div>
        </div>
    )
}
