import React, { useEffect, useState } from 'react'
import { fetchItemComments, fetchSpecificItem, insertComment } from '../features/apiSupaBase';
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';
import Stars from "../components/Stars"
import { useDispatch } from 'react-redux';
import Comment from '../components/Comment';
import { addItem } from '../features/cart/cartSlice';

export default function Item() {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoding] = useState(false);
    const [adding, setAdding] = useState(false);
    const [data, setData] = useState([{ name: "g", image: "t", description: '1', price: '1' }]);
    const [comments, setComments] = useState([]);

    useEffect(function () {
        async function fetch() {
            setIsLoding(true);
            try {
                const data = await fetchSpecificItem(id);
                const com = await fetchItemComments(id);
                setData(data);
                setComments(com);
            } catch {
                throw new Error("Faild to fetch data");
            } finally {
                setIsLoding(false);
            }
        }
        fetch();
    }, [id, adding])
    const dispatch = useDispatch();
    function handleClick() {
        console.log(count)
        dispatch(addItem({ item: data[0], count: count }));
    }

    function handelCommentSubmet() {
        if (comment == "") return;
        let userId = localStorage.getItem('id');
        let name = localStorage.getItem('name');
        insertComment(userId, name, comment, id, rate);
        setAdding(comment);
        setComment("")
        setRate(0);
    }


    const { image, name, description, price, rating, isDiscount, discount, amount } = data[0];
    const newPrice = price - (price * (discount / 100));
    
    return (
        <>
            {isLoading ? <Spinner></Spinner> :
                <div className='p-20 flex  w-[100%] justify-between flex-col'>
                    <div >
                        <div className='flex justify-center flex-col items-center mb-10'>
                            <img src={image} className='w-[500px] h-[400px] mb-5 mr-5'></img>
                            <h3 className='uppercase font-bold text-[30px]'>{name}</h3>
                        </div>
                        <div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='mb-5 text-[50px] font-bold'>Product Details :</p>
                                    <p>amount : {amount}</p>
                                </div>
                                <h5 className='uppercase font-semiblod w-[100%]'>{description}</h5>
                            </div>
                            <div className='flex items-center justify-between mt-5'>
                                {
                                    !isDiscount ?
                                        <div className='text-xl font-bold '>Price : {price}$</div> :
                                        <div>
                                            <p className='mb-5'>Discount : {discount}%</p>
                                            <p className='text-xl font-bold'><span className='underline line-through text-red-500 m-4'>{price}$</span>${parseInt(newPrice)}</p>
                                        </div>
                                }
                                <div className='flex items-center'>
                                    <Stars len={rating}></Stars>
                                    <h1 className='ml-2'>{rating}</h1>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <label>Count : </label>
                                    <input onChange={(e) => {
                                        if (e.target.value <= 0) setCount(1);
                                        else
                                            setCount(e.target.value)
                                    }
                                    } value={count} type='number' className='rounded-sm border-2 border-gray-500 w-10 h-10 mr-5 p-1'></input>
                                </div>
                                <button className='my-5 bg-[#088178] p-5 rounded-md hover:scale-[1.1] text-gray-50' onClick={handleClick}>Add to cart !</button>
                            </div>

                            <div>
                                <h1 className='font-bold'>Comments :</h1>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <input onChange={(e) => { setComment(e.target.value) }} value={comment} type="text" className="border-2 w-[80%] p-2 border-gray-500 rounded-sm"></input>
                                        <input onChange={(e) => {
                                            if (e.target.value > 5) setCount(5);
                                            else if (e.target.value < 0) setCount(0);
                                            else
                                                setRate(e.target.value)
                                        }} value={rate} className='border-2 border-gray-650 ml-5 text-gray-950 p-2 w-20' placeholder='rate' type='number'></input>
                                        <button onClick={handelCommentSubmet} className='bg-[#088178] ml-5 text-gray-50 p-3 rounded-md'>Add Comment</button>
                                    </div>
                                    {
                                        comments.map((item) => {
                                            return <Comment userid={item.userID} setAdding={setAdding} id={item.id} userName={item.user} description={item.description} rate={item.rate}></Comment>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            }
        </>
    )
}
