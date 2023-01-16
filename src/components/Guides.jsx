import React from 'react'

const Guides = () => {
  return (
    <div className='xl:w-1/5 xl:absolute 2xl:bottom-[38%] 2xl:left-[36%] xl:bottom-[3%] xl:left-[37%] '>
          <div className='p-2 mx-3  mt-3 bg-gray-700 rounded-md bg-Guide bg-cover shadow-xl shadow-gray-500  bg-center opacity-85 mb-4'>
    <div className='flex flex-col'>
      <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-0.5 px-2 shadow-2xl'>
        <h1 className='text-Alata text-4xl font-bold text-center '>Guias</h1>
      </div>
      <div className='h-auto scroll-smooth scrollbar-thin scrollbar-thumb-emerald-800 scrollbar-track-emerald-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>

        <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-4 py-2 px-8 flex justify-between shadow-xl w-auto gap-10 '>
              <span className='animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out font-Alata italic font-black text-xl leading-none text-center py-2'>"Aun estamos trabajando en esta sección"</span>
          </div>
          
          
      </div>
    </div>
  </div>
    </div>
  )
}

export default Guides
