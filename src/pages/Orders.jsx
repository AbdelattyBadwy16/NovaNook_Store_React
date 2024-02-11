import React, { useEffect, useState } from 'react'
import { getUserOrders } from '../features/apiSupaBase';
import { useSelector } from 'react-redux';
import { getName } from '../features/user/userSlice';
import Spinner from '../components/Spinner';
import "./DashBord.css";
export default function Orders() {
    const name = useSelector(getName);
    const [isLoading, setLoading] = useState(false);
    let [data, setData] = useState([]);
    useEffect(function () {
        async function fetch() {
            try {
                setLoading(true);
                const res = await getUserOrders(name);
                setData(res);
            } catch {
                throw new Error("Faild to Fetch Data");
            } finally {
                setLoading(false);
            }
        }
        fetch();
    }, [])

    let i = 1;
    return (
        isLoading ? <Spinner></Spinner> :
            data.length ?
                <div div className='m-10' >
                    <h1 className='text-[50px] text-center m-10 font-bold uppercase'>{name} ORDERS</h1>
                    <div className='cont'>
                        <table className='m-auto bg-[#E3E6F3] rounded-sm lg:w-[80%] md:w-[50%] sm:w-[30%] w-[20%] shadow-2xl'>
                            <tr className='border-b-2 border-gray-500'>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>id</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>TOTALPRICE</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>AMOUNT</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>ADDRESS</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>Time</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>ArrivalTime</th>
                                <th className='border-b-2 border-gray-500 p-5 text-xl font-bold'>State</th>
                            </tr>
                            {
                                data.map((item) =>
                                    <tr className='border-b-2 border-gray-500'>
                                        <td className='border-b-2 border-gray-500 p-5'>{i++}</td>
                                        <td className='border-b-2 border-gray-500 p-5'>{item.totalPrice}</td>
                                        <td className='border-b-2 border-gray-500 p-5'>{item.amount}</td>
                                        <td className='border-b-2 border-gray-500 p-5'>{item.address}</td>
                                        <td className='border-b-2 border-gray-500 p-5'>{item.created_at}</td>
                                        <td className='border-b-2 border-gray-500 p-5 text-xl font-bold text-green-500'>{item.state ? item.arrivalTime : <p className='text-red-500'>Not Yet</p>}</td>
                                        <td className='border-b-2 border-gray-500 p-5'>{item.state ? <p className='text-green-500'>Running</p> : <p className='text-red-500'>Wating</p>}</td>
                                    </tr>)
                            }
                        </table>
                    </div>
                </div > : <div style={{ textAlign: 'center', margin: '50px', fontSize: '150px' }}>
                    No order Have Yet .
                </div>

    )
}
