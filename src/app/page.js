'use client'
import React, { useState, useEffect } from 'react';
import data from './data'
import { FaAngleRight } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { GiSmallFire } from "react-icons/gi";
import RandomMenus from './RandomMenus';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';


export default function Page() {

  const [openRandom, setOpenRandom] = useState(false);

  const [search,setSearch] = useState('');
  const [type,setType] = useState('')
  const [filteredData,setFilteredData] = useState(data)
  
  const handleChange = (e) => {
    const searchData = e.target.value;
    setSearch(searchData);
  };

  const findMenus = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    if (type === e.target.value) {
      setType('');
    }
  };

  useEffect(() => {
    const filterItems = data.filter((item) => item.name.includes(search));
    setFilteredData(filterItems);
  }, [search]);

  useEffect(() => {
    const findItems = data.filter((item) => item.type.includes(type));
    setFilteredData(findItems);
  }, [type]);
  
  const randomMenu = () => {
      setOpenRandom(true);
  };

  return (
    <div className='relative'>   
    {/* ----------------------------------Navbar---------------------------------------------*/}
    <div className='w-full px-10 sm:px-20 py-8 flex items-center justify-between flex-wrap'>
        <a href='/'>
            <div className='flex'>
                <div className='text-4xl pr-2 hover:fire-text-orange'>
                    <GiSmallFire className='fire text-[#FF1900]' />
                    <PiBowlFoodDuotone />
                </div>
            
            <div className='text-2xl font-bold hidden sm:block'>
                <h1 className='text-center'>อาหาร<br />ร้อนร้อน</h1>
            </div>
            </div>
        </a>

        <div className='container'>
            <form onChange={handleChange} className='search-container relative'>
                <input type='text' placeholder='พิมพ์เพื่อค้นหาเมนู' className='input' />
                <CiSearch className='search__icon' />
            </form>
        </div>

       <div className='w-full md:w-[300px] lg:w-[500px] flex justify-between items-center mt-10 md:mt-0 py-2 bg-[#D6E5F7] rounded-full'>
            <button onClick={randomMenu} className='random-btn'><span className='button_top'>สุ่มเมนู</span></button>
            <button onClick={findMenus} value='ต้ม' className='py-5 px-5 rounded-full hover:bg-[#67AAED] hover:text-white'>ต้ม</button>
            <button onClick={findMenus} value='ผัด' className='py-5 px-5 rounded-full hover:bg-[#67AAED] hover:text-white'>ผัด</button>
            <button onClick={findMenus} value='แกง' className='py-5 px-5 rounded-full hover:bg-[#67AAED] hover:text-white'>แกง</button>
            <button onClick={findMenus} value='ทอด' className='py-5 px-5 rounded-full hover:bg-[#67AAED] hover:text-white'>ทอด</button>
            <button onClick={findMenus} value='เส้น' className='py-5 px-5 rounded-full hover:bg-[#67AAED] hover:text-white'>เส้น</button>  
       </div>
      </div>
      {openRandom ? <RandomMenus openRandom={openRandom} setOpenRandom={setOpenRandom} /> : ''}

      {/* ----------------------------------Card---------------------------------------------*/}

      <h2 className='w-full text-center my-5 text-2xl font-bold'>{type === '' ? 'เมนูอาหารทั้งหมด' : `อาหารประเภท` + type}</h2>
      <div className='flex flex-wrap items-center justify-center gap-10 my-10'>
        {filteredData.map((menus) => (
          <div key={menus.name} className='w-[200px] h-[300px] flex flex-col items-center justify-between border-2 rounded-xl hover:translate-y-[-1.5rem] transition-transform duration-300  shadow-md'>
            <Image src={menus.img} alt={menus.name} width="300" height="300" className='rounded-t-xl h-[50%] w-full object-cover' /> 
            <h1 className='text-xl'>{menus.name}</h1>

            <div>
              <h2 className='bg-[#D6E5F7] rounded-md px-5'>ประเภท : {menus.type}</h2>
            </div>

            <a href={`/${menus.id}`} className='hover:text-red-500 mb-2 flex items-center gap-2'>วิธีการทำ<FaAngleRight /></a>
          </div>
        ))}
      </div>
    </div>
  );
}
