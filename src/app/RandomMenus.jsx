import React from 'react'
import data from './data'
import { FaAnglesRight } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from 'next/image';

export default function RandomMenus({openRandom,setOpenRandom}) {

    const index = Math.floor(Math.random()*data.length)
    console.log(index)

    const closeRandom = () =>{
        setOpenRandom(false)
    }
  return (
    <div className='min-h-screen w-screen bg-red-50 absolute top-0 left-[0%] p-10'>
        <div className='h-full w-full relative'>
            <button onClick={closeRandom} className=' absolute top-0 right-0 text-4xl'><IoMdCloseCircleOutline/></button>
            
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold mb-10'>เมนูที่ได้</h1>
                <div className='w-[200px] h-[300px] flex flex-col items-center justify-between border-2 rounded-xl'>
                    <Image src={data[index].img} alt={data[index].name} width="300" height="300" className='rounded-t-xl h-[50%] w-full object-cover'/> 
                    <h1 className='text-xl'>{data[index].name}</h1>

                    <div>
                        <h2 className='bg-red-400 rounded-md px-5'>ประเภท : {data[index].type}</h2>
                    </div>

                    <a href={`/${data[index].id}`} className='hover:text-red-500 mb-2 flex items-center gap-2'>วิธีการทำ<FaAnglesRight/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
