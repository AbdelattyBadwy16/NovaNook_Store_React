import React from 'react'

export default function Carousel() {
    
    return (

        <div id="top" className="p-20 h-[100vh] w-full bg-[url('/hero4.png')] bg-cover flex items-center">
            <div className='mb-10 tablet:w-[50%] w-[100%] '>
                <h3 className='laptop:text-[30px] tablet:text-[20px]'>Trade-in-offer!</h3>
                <h1 className='laptop:text-[70px] tablet:text-[50px] text-[30px] mb-5 font-bold '>Super value deals <span className='text-[#088178]'>on all products!</span> </h1>
                <h3 className='mb-10 text-gray-500'>Start your journy now !</h3>
                <a href='#item' className="text-xl p-5 text-[#088178] bg-[url('/button.png')] bg-cover rounded-lg hover:scale-[1.1]">Shop Now</a>
            </div>
        </div>

    )
}

