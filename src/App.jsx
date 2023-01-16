import React,{ useState } from 'react'
import './App.css'
import Header from './components/Header'
import Restaurants from './components/Restaurants'
import Sites from './components/Sites'
import PopUpMap from './pages/PopUpMap'
import Guides from './components/Guides'
import Products from './components/Products'


function App() {

  const [showMap, setShowMap] = useState(false)
  const handleOnClose = () => setShowMap(false)
  const [getUrl, newUrl] = useState('')

  return (
    <div className='h-screen bg-gray-700 overflow-x-hidden  justify-center lg:scroll-smooth lg:scrollbar-thin lg:scrollbar-thumb-teal-800 lg:scrollbar-track-teal-200 lg:overflow-y-scroll lg:scrollbar-thumb-rounded-full lg:scrollbar-track-rounded-full '>
      <Header/>
      <div className='flex flex-wrap justify-center items-start '>
      <Restaurants setShowMap={setShowMap} newUrl={newUrl}/>
      <Sites setShowMap={setShowMap} newUrl={newUrl}/>
      <Products/>
      <Guides/>
      </div>
      
      <PopUpMap onClose={handleOnClose} getUrl={getUrl} visible={showMap}/>
    </div>
    
  )
}

export default App
