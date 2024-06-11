import React from 'react'
import data from '../data'
import Image from 'next/image';
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from 'next/link';


export async function generateMetadata({params}){
   const res = data;
    return{
        title:res[params.id-1].name
    }
}

export default function page({params}) {
    const id = params.id-1;
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
         <div className='w-screen py-5 px-5'>
            <Link href="/">
            <div className='flex items-center gap-5 text-xl'>
                <FaCircleArrowLeft/>
                <h2>กลับสู่หน้าหลัก</h2>
            </div>
        </Link>
        </div>

        <div className='w-[300px]'>
            <h1 className='text-2xl font-bold mb-5 text-center'>{data[id].name}</h1>
            <Image src={data[id].img} alt={data[id].name} width="300" height="300" className='mb-5 rounded-md shadow-lg'/>
            <h2 className='text-xl font-bold text-center pt-5'>ส่วนผสม</h2>
        </div>

        <div className='flex flex-wrap items-center justify-center'>
            {data[id].ingredients.map((menu)=>(
                <div key={data[id].name}>
                    <div className='w-[250px] h-[150px] flex flex-col items-center '>
                        <div className='w-[100px] h-[100px]'>
                            <Image src={menu.img} alt={menu.ingredient} width="100" height="100" className='w-full h-full object-contain'/>
                        </div>
                        <h3>{menu.ingredient}</h3>
                    </div>
                </div>
            ))}

        </div>

        <div className='flex flex-col justify-center items-center px-[20%] mt-5'>
            <h2 className='text-xl font-bold text-center py-5'>วิธีการทำ</h2>
            <div className='w-full'>
                {data[id].process.map((howto)=>(
                    <div key={howto.no}>
                        <h3 className='text-xl font-bold mb-5'> 
                            {howto.no} <span className='text-xl font-normal'>{howto.how}</span>
                        </h3> 
                    </div>
                ))}
             </div>
        </div>
      
    </div>
  )
}
