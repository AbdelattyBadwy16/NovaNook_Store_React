import React, { useEffect, useState } from 'react'
import { getOrders, updateOrder } from '../features/apiSupaBase';
import { useNavigate } from 'react-router';
import "./DashBord.css";

export default function DashBord() {
  const [data, setData] = useState([]);
  const [loop, setloop] = useState("");
  const navigate = useNavigate();
  useEffect(function () {
    async function fetch() {
      const res = await getOrders();
      setData(res);
    }
    fetch();
  }, [loop])

  function handelClick(id) {
    let time = prompt("Enter the arrivalTime :");
    if (time == "") return;
    updateOrder(id, time);
    setloop(time);
  }
  let i = 1;
  return (
    <div className='m-10 flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center'>
        <h1 className='title text-[50px] text-center m-10 font-bold mr-10'>ORDER DASHBORD</h1>
        <button className='bg-blue-500 text-white p-2 hover:scale-[1.1] rounded-md' onClick={() => navigate("/createitem")}>Insert New Item</button>
      </div>
      {/*this div for make table resbonsive and its content found in DashBord.css file */}
      <div className='cont'>
        <table className='tl m-auto w-[100px] bg-[#E3E6F3] rounded-lg shadow-2xl '>
          <thead>
            <tr className='border-b-2 border-gray-500'>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>id</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>Name</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>TOTALPRICE</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>AMOUNT</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>ADDRESS</th>
              <th className='st border-b-2 border-gray-500 p-5 text-xl font-bold'>Time</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>ArrivalTime</th>
              <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>State</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) =>
                <tr key={i} className='border-b-2 border-gray-500'>
                  <td className='border-b-2 border-gray-500 p-5'>{i++}</td>
                  <td className='border-b-2 border-gray-500 p-5'>{item.client}</td>
                  <td className='border-b-2 border-gray-500 p-5'>{item.totalPrice}</td>
                  <td className='border-b-2 border-gray-500 p-5'>{item.amount}</td>
                  <td className='border-b-2 border-gray-500 p-5'>{item.address}</td>
                  <td className='st border-b-2 border-gray-500 p-5'>{item.created_at}</td>
                  <td className='border-b-2 border-gray-500 p-5 text-xl font-bold text-green-500'>{item.state ? item.arrivalTime : <p className='text-red-500'>Not Yet</p>}</td>
                  <td className='border-b-2 border-gray-500 p-5'>{item.state ? "Running" : "Wating"} {item.state ? "" : <button onClick={() => handelClick(item.id)} className='text-white rounded-full ml-2 p-1 bg-blue-500'>+</button>}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
