import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { clearCart, getCart, getCartLength } from '../features/cart/cartSlice';
import { addEmail, addName, addPassword, addPhone, addSearch, getName } from '../features/user/userSlice';
import { fetchItems } from '../features/apiSupaBase';
export default function Navbar() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const name = useSelector(getName);
  const [term, setTerm] = useState();
  const [data, setData] = useState();
  const isAdmin = (localStorage.getItem('email') != "" && localStorage.getItem('email') != "admin@test.com");
  const id = useParams();
  console.log(id);
  function handleClick() {
    navigate("/cart");
  }
  const dispatch = useDispatch();
  const len = useSelector(getCart);
  function handleLogout() {
    dispatch(addEmail(""));
    dispatch(addPassword(""));
    dispatch(addPhone(""));
    dispatch(addName(""));
    dispatch(clearCart());
    navigate("/login");
  }

  async function handlesearch(e) {

    e.preventDefault();
    const res = await fetchItems();
    const newRes = res.filter((item) => {
      let ok = 0;
      for (let i = 0; i <= item.name.length - term.length; i++) {
        let s = item.name.substr(i, term.length);
        if (s.toLowerCase() === term.toLowerCase()) {
          ok = 1;
          break;
        }
      }
      return ok;
    })
    console.log(newRes);
    setData(newRes);
    dispatch(addSearch(newRes));
    navigate("/items/100")
  }


  return (
    <nav className='h-[80px] flex justify-between items-center p-10 w-full z-50 top-0 border-b-2 sticky ' style={{ backgroundColor: '#E3E6F3', boxShadow: '0 5px 15px rgb(0,0,0,0.06)' }}>
      <div className=' italic w-[25%] flex justify-between items-center' onClick={() => { if (isAdmin) navigate(`${name == "admin" ? "dashbord" : "home"}`) }} >
        <p className='font-bold text-[20px]'><span className='text-[30px]  text-[#088178]'>N</span>ovaNook Store</p>
      </div>


      {
        name !== "admin" || name === "" ?
          <div className='flex items-center justify-between w-[50%]'>
            <form onSubmit={handlesearch} className='w-[100%] text-red-500'>
              {

                <input value={term} onChange={(e) => setTerm(e.target.value)} className='h-[40px] w-[90%] rounded-full p-5 mr-10' placeholder="Search NovaNock" type='text'></input>
              }
            </form>
          </div> : ""
      }
      {
        name === "" ? "" :
          <div className='flex m-5 items-center'>
            <ul className='flex justify-between'>
              {
                !isAdmin ?
                  <div className='flex'>
                    <li onClick={() => navigate("/dashbord")} className='mr-5 hover:text-blue-500'>Dashbord</li>
                    <li onClick={() => navigate("/home")} className='mr-2 hover:text-blue-500'>Home</li> </div> : ""
              }
            </ul>
            <h2 className='sm:block text-md hidden ml-5 mr-5'>hello, {name}</h2>
            <button onClick={handleLogout} className='cursor-pointer hover:text-blue-500'>logout</button>
          </div>
      }
      <div className='flex items-center'>
        <img onClick={() => { navigate("/orders") }} src="/order.webp" alt="icon" className=' md:w-[50px] w-[30px] mr-10 rounded-full cursor-pointer'></img>
        <img onClick={handleClick} className='cursor-pointer md:w-[50px] w-[30px] mr-3' src="/cart.png" alt="icon" ></img>

        <p>{cart.cart.length ? len.cartLength : ""}</p>
      </div>
    </nav>
  )
}
