import React from 'react'
import { ProductsData } from './ProductsData'
import { GrAddCircle } from "react-icons/gr";

const Products = () => {
  return (
    <div className='md:w-2/3 lg:w-2/6'>
    
      <ul className='p-2 mx-3  mt-3 bg-gray-700 rounded-md bg-Guides2 bg-cover shadow-xl shadow-gray-500  bg-center opacity-85 text-Alata text-black '>
      <div className='bg-gray-100 opacity-80 rounded-md my-3 mx-2 py-2 px-2 shadow-2xl'>
        <h1 className='text-Alata text-4xl font-bold text-center'>Recorridos</h1>
      </div>
        {ProductsData.map((item,index) => {
            return (
                <li key={index} className='text-xl bg-gray-100 text-black opacity-80 gap-3 rounded-md mb-3 mx-2 py-2 px-2 flex justify-between shadow-xl text-justify '>
                    <strong className='m-2'>
                        <h2 >{item.title}</h2>
                        
                        <span className='animate-wiggle-more text-2xl underline '>{item.price}</span> 
                        <br />
                        <br/>
                        <span>{item.description}</span>
                    </strong>
                    <button  className='sticky inset-0 text-3xl m-1'>
                    <a href={item.url}>
                    <GrAddCircle/>
                    </a>
                    </button>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Products
