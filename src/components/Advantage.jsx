import React from 'react'

export default function Advantage() {
    const srcArr = [['features/f1.png', 'Free Shipping'], ['features/f2.png', 'Online Order'], ['features/f3.png', 'Save Money'], ['features/f4.png', 'Promotions'], ['features/f5.png', 'Happy Sell'], ['features/f6.png', 'F24/7 Support']];
    return (
        <div className='text-center my-20 items-center grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 place-items-center'>
            {
                srcArr.map((item) =>
                    <div key={item[0]} className='w-[180px] text-center p-5 shadow-md border-2 rounded-[4px] transition-all duration-500 m-[15px] hover:shadow-xl'>
                        <img src={item[0]} className='w-[800px] rounded-lg'></img>
                        <p className='mt-3 p-2 text-[15px] bg-[#fddde4] text-[#088178] font-bold'>{item[1]}</p>
                    </div>
                )
            }
        </div>
    )
}
