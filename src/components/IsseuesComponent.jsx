import React from 'react'
import { X } from 'lucide-react';

const IsseuesComponent = (props) => {
  return (
    <div className='shadow-lg p-10'>
        <div className='flex justify-between text-lg font-[600] pb-10'><h3>{props.text}</h3><button onClick={props.handleDropBox}><X /></button></div>
        <div>
        <select 
            // onChange={(e) => setTicketType(e.target.value)}
            placeholder='Type'
            className="block bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none"
        >
          <option value="" disabled selected>Type</option>
            <option>Bug</option>
            <option>Feature</option>
            <option>Enhancement</option>
        </select>
        <div className="mb-6 mt-6">
              {/* <label className="block text-gray-600 mb-2">Ticket No</label> */}
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Ticket No"
                  className="flex-grow border-b-2 border-purple-500 focus:outline-none py-1 max-[1000px]:w-[50%]"
                />
                <button className="bg-purple-700 text-white py-2 px-4 rounded ml-4 max-md:px-2">
                  GO
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default IsseuesComponent