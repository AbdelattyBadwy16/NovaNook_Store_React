import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from '../features/cart/cartSlice'
import { insertOrder } from '../features/apiSupaBase';
import { getName } from "../features/user/userSlice"
import { useNavigate } from 'react-router';

export default function GetOrder() {
  let data = useSelector(getCart);
  data = data.cart;
  const name = useSelector(getName)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const userName = localStorage.getItem('name');
  let totalPrice = 0;
  async function handleClick() {
    if (!address) {
      alert("Please Enter Your Address .");
      return;
    }
    let len = localStorage.getItem("length");
    insertOrder(len, totalPrice , name, address );
    dispatch(clearCart());
    localStorage.setItem('length', 0);
    navigate("/orderdone");
  }
  const dd = new Date();
  return (
    <div className='p-10  bg-[#E3E6F3] shadow-2xl border-sloid rounded-sm m-10 w-full ml-auto mr-auto'>

      <div className='flex lg:flex-row flex-col justify-between items-center'>
        <div className='w-[40%]'>
          <h1 className='font-bold'>NovaNock Store</h1>
          <h2>(132)12645-415</h2>
          <div className='mt-2 flex lg:mb-0 mb-5'>
            <p className='mr-5'>Date :</p>
            <div>
              {dd.getDay()}-
              {dd.getMonth()}-
              {dd.getFullYear()}
            </div>
          </div>
        </div>
        <div className='flex justify-between lg:flex-row flex-col items-center'>
          <div>
            <div className='mr-10'>
              {
                data.map((item) => {
                  totalPrice += (item.item.price * item.count);
                  return <li key={item.item.id} className='text-sm flex justify-between'>
                    <div>
                      {item.item.name}---<span className='text-red-500 text-md font-semibold ml-5'>{item.item.price}$</span>
                    </div>
                    <p className='ml-5'>
                      {item.count}-
                    </p>
                  </li>
                })
              }
            </div>

          </div>
          <div className='w-[20%] lg:block hidden'>
            <p className='font-bold'>1001</p>
            <p>00-00-0000</p>
          </div>
        </div>

      </div>
      <div className='flex items-center mt-10 lg:flex-row flex-col justify-between'>
        <div >
          <label>Name : </label>
          <input disabled value={userName} type='text' className='border-b-2 lg:mt-0 mt-3 font-bold italic uppercase border-black bg-[#E3E6F3]'></input>
        </div>
        <div className='lg:mt-0 mt-5'>
          <label>Total Price : </label>
          <input value={totalPrice} disabled className='border-b-2 border-gray-950 h-auto text-red-600 w-[60px] font-bold text-right mr-2 bg-[#E3E6F3] italic'></input>$
        </div>
      </div>
      <div>
        <div className='flex items-center mt-5'>
          <label>Address : </label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='enter your address' className='border-b-2 border-black h-[30px] text-black font-bold p-2 lg:w-[25%] w-[60%] mr-2 bg-[#E3E6F3] italic' type='text'></input>
        </div>
      </div>
      <div className='flex justify-between mt-10 lg:flex-row flex-col '>
        <div>
          <lable>Owner : </lable>
          <input disabled value="NovaNock Store" type='text' className='border-b-2 text-[30px] border-black bg-[#E3E6F3]' style={{fontFamily:"Ephesis"}}></input>
        </div>
        <div>
          <lable>Client : </lable>
          <input disabled type='text' value={name} className='border-b-2 font-Ephesis text-[30px] border-black bg-[#E3E6F3]' style={{fontFamily:"Ephesis"}}></input>
        </div>
        <button onClick={handleClick} className='bg-[#E3E6F3] text-red-800 p-3 rounded-md hover:scale-[1.1] mt-10 font-bold'>Order Now</button>
      </div>
     
    </div>
  )
}
