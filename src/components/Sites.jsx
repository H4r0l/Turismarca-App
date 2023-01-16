import React from 'react'

import Mountain from '../assets/Mountain.svg'

const Sites = (props) => {

  const {setShowMap, newUrl} = props;

  const site1 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!4v1673858920296!6m8!1m7!1sCAoSLEFGMVFpcFBPdG9RZ2FFWlJkRHlEWlVYeV8tUmpTVnl3am8xc3hucmtlY01S!2m2!1d5.0118637!2d-74.2036209!3f172.00664146465007!4f-34.38467020169242!5f0.7820865974627469')
    setShowMap(true)
  }
  const site2 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!4v1673859410775!6m8!1m7!1suZZ-WVHWn6Er7tDUaliiQA!2m2!1d5.002116945464127!2d-74.13375421260024!3f226.74687765726333!4f20.359927736552734!5f0.7820865974627469')
    setShowMap(true)
  }
  const site3 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!4v1673881469304!6m8!1m7!1sCAoSLEFGMVFpcE5VbVM0Sk81R05pWDZ2S2ZBUDdEeEpxZWxHb3FDQ2tSdjFhWEVB!2m2!1d5.0036879!2d-74.1818237!3f14.466837444185895!4f5.4922529894706!5f0.7820865974627469')
    setShowMap(true)
  }

  return (
    <div className='p-2 mx-3  mt-3 flex justify-center bg-gray-700 rounded-md bg-Tours bg-cover bg-center opacity-85 md:w-2/5 lg:w-1/4 lg:h-2/4'>
    <div className='flex flex-col'>
      <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-0.5 px-2 shadow-2xl'>
        <h1 className='text-Alata text-4xl font-bold text-center '>Sitios Turisticos</h1>
      </div>
      <div className='h-auto scroll-smooth scrollbar-thin scrollbar-thumb-emerald-800 scrollbar-track-emerald-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>

        <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-4 py-2 px-8 flex justify-between shadow-xl w-auto gap-10 '>
              <h1 className='text-Alata text-2xl leading-none py-2 font-bold'>Cerro El Tablazo</h1>
            <button onClick={site1}>
            <img src={Mountain} alt="" className='animate-pulse animate-infinite animate-delay-200 animate-ease-in-out '/>
            </button>
          </div>
          <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-4 py-1 px-8 flex justify-between shadow-xl w-auto gap-10 '>
              <h1 className='text-Alata text-2xl leading-none py-2  font-bold'>Parque La Ferrería</h1>
              <button onClick={site2}>
            <img src={Mountain} alt="" className='animate-pulse animate-infinite animate-delay-300 animate-ease-in-out'/>
            </button>
          </div>
          <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-4 py-2 px-8 flex justify-between shadow-xl w-auto gap-10 '>

              <h1 className='text-Alata text-2xl  font-bold'>Lago Arce</h1>
            <button onClick={site3}>
            <img src={Mountain} alt="" className='animate-pulse animate-infinite animate-delay-400 animate-ease-in-out'/>
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Sites
