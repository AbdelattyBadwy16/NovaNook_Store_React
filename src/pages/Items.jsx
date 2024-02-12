import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CardItem from '../components/CardItem';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, getSearch } from '../features/user/userSlice';
import { fetchCategories, fetchSpecificCategorie, fetchSpecificItems, searchItems } from '../features/apiSupaBase';

export default function Items() {
  const { id } = useParams();
  const [Cat, setCats] = useState([]);
  const [data, setData] = useState([]);
  const [catName, setCatName] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  const search = useSelector(getSearch);
  const navigte = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;

    async function fetch() {
      try {
        setIsLoding(true);
        const res = await fetchSpecificItems(id);
        const cat = await fetchSpecificCategorie(id);
        setData(res);
        setCatName(cat[0].name);
      } catch {
        throw new Error("Faild to fetch data");
      } finally {
        setIsLoding(false);
      }
    }
    fetch();
  }, [id]);
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

  function handleClick(id) {
    dispatch(addSearch([]))
    navigte(`/items/${id}`);
  }
  return (
    <>

      <div>
        <div className='flex w-[100%'>
          <div className='w-[35%] p-5 pt-10 h-auto bg-[#E3E6F3]'>
            <h1 className='font-bold'>Categories:</h1>
            <ul className='list-disc'>
              {
                Cat.map((item) => <li className='m-5 cursor-pointer uppercase hover:text-blue-500' onClick={() => handleClick(item.id)}>{item.name}</li>)
              }
            </ul>
          </div>
          <div className='w-[70%] m-auto'>
            <h1 className='text-[40px] font-bold text-center my-10 uppercase italic'>{search === undefined || search?.length === 0 ? catName : "search"} <span className='text-orange-500'> CATEGORY</span></h1>

            {
              isLoading ? <Spinner></Spinner> :
                data?.length || search?.length ?
                  <ul className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-10'>
                    {
                      search === undefined || search?.length === 0 ?
                        data.map((item) => <CardItem item={item} key={item.id}></CardItem>) :
                        search.map((item) => <CardItem item={item} key={item.id}></CardItem>)
                    }
                  </ul> : <h1 className='text-[50px] italic'>No Item Found . </h1>
            }
          </div>
        </div>
        {/*Banner*/}
        <div className="bg-[url('/b1.jpg')] text-white h-[400px] bg-cover text-center flex justify-center items-center flex-col">
          <p className='sm:text-[30px] text-[20px]'>Repair Services</p>
          <h2 className='sm:text-[50px] text-[30px]'>Up to <span className='text-red-500 '>50% Off</span> - All Labtops & PC</h2>
          <button className='p-3 hover:bg-[#088178] hover:text-gray-100 transition-all duration-300 bg-gray-100 text-gray-950 rounded-md'>Explore More</button>
        </div>
      </div>
    </>
  )
}
