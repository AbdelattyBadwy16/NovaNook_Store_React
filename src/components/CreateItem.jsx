import React, { useEffect, useState } from 'react'
import { fetchCategories, insertItem } from '../features/apiSupaBase';

export default function CreateItem() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [category, setCat] = useState(3);
    const [image, setImage] = useState([]);
    const [description, setDesc] = useState("")

    useEffect(function () {
        async function fetch() {
            const res = await fetchCategories();
            setData(res);
        }
        fetch();
    }, [])


    function clearData() {
        setName("");
        setPrice(0);
        setDiscount(0);
        setCat(3);
        setImage([]);
        setDesc("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        insertItem(name, price, discount, category, image, description);
        alert("item added successfully .");
        clearData();
    }

    return (
        <div className='flex flex-col items-center justify-center m-20'>
            <form className='inp shadow-2xl bg-[#E3E6F3] rounded-lg text-blue-500 p-10' onSubmit={handleSubmit}>
                <h1 className='font-bold text-[50px] uppercase mb-5'>Add New Items...</h1>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>name : </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-blue-500  rounded-lg p-1' type='text'></input>
                </div>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>price : </label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-blue-500 p-1 rounded-lg'></input>
                </div>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>discount(percent) : </label>
                    <input value={discount} onChange={(e) => setDiscount(e.target.value)} className='border-2 border-blue-500 p-1 rounded-lg'></input>
                </div>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>Category : </label>
                    <select value={category} onChange={(e) => setCat(e.target.value)} className='bg-white-500 p-2 rounded-lg' >
                        {
                            data.map((item) =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>description : </label>
                    <textarea value={description} onChange={(e) => setDesc(e.target.value)} className='border-2 border-blue-500 p-1 rounded-lg'></textarea>
                </div>
                <div className='m-5 flex items-center justify-between'>
                    <label className='font-bold mr-5'>image : </label>
                    <input onChange={(e) => { setImage(e.target.files) }} type='file' className='border-2 border-blue-500 p-1 rounded-lg'></input>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='font-semibold text-xl border-2 hover:bg-blue-500 hover:text-gray-100 border-blue-500 p-2 rounded-lg'>Create Item</button>
                </div>

            </form>
        </div>
    )
}
