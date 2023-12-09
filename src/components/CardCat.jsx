import React from 'react'
import { useNavigate } from 'react-router';

export default function CardCat({ item }) {

  const { name, image, description } = item;
  const navigate = useNavigate();
  function handelClick() {
    navigate(`/items/${item.id}`)
  }
  return (
    <li onClick={handelClick} className='cursor-pointer flex md:flex-row flex-col gap-3 border-2 rounded-md hover:scale-[1.1] items-center justify-center'>
      <img src={image} className='w-[100%] md:w-[50%] h-[200px] rounded-lg' ></img>
      <div className='flex flex-col items-start justify-start'>
        <div className='mr-2 mb-2 mt-2'>
          <h2 className='text-[25px] font-bold uppercase '>{name}</h2>
          <p className='italic text-gray-500'>{description}</p>
        </div>
        <div className='flex justify-center items-center w-[100%]'>
          <button className='text-xl hover:bg-[#088178] text-[#088178] transition-all duration-300 p-2 rounded-md hover:text-gray-50'>Shop Now</button>
        </div>
      </div>
    </li>
  )
}
