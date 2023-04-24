import React from 'react'
import Map from '../assets/Map.svg'
import restIcon from '../assets/rest-icon.svg'

const Restaurants = (props) => {
  
  const {setShowMap, newUrl} = props;

  const map1 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.059176582711!2d-74.17543180133241!3d4.929758234599986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407e5e27f86965%3A0xee139192c7ab0a92!2sBocaditos%20Paisas!5e0!3m2!1ses-419!2sco!4v1673853677150!5m2!1ses-419!2sco')
    setShowMap(true)
  }
  const map2 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.7682607111088!2d-74.17422737078049!3d4.927440499776425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407f61a0c1fb75%3A0x69539834a04157c7!2sCAFETERIA%20DO%C3%91A%20BLANCA!5e0!3m2!1ses-419!2sco!4v1673855393554!5m2!1ses-419!2sco"')
    setShowMap(true)
  }
  const map3 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.44178507038535!2d-74.17300995746731!3d4.928189734412773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407f2d4169114f%3A0x46af260b2328d8f3!2sEl%20Tablazzo%20Parrilla!5e0!3m2!1ses-419!2sco!4v1673855498260!5m2!1ses-419!2sco"')
    setShowMap(true)
  }
  const map4 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.3488898211684!2d-74.17498097775669!3d4.925928361193514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407f3661cc14a9%3A0x80e9b8292f01a8cc!2sEl%20Espa%C3%B1olete!5e0!3m2!1ses-419!2sco!4v1673855584916!5m2!1ses-419!2sco"')
    setShowMap(true)
  }
  const map5 = () => {
    newUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.6551880999754!2d-74.1731542661896!3d4.928219759560812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ec561602d111927!2sTaller-Caf%C3%A9%20Vintage!5e0!3m2!1ses-419!2sco!4v1673883718843!5m2!1ses-419!2sco')
    setShowMap(true)
  }
  
  return (
    <div className=' p-2 w-full mx-3  mt-3 flex justify-center bg-gray-700 rounded-md bg-Rest bg-cover md:w-2/4 lg:w-1/4 lg:h-1/2'>
      <div className='flex flex-col -mb-12 '>
        <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-0.5 px-2 shadow-2xl'>
          <h1 className='text-Alata text-4xl font-bold text-center '>Restaurantes</h1>
        </div>
        <div className='h-2/3 -mx-1 px-4 scroll-smooth scrollbar-thin scrollbar-thumb-teal-800 scrollbar-track-teal-200 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full '>
          <div className='bg-gray-100 opacity-80 gap-4 rounded-md mb-3 mx-2 py-2 px-2 flex justify-between shadow-xl text-center'>
              <img src={restIcon} alt="" />
                <h1 className='text-Alata text-2xl font-bold'>Bocaditos Paisas</h1>
              <button onClick={map1} >
              <img src={Map} alt="" className='animate-pulse animate-duration-400 animate-infinite animate-delay-150 animate-ease-in-out'/>
              </button>
            </div>
            <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-1 px-2 flex justify-between text-center'>
              <img src={restIcon} alt="" />
                <h1 className='text-Alata text-2xl leading-none font-bold my-0.5'>Cafetería <br/> Doña Blanca</h1>
                <button onClick={map2}>
              <img src={Map} alt="" className='animate-pulse animate-duration-400 animate-infinite animate-delay-200 animate-ease-in-out'/>
              </button>
            </div>
            <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-2 px-2 flex justify-between shadow-xl text-center'>
              <img src={restIcon} alt="" />
                <h1 className='text-Alata text-2xl leading-none font-bold'>El Tablazzo <br/> Parrilla</h1>
              <button onClick={map3}>
              <img src={Map} alt="" className='animate-pulse animate-duration-400 animate-infinite animate-delay-250 animate-ease-in-out'/>
              </button>
            </div>
            <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-2 px-2 flex justify-between shadow-xl'>
              <img src={restIcon} alt="" />
                <h1 className='text-Alata text-2xl font-bold'>El Españolete</h1>
              <button onClick={map4}>
              <img src={Map} alt="" className='animate-pulse animate-duration-400 animate-infinite animate-delay-300 animate-ease-in-out'/>
              </button>
            </div>
            <div className='bg-gray-100 opacity-80 rounded-md mb-3 mx-2 py-2 px-2 flex justify-between shadow-xl'>
              <img src={restIcon} alt="" />
                <h1 className='text-Alata text-2xl leading-none font-bold'>Taller-Café <br/> Vintage</h1>
              <button onClick={map5}>
              <img src={Map} alt="" className='animate-pulse animate-duration-400 animate-infinite animate-delay-350 animate-ease-in-out'/>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurants
