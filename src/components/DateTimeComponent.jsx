import { useState, useEffect } from 'react';
import { Calendar, Check } from 'lucide-react';
import IsseuesComponent from './IsseuesComponent';

export default function DateTimeComponent() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weekDates, setWeekDates] = useState([]);
  const [showWeekDates, setShowWeekDates] = useState(false);
  const [showDivs, setshowDivs] = useState({
    showAm:false,
    showAd:false,
    showAmNon:false,
    showAmNond:false,
    showTimeoff:false,
  });
//   const [showDivs,setShowDivs]=useState(false);
  const [options, setOptions] = useState({
    showSupportDivs: false,
    showProjectDivs: false,
    showTimeoffDivs: false
  });
  
  // Generate dates between start and end dates
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (start > end) {
        alert('End date must be after start date');
        return;
      }
      
      const dateArray = [];
      const currentDate = new Date(start);
      
      let count = 0;
      while (currentDate <= end && count < 7) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
        count++;
      }
      
      setWeekDates(dateArray);
      setShowWeekDates(true);
    }
  }, [startDate, endDate]);

  // Format date to string
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      weekday: 'short',
    //   ...(options.showDayNames ? { weekday: 'short' } : {})
    });
  };
  
  // Populated Data
  //const Support=['AM TICKET DELIVERY','AD TICKET DELIVERY','AMS NON TICKET DELIVERY','AMS NON TICKET NON DELIVERY','TIME OFF']
  const Project=['AD PROJECT DELIVERY','AD PROJECT NON DELIVERY','SI PROJECT DELIVERY','TIME OFF']
  const TimeOff=['TIME OFF']

  // Toggle checkbox options
  const handleCheckboxChange = (option) => {
    setOptions(prev => ({
        showSupportDivs: false,
        showProjectDivs: false,
        showTimeoffDivs: false,
      [option]: !prev[option]
    }));
  };

  const handleDropBox=(content)=>{
    setshowDivs(prev=>({
        ...prev,
        [content]:!prev[content]
    }));
  }
  

  return (
    <>
    {/* <div className="p-6 mx-auto bg-purple-700  shadow-md">
      
    </div> */}
    <div className='p-8'>
    <h2 className="text-2xl font-bold mb-6 text-purple-700">Select dates</h2>
      
      {/* Date selectors */}
      <div className="grid md:grid-cols-4 gap-4 mb-9 pb-10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              className="pl-10 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              className="pl-10 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Checkboxes */}
      
      <h2 className="text-2xl font-bold mb-6 text-purple-700 ">Select Role</h2>
      <div className=" grid grid-cols-7  max-sm:grid-cols-1 space-y-2 mb-6 pb-10">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            checked={options.showSupportDivs}
            onChange={() => handleCheckboxChange('showSupportDivs')}
          />
          <span className="text-sm text-gray-700">Support</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            checked={options.showProjectDivs}
            onChange={() => handleCheckboxChange('showProjectDivs')}
          />
          <span className="text-sm text-gray-700">Project</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            checked={options.showTimeoffDivs}
            onChange={() => handleCheckboxChange('showTimeoffDivs')}
          />
          <span className="text-sm text-gray-700">Time Off</span>
        </label>
      </div>
      
      {/* Week dates display */}
      {showWeekDates && weekDates.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">Week dates</h2>
          <div className="grid max-md:grid-cols-3 grid-cols-7 gap-2 pb-10">
            {weekDates.map((date, index) => {
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              
              return (
                <div key={index} className="grid items-center mb-4">
                    <div className='flex rounded-xl p-3 shadow-sm'>
                    {isWeekend?(
                    <>
                        <label className="ms-2 text-sm font-medium text-gray-500">{formatDate(date)}</label>
                    </>
                    ):(
                    <>
                        <input id="default-radio-1" type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label for="default-radio-1" className="ms-2 text-sm max-md:text-xs font-medium text-gray-900">{formatDate(date)}</label>
                    </>
                    )}
                    </div>
                </div>
              );
            })}
          </div>
          
          {/* Random Populated Divs */}
          
          {options.showSupportDivs && (
            <>
            <h2 className="text-2xl font-bold mb-6 text-purple-700">Select Issues</h2>
            <div className="mt-6 grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-lg:text-sm max-md:text-xs">
              <button
                  className={`hover:text-white hover:cursor-pointer hover:bg-purple-700 p-4 rounded-lg shadow flex items-center justify-center`}
                  onClick={(index)=>{
                    handleDropBox('showAm');
                  }}
                >
                    AM TICKET DELIVERY
                </button>
                <button
                  className={`hover:text-white hover:cursor-pointer hover:bg-purple-700 p-4 rounded-lg shadow flex items-center justify-center`}
                  onClick={(index)=>{
                    handleDropBox('showAd');
                  }}
                >
                    AD TICKET DELIVERY
                </button>
                <button
                  className={`hover:text-white hover:cursor-pointer hover:bg-purple-700 p-4 rounded-lg shadow flex items-center justify-center`}
                  onClick={(index)=>{
                    handleDropBox('showAmNon');
                  }}
                >
                    AMS NON TICKET DELIVERY
                </button>
                <button
                  className={`hover:text-white hover:cursor-pointer hover:bg-purple-700 p-4 rounded-lg shadow flex items-center justify-center`}
                  onClick={(index)=>{
                    handleDropBox('showAmNond');
                  }}
                >
                    AMS NON TICKET NON DELIVERY
                </button>
                <button
                  className={`hover:text-white hover:cursor-pointer hover:bg-purple-700 p-4 rounded-lg shadow flex items-center justify-center`}
                  onClick={(index)=>{
                    handleDropBox('showTimeoff');
                  }}
                >
                    TIME OFF
                </button>
            </div>
            <div className='grid grid-cols-3 max-md:grid-cols-1'>
                {showDivs.showAm?<IsseuesComponent handleDropBox={()=>handleDropBox('showAm')} text={'AM TICKET DELIVERY'}/>:<></>}
                {showDivs.showAd?<IsseuesComponent handleDropBox={()=>handleDropBox('showAd')} text={'AD TICKET DELIVERY'}/>:<></>}
                {showDivs.showAmNon?<IsseuesComponent handleDropBox={()=>handleDropBox('showAmNon')} text={'AMS NON TICKET DELIVERY'}/>:<></>}
                {showDivs.showAmNond?<IsseuesComponent handleDropBox={()=>handleDropBox('showAmNond')} text={'AMS NON TICKET NON DELIVERY'}/>:<></>}
                {showDivs.showTimeoff?<IsseuesComponent handleDropBox={()=>handleDropBox('showTimeoff')} text={'TIME OFF'}/>:<></>}
            </div>
            </>
          )}
          {options.showProjectDivs && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Project.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="font-medium">{project}</div>
                    {/* <div className="text-sm text-gray-600">Content for {weekDates[index % weekDates.length] ? formatDate(weekDates[index % weekDates.length]) : 'date'}</div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
          {options.showTimeoffDivs && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {TimeOff.map((timeoff, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="font-medium">{timeoff}</div>
                    {/* <div className="text-sm text-gray-600">Content for {weekDates[index % weekDates.length] ? formatDate(weekDates[index % weekDates.length]) : 'date'}</div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
    </>
    
  );
}