import React, { useEffect, useState } from 'react'
import CardCat from '../components/CardCat'
import PopItem from '../components/PopItem'
import Carousel from '../components/Carousel'
import { fetchCategories, fetctDiscountItems, fetctNewItems, searchItems } from '../features/apiSupaBase'
import Spinner from "../components/Spinner"
import Advantage from '../components/Advantage'
import CardItem from '../components/CardItem'
import { useDispatch } from 'react-redux'
import { addSearch } from '../features/user/userSlice'


export default function Home() {

  const [Cat, setCats] = useState([]);
  const [newItem, setNewItems] = useState([]);
  const [discountItem, setIsDiscount] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useDispatch();
  useEffect(function () {
    async function fetch() {
      await searchItems();
      setIsLoding(true);
      dispatch(addSearch([]));
      try {
        const data = await fetchCategories();
        setCats(data);
      } catch {
        throw new Error("Faild to fetch data");
      } finally {
        setIsLoding(false);
      }
    }
    fetch();
  }, [])

  useEffect(function () {
    async function fetch() {
      setIsLoding(true);
      try {
        const data = await fetctNewItems();
        setNewItems(data);
      } catch {
        throw new Error("Faild to fetch data");
      } finally {
        setIsLoding(false);
      }
    }
    fetch();
  }, [])

  useEffect(function () {
    async function fetch() {
      setIsLoding(true);
      try {
        const data = await fetctDiscountItems();
        setIsDiscount(data);
      } catch {
        throw new Error("Faild to fetch data");
      } finally {
        setIsLoding(false);
      }
    }
    fetch();
  }, [])




  return (
    <>
      <Carousel></Carousel>
      <Advantage></Advantage>
      {
        isLoading ? <Spinner></Spinner> :
          <>
          
            {/*new Items*/}
            <div >
              <div className='text-center'>
                <h2 className='text-[70px] font-bold text-center text-[#088178]' id="item">New Arrival</h2>
                <p className='text-gray-500'>Summer Collection New Modern Items .</p>
              </div>
              <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 m-10' >
                {
                  newItem.map((item) => <CardItem item={item} key={item.id}></CardItem>)
                }
              </ul>
            </div>

            {/*Banner*/}
            <div className="bg-[url('/b1.jpg')] text-white h-[400px] bg-cover text-center flex justify-center items-center flex-col mb-[50px] mt-[50px]">
              <p className='sm:text-[30px] text-[20px]'>Repair Services</p>
              <h2 className='sm:text-[50px] text-[30px]'>Up to <span className='text-red-500 '>50% Off</span> - All Labtops & PC</h2>
              <button className='p-3 hover:bg-[#088178] hover:text-gray-100 transition-all duration-300 bg-gray-100 text-gray-950 rounded-md'>Explore More</button>
            </div>

            {/*Categories*/}
            <div className='text-center mb-20'>
              <h2 className='text-[70px] font-bold text-center text-[#088178]' id="item">Categories</h2>
              <p className='text-gray-500'>Differnt Categories and more interest Things.</p>

              <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10 m-10' >
                {
                  Cat.map((item) => <CardCat item={item} key={item.id}></CardCat>)
                }
              </ul>
            </div>


          </>
      }
    </>

  )
}
