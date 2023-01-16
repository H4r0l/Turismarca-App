import React from 'react'
import { IoCaretBackSharp } from "react-icons/io5";

export default function PopUpMap({visible, onClose, getUrl}) {
  
  const handleOnClose = (e) => {
    if(e.target.id === "container") onClose();
  }

  if(!visible) {
    return null;};

  return (
        <div
         id='container'
         onClick={handleOnClose}
         className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all'>
          <div className="bg-gray-700 h-auto rounded-xl px-4 py-1">
            <h1 className='text-3xl text-white font-Alata font-black px-2 pb-3'>Como llegar: </h1>
              <div id='map' >
              <iframe className='rounded-xl border-solid shadow-2xl shadow-indigo-500/50 h-[60vh] border-teal-500 border-4' src={getUrl}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className='flex justify-between'>
                <button className= " inline m-2 w-2/5 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={onClose}>
                <IoCaretBackSharp className='inline text-2xl'/>
                Ir Atras
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
