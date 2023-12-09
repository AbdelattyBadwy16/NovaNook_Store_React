import React, { useEffect, useState } from 'react'
import { fetchSpecificItems } from '../features/apiSupaBase';
import CardItem from '../components/CardItem';
import Spinner from '../components/Spinner';
export default function Similar({ id, itemID }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  useEffect(function () {
    async function fetch() {
      setIsLoding(true);
      try {
        const data = await fetchSpecificItems(id);
        setData(data);
      } catch {
        throw new Error("Faild to fetch data");
      } finally {
        setIsLoding(false);
      }
    }
    fetch();
  }, [])

  const FilterdData = [];
  let mn = data.length;
  if (mn > 4) mn = 4;
  for (let i = 0; i < mn; i++) {
    if (data[i]?.id != itemID  && data[i]!=undefined) FilterdData.push(data[i]);
    else mn++;
  }
  if(FilterdData.length==0)return;
  return (
    FilterdData.length ?
      <div div className='w-[100]' >
        <h2 className='text-center font-bold text-[50px] text-[#088178]'>Similar Product</h2>
        {
          isLoading && FilterdData.length ? <Spinner></Spinner> :
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
              {

                FilterdData.map((item) => {
                  return <CardItem key={item?.id} item={item}></CardItem>
                })
              }
            </div>
        }
      </div > : ""

  )
}
